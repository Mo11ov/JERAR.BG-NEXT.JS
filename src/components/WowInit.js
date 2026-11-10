"use client";

import { useEffect } from "react";

export default function WowInit() {
    useEffect(() => {
        if (typeof window === "undefined") return;

        const initWow = () => {
            if (window.WOW) {
                new window.WOW().init();
            }
        };

        const existingScript = document.querySelector('script[data-wow-loader="true"]');

        if (existingScript) {
            if (existingScript.dataset.loaded === "true") {
                initWow();
            } else {
                existingScript.addEventListener("load", initWow, { once: true });
            }
            return;
        }

        const script = document.createElement("script");
        script.src = "/lib/wow/wow.min.js";
        script.async = true;
        script.dataset.wowLoader = "true";
        script.onload = () => {
            script.dataset.loaded = "true";
            initWow();
        };

        document.body.appendChild(script);

        return () => {
            if (script.parentNode) {
                script.parentNode.removeChild(script);
            }
        };
    }, []);

    return null;
}

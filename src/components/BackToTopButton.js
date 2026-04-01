"use client";

import { useEffect } from 'react';

function BackToTopButton() {
    useEffect(() => {
        $('.back-to-top').hide();
    }, []);

    return (
        <div>
            <a href="#" className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top">
                <i className="bi bi-arrow-up"></i>
            </a>
        </div>
    );
}

export default BackToTopButton;
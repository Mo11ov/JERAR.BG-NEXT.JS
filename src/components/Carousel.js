"use client";

import { useRef, useEffect } from "react";
import Script from "next/script";
import Link from "next/link";
import carouselSlides from "@/data/carouselSlides";


function Carousel() {
    const carouselRef = useRef(null);

    const initCarousel = () => {
        if (!carouselRef.current || !window.$?.fn?.owlCarousel) return;
        window.$(carouselRef.current).owlCarousel({
            autoplay: true,
            autoplayTimeout: 10000,
            smartSpeed: 1100,
            loop: true,
            nav: true,
            dots: false,
            items: 1,
            navText: [
                '<i class="bi bi-chevron-left"></i>',
                '<i class="bi bi-chevron-right"></i>',
            ],
        });
    };

    // Handles the case where the component re-mounts (e.g. hot reload, navigation)
    // but the script is already loaded and won't fire onLoad again
    useEffect(() => {
        if (window.$?.fn?.owlCarousel) {
            initCarousel();
        }
    }, []);


    return (
        <>
            {/* Owl Carousel script lives here, next to the component that needs it */}
            <Script
                src="/lib/owlcarousel/owl.carousel.min.js"
                strategy="afterInteractive"
                onLoad={initCarousel}   // fires exactly when the library is ready
            />

            {/* Carousel */}
            <div className="container-fluid p-0 pb-5 wow fadeIn" data-wow-delay="0.1s">
                <div
                    className="owl-carousel header-carousel position-relative"
                    ref={carouselRef}
                >
                    {carouselSlides.map((slide, index) => (
                        <div key={index} className="owl-carousel-item position-relative">
                            <img className="img-fluid" src={slide.img} alt="" />
                            <div className="owl-carousel-inner">
                                <div className="container">
                                    <div className="row justify-content-start">
                                        <div className="col-lg-8">
                                            <p className="text-primary text-uppercase fw-bold mb-2">
                                                {slide.title}
                                            </p>
                                            <h1 className="display-1 text-light mb-4 animated slideInDown">
                                                {slide.heading}
                                            </h1>
                                            <p className="text-light fs-5 mb-4 pb-3">
                                                {slide.sub}
                                            </p>
                                            <Link href="/contact" className="btn btn-primary rounded-pill py-3 px-5">
                                                Поискайте мостри
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Carousel;
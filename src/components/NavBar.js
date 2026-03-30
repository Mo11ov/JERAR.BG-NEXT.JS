"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Script from "next/script";
import { usePathname } from "next/navigation";
import carouselSlides from "@/data/carouselSlides";

function NavBar() {
    const pathname = usePathname();
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const navbarCollapseRef = useRef(null);
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

    const navLinksBefore = [
        { name: "За Нас", href: "/about" },
        { name: "Асортимент и услуги", href: "/products" },
        { name: "Контакти", href: "/contact" },
    ];

    const isActive = (href) =>
        pathname === href || pathname.startsWith(`${href}/`);

    const closeMobileMenu = () => {
        if (typeof window === "undefined") return;
        const isMobile = window.innerWidth < 992;
        if (navbarCollapseRef.current && isMobile) {
            navbarCollapseRef.current.classList.remove("show");
        }
        if (isMobile) setDropdownOpen(false);
    };

    return (
        <>
            {/* Owl Carousel script lives here, next to the component that needs it */}
            <Script
                src="/lib/owlcarousel/owl.carousel.min.js"
                strategy="afterInteractive"
                onLoad={initCarousel}   // fires exactly when the library is ready
            />

            <nav
                className="navbar navbar-expand-lg navbar-dark fixed-top py-lg-0 px-lg-5 wow fadeIn"
                data-wow-delay="0.1s"
            >
                <Link href="/" className="navbar-brand ms-4 ms-lg-0">
                    <h1 className="text-primary m-0">Жерар СД</h1>
                </Link>
                <button
                    type="button"
                    className="navbar-toggler me-4"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarCollapse"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse" ref={navbarCollapseRef}>
                    <div className="navbar-nav mx-auto p-4 p-lg-0">
                        {navLinksBefore.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`nav-item nav-link ${isActive(link.href) ? "active" : ""}`}
                                onClick={closeMobileMenu}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                    <div className="d-none d-lg-flex">
                        <div className="flex-shrink-0 btn-lg-square border border-light rounded-circle">
                            <i className="fa fa-phone text-primary" />
                        </div>
                        <div className="ps-3">
                            <small className="text-primary mb-0">Телефон</small>
                            <p className="text-light fs-5 mb-0">088 771 2704</p>
                        </div>
                    </div>
                </div>
            </nav>

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
    );
}

export default NavBar;
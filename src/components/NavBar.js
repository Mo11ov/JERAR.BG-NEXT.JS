"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavBar() {
    const pathname = usePathname();

    const [isDropdownOpen, setDropdownOpen] = useState(false);
    // const isPagesActive =
    //     pathname.startsWith("/team") ||
    //     pathname.startsWith("/testimonial") ||
    //     pathname.startsWith("/404");

    const navbarCollapseRef = useRef(null);

    const navLinksBefore = [
        { name: "За Нас", href: "/about" },
        { name: "Асортимент и услуги", href: "/products" },
    ];

    // const navLinksPages = [
    //     { name: "Our Team", href: "/team" },
    //     { name: "Testimonial", href: "/testimonial" },
    //     { name: "404 Page", href: "/404" },
    // ];

    const navLinksAfter = [
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

        if (isMobile) {
            setDropdownOpen(false);
        }
    };

    return (
        <>
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

                <div
                    className="collapse navbar-collapse"
                    id="navbarCollapse"
                    ref={navbarCollapseRef}
                >
                    <div className="navbar-nav mx-auto p-4 p-lg-0">
                        {/* Before dropdown */}
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

                        {/* Inner dropdown */}
                        {/* <div
                            className={`nav-item dropdown ${isDropdownOpen ? "show" : ""}`}
                            onMouseEnter={() => setDropdownOpen(true)}
                            onMouseLeave={() => setDropdownOpen(false)}
                        >
                            <span
                                className={`nav-link dropdown-toggle ${isPagesActive ? "active" : ""}`}
                                role="button"
                                data-bs-toggle="dropdown"
                            >
                                Pages
                            </span>
                            <div className={`dropdown-menu m-0 ${isDropdownOpen ? "show" : ""}`}>
                                {navLinksPages.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className={`dropdown-item ${isActive(link.href) ? "active" : ""}`}
                                        onClick={closeMobileMenu}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                        </div> */}

                        {/* After dropdown */}
                        {navLinksAfter.map((link) => (
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
                <div className="owl-carousel header-carousel position-relative">
                    {[1, 2].map((n) => (
                        <div key={n} className="owl-carousel-item position-relative">
                            <img className="img-fluid" src={`img/carousel-${n}.jpg`} alt="" />
                            <div className="owl-carousel-inner">
                                <div className="container">
                                    <div className="row justify-content-start">
                                        <div className="col-lg-8">
                                            <p className="text-primary text-uppercase fw-bold mb-2">
                                                ПЪРВОКЛАСНИ ХЛЕБНИ РЕШЕНИЯ
                                            </p>
                                            <h1 className="display-1 text-light mb-4 animated slideInDown">
                                                Тайната съставка на Вашето меню
                                            </h1>
                                            <p className="text-light fs-5 mb-4 pb-3">
                                                Открийте безупречния вкус и текстура на нашите хлебни изделия, създадени за професионалисти. Ежедневни доставки, конкурентни цени.
                                            </p>
                                            <Link href="/products" className="btn btn-primary rounded-pill py-3 px-5">
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
"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavBar() {
    const pathname = usePathname();
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const navbarCollapseRef = useRef(null);

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
        </>
    );
}

export default NavBar;
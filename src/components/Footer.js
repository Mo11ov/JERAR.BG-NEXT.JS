import Link from "next/link";
import { companyData } from "@/data/companyData";

function Footer() {
    return (
        <>
            <div
                className="container-fluid bg-dark text-light footer my-6 mb-0 py-5 wow fadeIn"
                data-wow-delay="0.1s"
            >
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-lg-3 col-md-6">
                            <h4 className="text-light mb-4">Свържете се с Нас</h4>
                            <p className="mb-2">
                                <i className="fa fa-map-marker-alt me-3" />
                                {companyData.address}
                            </p>
                            <p className="mb-2">
                                <i className="fa fa-phone-alt me-3" />
                                {companyData.telephone}
                            </p>
                            <p className="mb-2">
                                <i className="fa fa-envelope me-3" />
                                {companyData.mainEmail}
                            </p>
                            <p className="mb-2">
                                <i className="fa fa-envelope me-3" />
                                {companyData.secondaryEmail}
                            </p>
                            <div className="d-flex pt-2">
                                <a
                                    className="btn btn-square btn-outline-light rounded-circle me-1"
                                    href=""
                                >
                                    <i className="fab fa-twitter" />
                                </a>
                                <a
                                    className="btn btn-square btn-outline-light rounded-circle me-1"
                                    href=""
                                >
                                    <i className="fab fa-facebook-f" />
                                </a>
                                <a
                                    className="btn btn-square btn-outline-light rounded-circle me-1"
                                    href=""
                                >
                                    <i className="fab fa-youtube" />
                                </a>
                                <a
                                    className="btn btn-square btn-outline-light rounded-circle me-0"
                                    href=""
                                >
                                    <i className="fab fa-linkedin-in" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h4 className="text-light mb-4">Жерар СД</h4>
                            <Link className="btn btn-link" href="/about">
                                За Нас
                            </Link>
                            <Link className="btn btn-link" href="/contact">
                                Контакти
                            </Link>
                            <Link className="btn btn-link" href="/products">
                                Асортимент и услуги
                            </Link>
                            <Link className="btn btn-link" href="/privacy">
                                Политика за поверителност
                            </Link>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <h4 className="text-light mb-4">Галерия</h4>
                            <div className="row g-2">
                                <div className="col-4">
                                    <img
                                        className="img-fluid bg-light rounded p-1"
                                        src="img/product-1.jpg"
                                        alt="Image"
                                    />
                                </div>
                                <div className="col-4">
                                    <img
                                        className="img-fluid bg-light rounded p-1"
                                        src="img/product-2.jpg"
                                        alt="Image"
                                    />
                                </div>
                                <div className="col-4">
                                    <img
                                        className="img-fluid bg-light rounded p-1"
                                        src="img/product-3.jpg"
                                        alt="Image"
                                    />
                                </div>
                                <div className="col-4">
                                    <img
                                        className="img-fluid bg-light rounded p-1"
                                        src="img/product-2.jpg"
                                        alt="Image"
                                    />
                                </div>
                                <div className="col-4">
                                    <img
                                        className="img-fluid bg-light rounded p-1"
                                        src="img/product-3.jpg"
                                        alt="Image"
                                    />
                                </div>
                                <div className="col-4">
                                    <img
                                        className="img-fluid bg-light rounded p-1"
                                        src="img/product-1.jpg"
                                        alt="Image"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h4 className="text-white mb-3">Работно време</h4>
                            <p className="mb-2">Пон–Пет: 08:00 – 17:00</p>
                            <p className="mb-2">Събота: 10:00 – 14:00</p>
                            <p className="mb-2">Почивен ден: Неделя</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer End */}
            {/* Copyright Start */}
            <div
                className="container-fluid copyright text-light py-4 wow fadeIn"
                data-wow-delay="0.1s"
            >
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            © {new Date().getFullYear()} <a href="#">Жерар СД</a>, Всички права запазени.
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            Developed by <a href="https://www.linkedin.com/in/mollov/" target="_blank" rel="noopener noreferrer">Rashko Mollov</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Copyright End */}
        </>
    )
}

export default Footer;
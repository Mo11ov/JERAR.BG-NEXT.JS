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
                            <h4 className="text-light mb-4">Office Address</h4>
                            <p className="mb-2">
                                <i className="fa fa-map-marker-alt me-3" />
                                123 Street, New York, USA
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
                            <h4 className="text-light mb-4">Quick Links</h4>
                            <a className="btn btn-link" href="">
                                About Us
                            </a>
                            <a className="btn btn-link" href="">
                                Contact Us
                            </a>
                            <a className="btn btn-link" href="">
                                Our Services
                            </a>
                            <a className="btn btn-link" href="">
                                Terms &amp; Condition
                            </a>
                            <a className="btn btn-link" href="">
                                Support
                            </a>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h4 className="text-light mb-4">Quick Links</h4>
                            <a className="btn btn-link" href="">
                                About Us
                            </a>
                            <a className="btn btn-link" href="">
                                Contact Us
                            </a>
                            <a className="btn btn-link" href="">
                                Our Services
                            </a>
                            <a className="btn btn-link" href="">
                                Terms &amp; Condition
                            </a>
                            <a className="btn btn-link" href="">
                                Support
                            </a>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h4 className="text-light mb-4">Photo Gallery</h4>
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
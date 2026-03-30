import Link from "next/link";

function TopBar() {
    return (
        <div
            className="container-fluid top-bar bg-dark text-light px-0 wow fadeIn"
            data-wow-delay="0.1s"
        >
            <div className="row gx-0 align-items-center d-none d-lg-flex">
                <div className="col-lg-6 px-5 text-start">
                    <ol className="breadcrumb mb-0">
                        <li className="breadcrumb-item">
                            <Link className="small text-light" href="/about">
                                За Нас
                            </Link>
                        </li>
                        <li className="breadcrumb-item">
                            <Link className="small text-light" href="/contact">
                                Контакти
                            </Link>
                        </li>
                        <li className="breadcrumb-item">
                            <Link className="small text-light" href="privacy">
                                Политика за поверителност
                            </Link>
                        </li>
                    </ol>
                </div>
                <div className="col-lg-6 px-5 text-end">
                    <small>Follow us:</small>
                    <div className="h-100 d-inline-flex align-items-center">
                        <a className="btn-lg-square text-primary border-end rounded-0" href="">
                            <i className="fab fa-facebook-f" />
                        </a>
                        <a className="btn-lg-square text-primary border-end rounded-0" href="">
                            <i className="fab fa-twitter" />
                        </a>
                        <a className="btn-lg-square text-primary border-end rounded-0" href="">
                            <i className="fab fa-linkedin-in" />
                        </a>
                        <a className="btn-lg-square text-primary pe-0" href="">
                            <i className="fab fa-instagram" />
                        </a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default TopBar;
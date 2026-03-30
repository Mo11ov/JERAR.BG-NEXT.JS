function Carousel() {
    return (
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
                                            ЗАЯНАТЧИЙСКА ПЕКАРНА
                                        </p>
                                        <h1 className="display-1 text-light mb-4 animated slideInDown">
                                            Печем със страст за Вашите клиенти
                                        </h1>
                                        <p className="text-light fs-5 mb-4 pb-3">
                                            Доверете се на ежедневното качество на нашите прясно изпечени чиабати, франзели и специалитети. Ние сме Вашият надежден партньор в кухнята.
                                        </p>
                                        {/* <Link href="#" className="btn btn-primary rounded-pill py-3 px-5">
                                            Read More
                                        </Link> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Carousel;
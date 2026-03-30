function AboutUs() {
    return (
        <>
            {/* Facts Start */}
            <div className="container-xxl py-6">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-lg-3 col-md-6 wow fadeIn" data-wow-delay="0.1s">
                            <div className="fact-item bg-light rounded text-center h-100 p-5">
                                <i className="fa fa-certificate fa-4x text-primary mb-4" />
                                <p className="mb-2">Години опит</p>
                                <h1 className="display-5 mb-0" data-toggle="counter-up">
                                    26
                                </h1>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeIn" data-wow-delay="0.3s">
                            <div className="fact-item bg-light rounded text-center h-100 p-5">
                                <i className="fa fa-users fa-4x text-primary mb-4" />
                                <p className="mb-2">Квалифицирани професионалисти</p>
                                <h1 className="display-5 mb-0" data-toggle="counter-up">
                                    17
                                </h1>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeIn" data-wow-delay="0.5s">
                            <div className="fact-item bg-light rounded text-center h-100 p-5">
                                <i className="fa fa-bread-slice fa-4x text-primary mb-4" />
                                <p className="mb-2">Total Products</p>
                                <h1 className="display-5 mb-0" data-toggle="counter-up">
                                    135
                                </h1>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeIn" data-wow-delay="0.7s">
                            <div className="fact-item bg-light rounded text-center h-100 p-5">
                                <i className="fa fa-cart-plus fa-4x text-primary mb-4" />
                                <p className="mb-2">Order Everyday</p>
                                <h1 className="display-5 mb-0" data-toggle="counter-up">
                                    9357
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Facts End */}
            {/* About Start */}
            <div className="container-xxl py-6">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="row img-twice position-relative h-100">
                                <div className="col-6">
                                    <img className="img-fluid rounded" src="img/service-1.jpg" alt="" />
                                </div>
                                <div className="col-6 align-self-end">
                                    <img className="img-fluid rounded" src="img/service-2.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="h-100">
                                <p className="text-primary text-uppercase mb-2">// За Нас</p>
                                <h1 className="display-6 mb-4">
                                    Качество, на което бизнесът се доверява
                                </h1>
                                <p>
                                    „Жерар СД“ ЕООД не просто произвежда хляб – ние създаваме основата за успешното меню на нашите партньори. Като утвърден доставчик за редица търговски вериги, заведения и дистрибутори, ние съчетаваме съвременните производствени технологии с прецизния ръчен контрол, за да гарантираме перфектен резултат при всяко изпичане.
                                </p>
                                <p>
                                    С богатото ни портфолио от традиционни хлебни изделия, хрупкави франзели и автентични чиабати, ние предлагаме разнообразни решения, които отговарят на високите изисквания на модерната кухня.
                                </p>
                                <p>
                                    Вярваме, че в професионалния сектор доверието се гради върху три стълба: безупречно качество, коректни доставки и конкурентни цени. Нашата производствена база отговаря на всички европейски стандарти за безопасност и хигиена, а системата ни за вътрешен контрол и постоянната обратна връзка с клиентите ни позволяват да подобряваме продуктите си всеки ден.
                                </p>
                                <p>
                                    За „Жерар СД“ всеки бизнес клиент е дългосрочен партньор, на когото предлагаме гъвкавост, лоялност и истински вкус, който Вашите клиенти ще оценят.
                                </p>
                                <div className="row g-2 mb-4">
                                    <div className="col-sm-6">
                                        <i className="fa fa-check text-primary me-2" />
                                        Качествени продукти
                                    </div>
                                    <div className="col-sm-6">
                                        <i className="fa fa-check text-primary me-2" />
                                        Персонализирани продукти
                                    </div>
                                    <div className="col-sm-6">
                                        <i className="fa fa-check text-primary me-2" />
                                        Лесно поръчване
                                    </div>
                                    <div className="col-sm-6">
                                        <i className="fa fa-check text-primary me-2" />
                                        Безплатна доставка
                                    </div>
                                </div>
                                <a className="btn btn-primary rounded-pill py-3 px-5" href="">
                                    Прочети повече
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default AboutUs;
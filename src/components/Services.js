function Services() {
    return (
        <div className="container-xxl py-6">
            <div className="container">
                <div className="row g-5">
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                        <p className="text-primary text-uppercase mb-2">// Нашите услуги</p>
                        <h1 className="display-6 mb-4">Какво Ви предлагаме?</h1>
                        <p className="mb-5">
                            Ние разбираме, че хлябът е основата на доброто меню. Затова предлагаме на нашите бизнес партньори не просто продукти, а цялостни решения – от занаятчийски чиабати до хрупкави франзели, изпечени с внимание към всеки детайл и доставени точно навреме.
                        </p>
                        <div className="row gy-5 gx-4">
                            <div className="col-sm-6 wow fadeIn" data-wow-delay="0.1s">
                                <div className="d-flex align-items-center mb-3">
                                    <div className="flex-shrink-0 btn-square bg-primary rounded-circle me-3">
                                        <i className="fa fa-bread-slice text-white" />
                                    </div>
                                    <h5 className="mb-0">Качествени продукти</h5>
                                </div>
                                <span>
                                    Използваме подбрани брашна и традиционни методи на бавна ферментация. Резултатът е хляб с автентичен вкус и чист етикет – без компромиси в качеството за Вашите гости.
                                </span>
                            </div>
                            <div className="col-sm-6 wow fadeIn" data-wow-delay="0.2s">
                                <div className="d-flex align-items-center mb-3">
                                    <div className="flex-shrink-0 btn-square bg-primary rounded-circle me-3">
                                        <i className="fa fa-birthday-cake text-white" />
                                    </div>
                                    <h5 className="mb-0">Персонализирани продукти</h5>
                                </div>
                                <span>
                                    Разработваме уникални рецепти, форми и размери, съобразени с нуждите на Вашето меню. Създайте собствен почерк с хлебчета, създадени специално за Вашия бранд.
                                </span>
                            </div>
                            <div className="col-sm-6 wow fadeIn" data-wow-delay="0.3s">
                                <div className="d-flex align-items-center mb-3">
                                    <div className="flex-shrink-0 btn-square bg-primary rounded-circle me-3">
                                        <i className="fa fa-cart-plus text-white" />
                                    </div>
                                    <h5 className="mb-0">Лесно поръчване</h5>
                                </div>
                                <span>
                                    Оптимизиран процес на заявки, който пести време на Вашия екип. Предлагаме гъвкави графици и бърза комуникация, за да сте сигурни, че кухнята Ви винаги е заредена.
                                </span>
                            </div>
                            <div className="col-sm-6 wow fadeIn" data-wow-delay="0.4s">
                                <div className="d-flex align-items-center mb-3">
                                    <div className="flex-shrink-0 btn-square bg-primary rounded-circle me-3">
                                        <i className="fa fa-truck text-white" />
                                    </div>
                                    <h5 className="mb-0">Безплатна доставка</h5>
                                </div>
                                <span>
                                    Осигуряваме надежден транспорт директно до Вашия обект в удобно за Вас време. Гарантираме максимална свежест на продуктите при всяка доставка.
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="row img-twice position-relative h-100">
                            <div className="col-6">
                                <img
                                    className="img-fluid rounded"
                                    src="img/about-1.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="col-6 align-self-end">
                                <img
                                    className="img-fluid rounded"
                                    src="img/about-2.jpg"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;
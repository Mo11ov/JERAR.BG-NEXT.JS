function Contact() {
    return (
        <>
            {/* Contact Start */}
            <div className="container-xxl py-6">
                <div className="container">
                    <div
                        className="text-center mx-auto mb-5 wow fadeInUp"
                        data-wow-delay="0.1s"
                        style={{ maxWidth: 600 }}
                    >
                        <p className="text-primary text-uppercase mb-2">// Свържете се с нас</p>
                        <h1 className="display-6 mb-4">
                            Имате въпрос или искате да направите поръчка?
                        </h1>
                        <p className="text-muted">
                            За момента приемаме поръчки само по телефон. Обадете се ни и ще се погрижим за всичко останало.
                        </p>
                    </div>

                    {/* Phone Card */}
                    <div className="row justify-content-center mb-5">
                        <div className="col-lg-5 col-md-7 wow fadeInUp" data-wow-delay="0.2s">
                            <div className="bg-light rounded p-5 text-center">
                                <div
                                    className="btn-lg-square bg-primary rounded-circle mx-auto mb-4"
                                    style={{ width: 64, height: 64, display: "flex", alignItems: "center", justifyContent: "center" }}
                                >
                                    <i className="fa fa-phone fa-lg text-white" />
                                </div>
                                <h4 className="mb-2">Телефон за поръчки</h4>
                                <p className="text-muted mb-3">Работно време: Пон – Пет, 08:00 – 17:00</p>
                                <a
                                    href="tel:0887712704"
                                    className="btn btn-primary rounded-pill py-3 px-5 fs-5"
                                >
                                    088 771 2704
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Coming Soon Banner */}
                <div className="row justify-content-center">
                    <div className="col-lg-8 wow fadeInUp" data-wow-delay="0.3s">
                        <div
                            className="rounded p-5 text-center"
                            style={{ border: "2px dashed var(--bs-primary)" }}
                        >
                            <p className="text-primary text-uppercase fw-bold mb-2">// Очаквайте скоро</p>
                            <h4 className="mb-3">Нови начини за поръчка</h4>
                            <p className="text-muted mb-0">
                                Работим върху нови удобни начини за поръчка — онлайн формуляр, имейл и още.
                                Следете ни за новини!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Contact End */}

            {/* Google Map Start */}
            <div className="container-xxl py-6 px-0 wow fadeInUp" data-wow-delay="0.1s">
                <iframe
                    className="w-100 mb-n2"
                    style={{ height: 450 }}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d792.6994456176357!2d27.878300273781274!3d43.217157307948284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a45482f2ecc0c9%3A0x28b08c963bef3236!2z0JbQtdGA0LDRgCDQldCe0J7QlA!5e0!3m2!1sbg!2sbg!4v1774872626157!5m2!1sbg!2sbg" width="600" height="450" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                    frameBorder={0}
                    allowFullScreen=""
                    aria-hidden="false"
                    tabIndex={0}
                />
            </div>
            {/* Google Map End */}
        </>
    );
}

export default Contact;
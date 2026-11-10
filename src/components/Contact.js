import { companyData } from "@/data/companyData";

const warehouseCoordinates = "43.2171688,27.8787881";
const googleMapsLink = `https://www.google.com/maps/dir/?api=1&destination=${warehouseCoordinates}`;

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

                    {/* Phone + Address Cards */}
                    <div className="row justify-content-center mb-5 g-4">
                        {/* Phone Card */}
                        <div className="col-lg-5 col-md-7 wow fadeInUp" data-wow-delay="0.2s">
                            <div className="bg-light rounded p-5 text-center">
                                <div
                                    className="btn-lg-square bg-primary rounded-circle mx-auto mb-4"
                                    style={{ width: 64, height: 64, display: "flex", alignItems: "center", justifyContent: "center" }}
                                >
                                    <i className="fa fa-phone fa-lg text-white" />
                                </div>
                                <h4 className="mb-2">Телефон за поръчки</h4>
                                <p className="text-muted mb-3">Работно време: Пон – Пет, 08:00 – 18:00</p>

                                <div className="d-flex justify-content-center flex-wrap gap-3">
                                    <a href={`tel:${companyData.telForOrders}`} className="btn btn-primary rounded-pill py-3 px-4 fs-5">
                                        {companyData.telForOrders}
                                    </a>
                                    <a href={`tel:${companyData.secondTelForOrders}`} className="btn btn-primary rounded-pill py-3 px-4 fs-5">
                                        {companyData.secondTelForOrders}
                                    </a>
                                </div>
                            </div>

                        </div>

                        {/* Address Card */}
                        <div className="col-lg-5 col-md-7 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="bg-light rounded p-5 text-center">
                                <div
                                    className="btn-lg-square bg-primary rounded-circle mx-auto mb-4"
                                    style={{ width: 64, height: 64, display: "flex", alignItems: "center", justifyContent: "center" }}
                                >
                                    <i className="fa fa-map-marker-alt fa-lg text-white" />
                                </div>
                                <h4 className="mb-2">Адрес</h4>
                                <p className="text-muted mb-3">{companyData.address}</p>

                                <a
                                    href={googleMapsLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary rounded-pill py-3 px-5 fs-5"
                                >
                                    <i className="fa fa-map-marker-alt me-2" />
                                    Намери ни на картата
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Coming Soon Banner */}
                    <div className="row justify-content-center">
                        <div className="col-lg-8 wow fadeInUp" data-wow-delay="0.4s">
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
            </div>
            {/* Contact End */}

            {/* Google Map Start */}
            <div className="container-xxl py-6 px-0 wow fadeInUp" data-wow-delay="0.1s">
                <iframe
                    className="w-100 mb-n2"
                    style={{ height: 450 }}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2907.6338387233527!2d27.878788099999994!3d43.217168799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a45482f2ecc0c9%3A0x28b08c963bef3236!2z0JbQtdGA0LDRgCDQodCUINCV0J7QntCU!5e0!3m2!1sbg!2sbg!4v1794327765857!5m2!1sbg!2sbg"
                    width="600"
                    height="450"
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
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
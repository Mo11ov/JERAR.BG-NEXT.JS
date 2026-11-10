const clients = [
    { name: "Alpha Foods", initials: "AF", color: "#0d6efd" },
    { name: "BluePeak", initials: "BP", color: "#198754" },
    { name: "Nova Group", initials: "NG", color: "#dc3545" },
    { name: "CityWorks", initials: "CW", color: "#6610f2" },
    { name: "Harbor Co.", initials: "HC", color: "#fd7e14" },
    { name: "SilverLine", initials: "SL", color: "#20c997" },
    { name: "Green Valley", initials: "GV", color: "#0dcaf0" },
    { name: "PrimeTrade", initials: "PT", color: "#6c757d" },
];

function Clients() {
    return (
        <div className="container py-5 wow fadeInUp" data-wow-delay="0.4s">
            <div className="text-center mb-5">
                <p className="text-primary text-uppercase fw-bold mb-2">Нашите клиенти</p>
                <h2 className="display-5 fw-bold mb-3">Доверяват ни се водещи вериги и ресторанти</h2>
                <p className="text-secondary mx-auto" style={{ maxWidth: "700px" }}>
                    Още един пример за проста страница, в която клиентите могат да покажат
                    своето лого и име на видно място.
                </p>
            </div>

            <div className="row g-4 justify-content-center">
                {clients.map((client) => (
                    <div key={client.name} className="col-6 col-md-4 col-lg-3">
                        <div className="h-100 border rounded-4 bg-white shadow-sm p-4 text-center">
                            <div
                                className="mx-auto mb-3 d-flex align-items-center justify-content-center rounded-circle text-white fw-bold"
                                style={{
                                    width: "72px",
                                    height: "72px",
                                    backgroundColor: client.color,
                                    fontSize: "1.25rem",
                                    letterSpacing: "0.08em",
                                }}
                            >
                                {client.initials}
                            </div>
                            <div className="fw-semibold text-dark">{client.name}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Clients;

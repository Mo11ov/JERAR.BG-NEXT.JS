import { products } from "@/data/productsData";

// Subcomponent
const ProductItems = ({ products }) => {
    return products?.map(({ name, description, imageUrl, weight }, i) => (
        <div key={i} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="product-item d-flex flex-column bg-white rounded overflow-hidden h-100">
                <div className="text-center p-4">
                    <div className="d-inline-block border border-primary rounded-pill px-3 mb-3">
                        {weight}
                    </div>
                    <h3 className="mb-3">{name}</h3>
                    <span>
                        {description}
                    </span>
                </div>
                <div className="position-relative mt-auto">
                    <img className="img-fluid" src={imageUrl} alt="" />
                    <div className="product-overlay">
                        <a
                            className="btn btn-lg-square btn-outline-light rounded-circle"
                            href=""
                        >
                            <i className="fa fa-eye text-primary" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    ));
};

function Products() {
    return (
        <>
            <div className="container-xxl bg-light my-6 py-6 pt-0">
                <div className="container">
                    <div
                        className="bg-primary text-light rounded-bottom p-5 my-6 mt-0 wow fadeInUp"
                        data-wow-delay="0.1s"
                    >
                        <div className="row g-4 align-items-center">
                            <div className="col-lg-6">
                                <h1 className="display-4 text-light mb-0">
                                    Истински хляб. За Вашия бизнес
                                </h1>
                            </div>
                            <div className="col-lg-6 text-lg-end">
                                <div className="d-inline-flex align-items-center text-start">
                                    <i className="fa fa-phone-alt fa-4x flex-shrink-0" />
                                    <div className="ms-4">
                                        <p className="fs-5 fw-bold mb-0">Поискайте мостри</p>
                                        <p className="fs-1 fw-bold mb-0">088 771 2704</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="text-center mx-auto mb-5 wow fadeInUp"
                        data-wow-delay="0.1s"
                        style={{ maxWidth: 500 }}
                    >
                        <p className="text-primary text-uppercase mb-2">// Хлебни изделия</p>
                        <h1 className="display-6 mb-4">
                            Разгледайте нашите хлебни изделия
                        </h1>
                    </div>
                    <div className="row g-4">
                        <ProductItems products={products} />
                    </div>
                </div>
            </div>
        </>

    )
}

export default Products;
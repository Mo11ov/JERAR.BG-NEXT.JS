"use client";

import { useState } from "react";
import Image from "next/image";
import { products } from "@/data/productsData";

// Lightbox Modal — pure Bootstrap, zero custom CSS
const ImageModal = ({ image, onClose }) => {
    if (!image) return null;

    return (
        <>
            {/* Backdrop */}
            <div
                className="modal-backdrop fade show"
                onClick={onClose}
            />

            {/* Modal */}
            <div
                className="modal fade show d-block"
                tabIndex="-1"
                role="dialog"
                onClick={onClose}
            >
                <div
                    className="modal-dialog modal-dialog-centered modal-lg"
                    role="document"
                    onClick={(e) => e.stopPropagation()} // prevent close when clicking image
                >
                    <div className="modal-content bg-transparent border-0 shadow-none">
                        <div className="modal-header border-0 pb-0 justify-content-end">
                            <button
                                type="button"
                                className="btn-close btn-close-white"
                                onClick={onClose}
                            />
                        </div>
                        <div className="modal-body text-center p-0">
                            <Image
                                src={image}
                                alt=""
                                width={800}
                                height={640}
                                className="img-fluid rounded"
                                style={{ width: "100%", height: "auto" }}
                                priority  // load immediately when modal opens, don't lazy-load it
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

// Subcomponent
const ProductItems = ({ products, onImageClick }) => {
    return products?.map(({ name, description, imageUrl, weight }, i) => (
        <div key={i} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="product-item d-flex flex-column bg-white rounded overflow-hidden h-100">
                <div className="text-center p-4">
                    <div className="d-inline-block border border-primary rounded-pill px-3 mb-3">
                        {weight}
                    </div>
                    <h3 className="mb-3">{name}</h3>
                    <span>{description}</span>
                </div>
                <div className="position-relative mt-auto">
                    <Image
                        src={imageUrl}
                        alt={name}
                        width={800}
                        height={640}
                        className="img-fluid"
                        style={{ width: "100%", height: "auto" }}
                    />
                    <div className="product-overlay">
                        <button
                            className="btn btn-lg-square btn-outline-light rounded-circle"
                            onClick={() => onImageClick(imageUrl)}
                            aria-label="View image"
                        >
                            <i className="fa fa-eye text-primary" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    ));
};

function Products() {
    const [activeImage, setActiveImage] = useState(null);

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
                        <ProductItems
                            products={products}
                            onImageClick={setActiveImage}
                        />
                    </div>
                </div>
            </div>

            {/* Lightbox */}
            <ImageModal
                image={activeImage}
                onClose={() => setActiveImage(null)}
            />
        </>
    );
}

export default Products;
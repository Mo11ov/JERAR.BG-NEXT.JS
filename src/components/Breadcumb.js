import Link from "next/link";

function BreadCumb({ page }) {
    return (
        <div className="page-header py-5 text-center">
            <div className="container py-5">
                <h1
                    className="display-3 text-white mb-3 animated slideInDown"
                    style={{ fontFamily: 'var(--font-nunito)' }}
                >
                    {page}
                </h1>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb justify-content-center">
                        <li className="breadcrumb-item">
                            <Link href="/" className="text-white text-decoration-none">
                                Начало
                            </Link>
                        </li>
                        <li className="breadcrumb-item text-white active" aria-current="page">
                            {page}
                        </li>
                    </ol>
                </nav>
            </div>
        </div>
    )
}

export default BreadCumb;
import Products from "@/components/Products";
import Services from "@/components/Services";
import BreadCumb from "@/components/Breadcumb";

export const metadata = {
    title:
        "Асортимент и услуги - Жерар СД",
    description:
        "Производство на хлебни изделия за вашия бизнес",
    alternates: {
        canonical: "https://www.jerar.bg/products",
    },
};

export default function ProductPage() {
    return (
        <>
            <BreadCumb page={"Асортимент и услуги"} />
            <Services />
            <Products />
        </>
    )
}
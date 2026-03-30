import Contact from "@/components/Contact";
import BreadCumb from "@/components/Breadcumb";

export const metadata = {
    title:
        "Контакти - Жерар СД",
    description:
        "Производство на хлебни изделия за вашия бизнес",
    alternates: {
        canonical: "https://www.jerar.bg/contact",
    },
};

export default function ContactPage() {
    return (
        <>
            <BreadCumb page="Контакти" />
            <Contact />
        </>
    )
}
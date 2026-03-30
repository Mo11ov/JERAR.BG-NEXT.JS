import AboutUs from "@/components/AboutUs";
import BreadCumb from "@/components/Breadcumb";

export const metadata = {
    title:
        "За Нас - Жерар СД",
    description:
        "Производство на хлебни изделия за вашия бизнес в гр. Варна.",
    alternates: {
        canonical: "https://www.jerar.bg/about",
    },
};

export default function AboutPage() {
    return (
        <>
            <BreadCumb page={"За Нас"} />
            <AboutUs />
        </>
    )
}
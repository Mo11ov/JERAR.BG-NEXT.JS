import AboutUs from "@/components/AboutUs";

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
    return (<>
        <AboutUs />
    </>)
}
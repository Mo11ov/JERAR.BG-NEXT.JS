import BreadCumb from "@/components/Breadcumb";
import Clients from "@/components/Clients";

export const metadata = {
    title: "Клиенти и партньори - Жерар СД",
    description: "Примерна страница с клиенти и партньори.",
    alternates: {
        canonical: "https://www.jerar.bg/clients",
    },
};

export default function ClientsPage() {
    return (
        <>
            <BreadCumb page={"Клиенти и партньори"} />
            <Clients />
        </>
    );
}

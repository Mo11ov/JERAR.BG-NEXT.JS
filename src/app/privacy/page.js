import Link from "next/link"
import BreadCumb from "@/components/Breadcumb"

export const metadata = {
    title: 'Политика за поверителност | Жерар СД',
    description: 'Политика за поверителност на Жерар СД ЕООД — как събираме, използваме и съхраняваме Вашите лични данни.',
}

const sections = [
    {
        number: '01',
        title: 'Администратор на лични данни',
        content: '„Жерар СД" ЕООД, седалище: ул.Кестен 14, ЕИК: 203600415, имейл: jerarsd.eood@gmail.com.',
    },
    {
        number: '02',
        title: 'Събиране на лични данни',
        content: 'Този уебсайт не събира, не обработва и не съхранява лични данни на своите посетители. Сайтът не използва бисквитки и не съдържа контактни форми.',
    },
    {
        number: '03',
        title: 'Сървърни логове',
        content: 'Единствените технически данни, които могат да бъдат регистрирани, са стандартните сървърни логове на нашия хостинг доставчик (напр. IP адрес). Тази обработка се извършва от доставчика в качеството му на самостоятелен администратор и е извън нашия контрол.',
    },
    {
        number: '04',
        title: 'Промени в политиката',
        content: 'При добавяне на функционалности, които изискват обработка на лични данни (напр. контактна форма или аналитични инструменти), тази политика ще бъде актуализирана преди въвеждането им.',
    },
]

export default function PrivacyPolicyPage() {
    return (
        <>
            <BreadCumb page={"Политика за поверителност"} />

            {/* Main content */}
            <div className="container py-6">
                <div className="row justify-content-center">
                    <div className="col-lg-9">

                        {/* Intro callout */}
                        <div
                            className="rounded p-4 mb-5"
                            style={{ background: 'var(--light)', borderLeft: '4px solid var(--primary)' }}
                        >
                            <p className="mb-0" style={{ color: 'var(--secondary)', lineHeight: '1.8' }}>
                                Настоящата Политика за поверителност урежда начина, по който „Жерар СД" ЕООД
                                събира, използва и съхранява лична информация на посетителите на своя уебсайт.
                                Ние ценим Вашата поверителност и се ангажираме да защитаваме Вашите лични
                                данни в съответствие с Общия регламент за защита на данните (GDPR).
                            </p>
                        </div>

                        {/* Policy sections */}
                        {sections.map((sec, i) => (
                            <div key={sec.number}>
                                {/* Heading row */}
                                <div className="d-flex align-items-center gap-3 mb-3">
                                    <span
                                        className="fw-bold rounded px-2 py-1 flex-shrink-0"
                                        style={{
                                            background: 'var(--primary)',
                                            color: '#fff',
                                            fontFamily: 'var(--font-nunito)',
                                            fontSize: '0.78rem',
                                            lineHeight: 1.4,
                                        }}
                                    >
                                        {sec.number}
                                    </span>
                                    <h5
                                        className="mb-0"
                                        style={{ fontFamily: 'var(--font-nunito)', color: 'var(--dark)' }}
                                    >
                                        {sec.title}
                                    </h5>
                                </div>

                                {/* Body, indented with a subtle left rule */}
                                <div className="ps-3 mb-2" style={{ borderLeft: '2px solid #e5ddd4' }}>

                                    {sec.subsections && (
                                        <div className="d-flex flex-column gap-3">
                                            {sec.subsections.map((sub) => (
                                                <div key={sub.label}>
                                                    <span
                                                        className="d-inline-block badge mb-1"
                                                        style={{
                                                            background: 'var(--light)',
                                                            color: 'var(--dark)',
                                                            border: '1px solid #ddd',
                                                            fontFamily: 'var(--font-nunito)',
                                                            fontWeight: 600,
                                                            fontSize: '0.72rem',
                                                        }}
                                                    >
                                                        {sub.label}
                                                    </span>
                                                    <p className="mb-0" style={{ color: 'var(--secondary)', lineHeight: '1.8' }}>
                                                        {sub.text}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {sec.rights && (
                                        <ul className="list-unstyled mb-3">
                                            {sec.rights.map((r) => (
                                                <li key={r} className="d-flex align-items-start gap-2 mb-2" style={{ color: 'var(--secondary)' }}>
                                                    <i
                                                        className="fa fa-check-circle mt-1 flex-shrink-0"
                                                        style={{ color: 'var(--primary)', fontSize: '0.85rem' }}
                                                    />
                                                    {r}
                                                </li>
                                            ))}
                                        </ul>
                                    )}

                                    {sec.content && (
                                        <p
                                            className="mb-0"
                                            style={{ color: 'var(--secondary)', lineHeight: '1.8' }}
                                        >
                                            {sec.content}
                                        </p>
                                    )}
                                </div>

                                {i < sections.length - 1 && (
                                    <hr className="my-4" style={{ borderColor: '#e5ddd4' }} />
                                )}
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </>
    )
}

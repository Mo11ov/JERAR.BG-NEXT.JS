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
        content: '„Жерар СД" ЕООД, със седалище и адрес на управление: [гр. Град, ул. Име №...], ЕИК: [номер по Булстат], имейл за контакт: [вашият имейл].',
    },
    {
        number: '02',
        title: 'Какви данни събираме и защо?',
        subsections: [
            {
                label: 'Данни от контактната форма',
                text: 'Когато се свързвате с нас за запитване или оферта, събираме Вашето име, имейл адрес и телефонен номер. Използваме тези данни единствено за да отговорим на Вашето запитване и да ви предоставим нужната информация за нашите продукти.',
            },
            {
                label: 'Технически данни (Бисквитки)',
                text: 'Нашият сайт използва „бисквитки" (cookies), за да осигури правилното му функциониране и да анализира посещаемостта (чрез инструменти като Google Analytics). Тези данни включват Вашия IP адрес, тип браузър и страниците, които посещавате, но не Ви идентифицират лично.',
            },
        ],
    },
    {
        number: '03',
        title: 'Основание за обработка',
        subsections: [
            {
                label: 'Легитимен интерес',
                text: 'За да можем да отговаряме на бизнес запитвания.',
            },
            {
                label: 'Съгласие',
                text: 'По отношение на използването на незадължителни бисквитки.',
            },
        ],
    },
    {
        number: '04',
        title: 'Споделяне на данни с трети лица',
        content: 'Ние не продаваме, не отдаваме под наем и не предоставяме Вашите лични данни на трети лица за маркетингови цели. Данните Ви могат да бъдат достъпни само за нашите доставчици на технически услуги (хостинг компания), доколкото това е необходимо за поддръжката на сайта.',
    },
    {
        number: '05',
        title: 'Срок на съхранение',
        content: 'Съхраняваме Вашите данни само толкова дълго, колкото е необходимо за целите, за които са събрани (напр. до приключване на комуникацията по Вашето запитване), освен ако законът не изисква по-дълъг период.',
    },
    {
        number: '06',
        title: 'Вашите права',
        rights: [
            'Достъп до Вашите лични данни',
            'Коригиране на неточни данни',
            'Изтриване на Вашите данни („правото да бъдете забравени")',
            'Ограничаване на обработването',
        ],
        content: 'За да упражните някое от тези права, моля свържете се с нас на: [вашият имейл].',
    },
    {
        number: '07',
        title: 'Сигурност',
        content: 'Предприемаме необходимите технически и организационни мерки (включително SSL сертификат за криптиране на връзката), за да защитим Вашите данни от неправомерен достъп или загуба.',
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

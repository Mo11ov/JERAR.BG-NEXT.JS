import { Heebo, Nunito } from 'next/font/google'
import Script from 'next/script'
import TopBar from '@/components/TopBar'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import BackToTopButton from '@/components/BackToTopButton'

// Google Fonts
const heebo = Heebo({
    subsets: ['latin'],
    weight: ['400', '500', '600'],
    variable: '--font-heebo'
})

const nunito = Nunito({
    subsets: ['latin'],
    weight: ['600', '700', '800'],
    variable: '--font-nunito'
})

export const metadata = {
    title: 'Жерар СД - Безупречния вкус',
    description: 'Производство на хлебни изделия за вашия бизнес',
    
    openGraph: {
        url: 'https://www.jerar.bg/',
        type: 'website',
        title: 'Денас Център',
        description: 'Производство на хлебни изделия за вашия бизнес',
        images: ['/img/carousel-1.jpg'],
        siteName: 'Жерар СД',
        locale: 'bg_BG',
    },
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${heebo.variable} ${nunito.variable}`}>
            <head>
                {/* Font Awesome */}
                <link
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
                    rel="stylesheet"
                />
                {/* Bootstrap Icons */}
                <link
                    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
                    rel="stylesheet"
                />

                {/* Template CSS files */}
                <link href="/lib/animate/animate.min.css" rel="stylesheet" />
                <link href="/lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />
                <link href="/css/bootstrap.min.css" rel="stylesheet" />
                <link href="/css/style.css" rel="stylesheet" />
            </head>
            <body>
                <TopBar />
                <NavBar />
                {children}
                <BackToTopButton />
                <Footer />

                {/* JavaScript Libraries */}
                <Script
                    src="https://code.jquery.com/jquery-3.4.1.min.js"
                    strategy="beforeInteractive"
                />
                <Script
                    src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"
                    strategy="beforeInteractive"
                />
                <Script src="/lib/wow/wow.min.js" strategy="lazyOnload" />
                <Script src="/lib/easing/easing.min.js" strategy="lazyOnload" />
                <Script src="/js/main.js" strategy="lazyOnload" />
            </body>
        </html>
    )
}
import { IntlProviderWrapper } from "@/components/intl-provider-wrapper";
import { cookies } from "next/headers";
import localFont from "next/font/local";
import { Montserrat } from "next/font/google";
import "./styles/globals.css";
import "./styles/footer.css";

import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import ModalProvider from "@/providers/modal-provider";
import ToastProvider from "@/providers/toast-provider";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});
const montserrat = Montserrat({
    subsets: ["latin"],
    variable: "--font-montserrat",
    weight: "variable",
    display: "swap",
});
export const metadata = {
    title: "PVC Kapı ve Pencere Sistemleri | Novatech PVC - Türkiye'nin Lider PVC Üreticisi",
    description: "Novatech PVC olarak Türkiye'de yüksek kaliteli PVC kapı ve pencere sistemleri üretiyoruz. Enerji verimli, modern tasarımlı ve uzun ömürlü PVC çözümleri.",
    keywords: ["PVC Kapı", "PVC Pencere", "Novatechpvc Pencere Kapı", "PVC Kapı ve Pencere", "PVC Kapı ve Pencere Sistemleri", "PVC Kapı ve Pencere Sistemleri Türkiye", "novatech pvc", "enerji verimli pencere", "modern PVC kapı"],
    authors: [{ name: "Novatech PVC" }],
    creator: "Novatech PVC",
    publisher: "Novatech PVC",
    metadataBase: new URL('https://novatechpvc.com.tr'),
    alternates: {
        canonical: '/',
        languages: {
            'tr-TR': '/tr',
            'en-US': '/en',
        },
    },
    openGraph: {
        title: "PVC Kapı ve Pencere Sistemleri | Novatech PVC",
        description: "Novatech PVC olarak Türkiye'de yüksek kaliteli PVC kapı ve pencere sistemleri üretiyoruz. Enerji verimli, modern tasarımlı ve uzun ömürlü PVC çözümleri.",
        url: 'https://novatechpvc.com.tr',
        siteName: 'Novatech PVC',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Novatech PVC Kapı ve Pencere Sistemleri',
            },
        ],
        locale: 'tr_TR',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: "PVC Kapı ve Pencere Sistemleri | Novatech PVC",
        description: "Novatech PVC olarak Türkiye'de yüksek kaliteli PVC kapı ve pencere sistemleri üretiyoruz. Enerji verimli, modern tasarımlı ve uzun ömürlü PVC çözümleri.",
        images: ['/twitter-image.jpg'],
        creator: '@novatechpvc',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    verification: {
        google: 'google-site-verification=ZJb3ymBSLt2D9gypIUQNMnTvSv8IZlevrF0NW7A-F5o',
    },
};

export default async function RootLayout({ children }) {
    const cookieStore = await cookies();
    const locale = cookieStore.get("NEXT_LOCALE")?.value || "tr";
    
    return (
        <html lang={locale}>
            <body className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} antialiased font-montserrat`}>
                <IntlProviderWrapper>
                    <ModalProvider />
                    <ToastProvider />
                    <Header />
                    {children}
                    <Footer />
                </IntlProviderWrapper>
            </body>
        </html>
    );
}

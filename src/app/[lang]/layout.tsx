import Header from "@/components/ui/Header";
import "../globals.css";
import Footer from "@/components/ui/Footer";
import { Toaster } from "@/components/ui/toast/toaster";
import { availableLanguages } from "@/interfaces/languages";
import { getDictionary } from "./dictionaries";

export const metadata = {
    title: "Van Veen Institute",
    description: "Dream On",
};

export async function generateStaticParams() {
    return [
        { lang: availableLanguages["en-US"] },
        { lang: availableLanguages["pt-BR"] },
    ];
}

export default async function RootLayout({
    children,
    params,
}: Readonly<{
    children: React.ReactNode;
    params: { lang: `${availableLanguages}` };
}>) {
    const dict = await getDictionary(params.lang);

    return (
        <html lang={params.lang} className="scroll-smooth scroll-py-16">
            <body>
                <Header content={dict.header} />
                <main>{children}</main>
                <Toaster />
                <Footer></Footer>
            </body>
        </html>
    );
}

import Header from "@/components/ui/Header";
import "./globals.css";
import Footer from "@/components/ui/Footer";
import { Toaster } from "@/components/ui/toast/toaster";

export const metadata = {
    title: "Van Veen Institute",
    description: "Dream On",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="scroll-smooth scroll-py-16">
            <body>
                <Header />
                <main>{children}</main>
                <Toaster />
                <Footer></Footer>
            </body>
        </html>
    );
}

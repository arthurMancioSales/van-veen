import Header from "@/components/ui/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/ui/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Van Veen Institute",
    description: "Dream On",
};

export default function RootLayout({
    children,
}: {
  children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Header />
                {children}
                <Footer></Footer>
            </body>
        </html>
    );
}

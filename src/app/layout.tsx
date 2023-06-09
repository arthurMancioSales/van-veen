import Header from "@/components/ui/Header";
import "./globals.css";
import Footer from "@/components/ui/Footer";


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
            <body>
                <Header />
                {children}
                <Footer></Footer>
            </body>
        </html>
    );
}

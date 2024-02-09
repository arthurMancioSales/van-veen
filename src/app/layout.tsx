import "./globals.css";
import { Toaster } from "@/components/ui/toast/toaster";

export const metadata = {
    title: "Van Veen Institute",
    description: "Dream On",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="scroll-smooth scroll-py-16">
            <body>
                <main>{children}</main>
                <Toaster />
            </body>
        </html>
    );
}

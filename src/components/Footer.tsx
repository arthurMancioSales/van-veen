import Link from "next/link";
import { Mail, MapPin, Phone, Facebook, Instagram, Linkedin } from "lucide-react";

export type footerProps = {
    company: string;
    summary: string;
    links: {
        title: string;
        home: string;
        aboutUs: string;
        emerge: string;
        services: string;
    };
    contact: {
        title: string;
        address: string;
        phone: string;
        email: string;
    };
    copyright: {
        first: string;
        second: string;
    };
};
export default function Footer({ dict }: { dict: footerProps }) {
    return (
        <footer className="bg-accent text-slate-200">
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold">{dict.company}</h3>
                        <p className="text-slate-400">{dict.summary}</p>
                        <div className="flex space-x-4">
                            <Link
                                href="https://www.facebook.com/InstitutoVanVeen"
                                className="hover:text-primary transition-colors"
                                target="_blank"
                            >
                                <Facebook className="h-5 w-5" />
                                <span className="sr-only">Facebook</span>
                            </Link>
                            <Link
                                href="https://www.instagram.com/instituto.vanveen/"
                                className="hover:text-primary transition-colors"
                                target="_blank"
                            >
                                <Instagram className="h-5 w-5" />
                                <span className="sr-only">Instagram</span>
                            </Link>
                            <Link
                                href="https://www.linkedin.com/company/11465410"
                                className="hover:text-primary transition-colors"
                                target="_blank"
                            >
                                <Linkedin className="h-5 w-5" />
                                <span className="sr-only">LinkedIn</span>
                            </Link>
                        </div>
                    </div>

                    {/* Links rápidos */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold">{dict.links.title}</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="#"
                                    className="hover:text-primary transition-colors"
                                >
                                    {dict.links.home}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="hover:text-primary transition-colors"
                                >
                                    {dict.links.aboutUs}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="hover:text-primary transition-colors"
                                >
                                    {dict.links.emerge}
                                </Link>
                            </li>
                            {/* <li>
                                <Link
                                    href="#"
                                    className="hover:text-primary transition-colors"
                                >
                                    {dict.links.services}
                                </Link>
                            </li> */}
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-xl font-bold"> {dict.contact.title}</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <MapPin className="mr-2 h-5 w-5 shrink-0 text-primary" />
                                <span>{dict.contact.address}</span>
                            </li>
                            <li className="flex items-center">
                                <Phone className="mr-2 h-5 w-5 shrink-0 text-primary" />
                                <span>{dict.contact.phone}</span>
                            </li>
                            <li className="flex items-center">
                                <Mail className="mr-2 h-5 w-5 shrink-0 text-primary" />
                                <span>{dict.contact.email}</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    {/* <div className="space-y-4">
                        <h3 className="text-xl font-bold">Newsletter</h3>
                        <p className="text-slate-400">
                            Inscreva-se para receber nossas últimas notícias e
                            atualizações.
                        </p>
                        <form className="space-y-2">
                            <Input
                                type="email"
                                placeholder="Seu e-mail"
                                className="bg-slate-800 border-slate-700 text-slate-200 placeholder:text-slate-500"
                            />
                            <Button type="submit" className="w-full">
                                Inscrever-se
                            </Button>
                        </form>
                    </div> */}
                </div>

                <div className="mt-12 pt-8 border-t border-slate-800">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-sm text-slate-400">
                            &copy; {new Date().getFullYear()} {dict.copyright.first}
                        </p>
                        {/* <div className="mt-4 md:mt-0">
                            <ul className="flex space-x-6 text-sm">
                                <li>
                                    <Link
                                        href="#"
                                        className="text-slate-400 hover:text-primary transition-colors"
                                    >
                                        Termos de Uso
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="text-slate-400 hover:text-primary transition-colors"
                                    >
                                        Política de Privacidade
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="text-slate-400 hover:text-primary transition-colors"
                                    >
                                        Cookies
                                    </Link>
                                </li>
                            </ul>
                        </div> */}
                        <div className="mt-4 md:mt-0">
                            <ul className="flex space-x-6 text-sm">
                                <li>
                                    <Link
                                        href={"https://github.com/arthurMancioSales"}
                                        target="_blank"
                                        className="text-slate-400 hover:text-primary transition-colors"
                                    >
                                        {dict.copyright.second}
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

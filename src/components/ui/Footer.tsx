import Link from "next/link";
import Container from "./Container";
import { Facebook, Instagram } from "lucide-react";
// import { BsWhatsapp } from "react-icons/bs";

export default function Footer() {
    return (
        <Container className="flex flex-col">
            <div className="flex flex-col items-center justify-center w-full">
                <hr className="bg-black w-full h-[2px] opacity-40 my-5" />
                <div className="flex justify-between w-full items-center gap-4">
                    <p className="text-sm font-light block">
                        &copy; Instituto Van Veen 2023
                    </p>
                    <div className="flex-1 justify-between flex lg:w-fit lg:gap-3 lg:flex-grow-0">
                        <Link
                            target="_blank"
                            href={"https://www.facebook.com/InstitutoVanVeen"}
                        >
                            <Facebook className="hover:text-primary transition-colors duration-150 w-6 h-6"></Facebook>
                        </Link>
                        <Link
                            target="_blank"
                            href={"https://www.instagram.com/instituto.vanveen/"}
                        >
                            <Instagram className="hover:text-primary transition-colors duration-150 w-6 h-6"></Instagram>
                        </Link>
                        {/* <Link href={""}>
                            <BsWhatsapp className="hover:text-primary transition-colors duration-150 w-6 h-6"></BsWhatsapp>
                        </Link> */}
                    </div>
                </div>
                <hr className="bg-black w-full h-[2px] opacity-40 my-5" />
                <small className="mb-2 text-sm font-light lg:self-start lg:ml-auto">
                    <Link
                        href={"https://github.com/arthurMancioSales"}
                        target="_blank"
                        className="underline"
                    >
                        Feito Por Arthur Mancio
                    </Link>
                </small>
            </div>
        </Container>
    );
}

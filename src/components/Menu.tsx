import Link from "next/link";
import Container from "./ui/Container";
import { motion } from "framer-motion";
import { Globe2, Home, Phone, X } from "lucide-react";
import Image from "next/image";

interface IMenu {
    onChangePage: () => void;
}

export default function Menu({ onChangePage }: IMenu) {
    function stopPropagation(
        e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    ) {
        e.stopPropagation();
    }

    const slideIn = {
        hidden: {
            x: "-100%",
            opacity: 0,
        },
        visible: {
            x: "0",
            opacity: 1,
            transition: {
                type: "Inertia",
                duration: 0.4,
            },
        },
        exit: {
            x: "-100%",
            opacity: 0,
            transition: {
                type: "Inertia",
                duration: 0.5,
            },
        },
    };

    return (
        <motion.div
            variants={slideIn}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <div
                className="w-[80vw] px-4 pt-5 h-screen bg-blue-900 fixed top-0 left-0 z-[100] transition transform origin-top-right"
                onClick={stopPropagation}
            >
                <Container className="flex flex-col justify-start items-start">
                    <div className="flex justify-between w-full">
                        <div className="relative h-10 w-10">
                            <Image
                                src="/images/vanVeenShield.svg"
                                alt=""
                                fill
                            />
                        </div>
                        <button onClick={onChangePage}>
                            <X className="h-10 text-white cursor-pointer"></X>
                        </button>
                    </div>
                    <nav className="flex flex-col pt-8">
                        <Link
                            href={"/"}
                            className="flex items-center gap-4 py-2 text-lg font-semibold text-white capitalize"
                            onClick={onChangePage}
                        >
                            <Home className="h-6"></Home>
                            home
                        </Link>
                        <Link
                            href={"/about-us"}
                            className="flex items-center gap-4 py-2 text-lg font-semibold text-white capitalize"
                            onClick={onChangePage}
                        >
                            <Globe2 className="h-6"></Globe2>
                            Sobre nós
                        </Link>
                        <Link
                            href={"/contact-us"}
                            className="flex items-center gap-4 py-2 text-lg font-semibold text-white capitalize"
                            onClick={onChangePage}
                        >
                            <Phone className="h-6"></Phone>
                            Entre em contato
                        </Link>
                    </nav>
                </Container>
            </div>
        </motion.div>
    );
}

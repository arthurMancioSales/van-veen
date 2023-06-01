import Link from "next/link";
import Container from "./ui/Container";
import { GlobeAmericasIcon, HomeIcon, IdentificationIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

interface IMenu {
    onChangePage: () => void,
}

export default function Menu({onChangePage}: IMenu) {

    function stopPropagation(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        e.stopPropagation();
    }

    const slideIn = {
        hidden: {
            x: "-100%",
            opacity: 0
        },
        visible: {
            x: "0",
            opacity: 1,
            transition: {
                type: "Inertia",
                duration: 0.4
            }
        },
        exit: {
            x: "-100%",
            opacity: 0,
            transition: {
                type: "Inertia",
                duration: 0.5
            }
        }
    };

    return (
        <motion.div variants={slideIn} initial="hidden" animate="visible" exit="exit">
            <div className="w-[80vw] h-screen bg-blue-900 fixed top-0 left-0 z-[100] transition transform origin-top-right" onClick={stopPropagation}>
                <Container direction="flex-col" justify="justify-start" items="items-start" others="pt-5">
                    <div className="flex justify-between w-full">
                        <img src="/vanVeenShield.svg" alt="" className="h-10"/>
                        <button onClick={onChangePage}>
                            <XMarkIcon className="h-10 text-white cursor-pointer"></XMarkIcon>
                        </button>
                    </div>
                    <nav className="flex flex-col pt-8">
                        <Link href={"/"} className="flex items-center gap-4 py-2 text-lg font-semibold text-white capitalize" onClick={onChangePage}>
                            <HomeIcon className="h-6"></HomeIcon>
                            home
                        </Link>
                        <Link href={"/about-us"} className="flex items-center gap-4 py-2 text-lg font-semibold text-white capitalize" onClick={onChangePage}>
                            <GlobeAmericasIcon className="h-6"></GlobeAmericasIcon>
                            Sobre nós
                        </Link>
                        <Link href={"/contact-us"} className="flex items-center gap-4 py-2 text-lg font-semibold text-white capitalize" onClick={onChangePage}>
                            <IdentificationIcon className="h-6"></IdentificationIcon>
                            Entre em contato
                        </Link>
                    </nav>
                </Container>
            </div>
        </motion.div>
    );
}

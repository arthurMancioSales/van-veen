"use client";

import { useState } from "react";
import Menu from "../Menu";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, MenuIcon, Phone } from "lucide-react";

export default function Header({ content }: { content: { [key: string]: string } }) {
    const [menu, setMenu] = useState(false);

    function toggleMenu() {
        setMenu(!menu);
    }

    const fadeIn = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.4,
            },
        },
        exit: {
            opacity: 0,
            transition: {
                duration: 0.4,
            },
        },
    };

    return (
        <>
            <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
                {menu ? (
                    <motion.div
                        className="fixed w-[100vw] h-screen z-[90] bg-[#00000060]"
                        onClick={() => setMenu(!menu)}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={fadeIn}
                    >
                        <Menu onChangePage={toggleMenu}></Menu>
                    </motion.div>
                ) : (
                    ""
                )}
            </AnimatePresence>

            <header className="sticky top-0 z-50 flex items-center justify-start gap-2 px-6 pt-2 pb-2 bg-secondary lg:px-20 lg:py-3">
                <button
                    onClick={toggleMenu}
                    className="flex flex-row gap-2 lg:hidden"
                >
                    <MenuIcon className="w-8 text-white"></MenuIcon>
                </button>
                <h1 className="text-xl font-semibold text-white lg:hidden">
                    Van Veen
                </h1>
                <nav className="hidden gap-4 lg:justify-between lg:items-center lg:flex w-fit">
                    <Link
                        href={"/"}
                        className="text-xl font-semibold text-white underline duration-300 ease-in-out decoration-transparent ansition-all te hover:decoration-black hover:text-black"
                        onClick={() => setMenu(false)}
                    >
                        {content.home}
                    </Link>
                    <Link
                        href={"/about-us"}
                        className="text-xl min-w-max font-semibold text-white underline duration-300 ease-in-out decoration-transparent ansition-all te hover:decoration-black hover:text-black"
                        onClick={() => setMenu(false)}
                    >
                        {content.aboutUs}
                    </Link>
                    <Link
                        href={"/van-veen&emerge"}
                        className="text-xl font-semibold text-white underline duration-300 ease-in-out decoration-transparent ansition-all te hover:decoration-black hover:text-black"
                        onClick={() => setMenu(false)}
                    >
                        Emerge
                    </Link>
                    {/* <div className="flex justify-end flex-1">
                        <Link
                            href={"/contact-us"}
                            className="px-2 py-1 text-xl font-semibold text-white duration-300 ease-in-out bg-primary rounded-md cursor-pointer te justify-self-end hover:bg-blue-900"
                            onClick={() => setMenu(false)}
                        >
                            Entre em contato
                        </Link>
                    </div> */}
                </nav>
            </header>
        </>
    );
}

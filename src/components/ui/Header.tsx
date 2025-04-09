"use client";

import { useState } from "react";
import Menu from "../Menu";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MenuIcon } from "lucide-react";
import Image from "next/image";
import logo from "public/images/vanVeenShield.svg";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "./dropdown-menu";
import { Button } from "./button/Button";

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

            <header className="sticky top-0 z-50 flex items-center justify-between gap-2 px-6 pt-2 pb-2 bg-secondary lg:px-20 lg:py-3">
                <button
                    onClick={toggleMenu}
                    className="flex flex-row gap-2 lg:hidden"
                >
                    <MenuIcon className="w-8 text-white"></MenuIcon>
                </button>
                <div className="hidden md:flex flex-row items-center gap-2">
                    <Image
                        src={logo}
                        alt="Logo"
                        className="w-12 h-12 lg:w-10 lg:h-10"
                    ></Image>
                    <h1 className="text-xl font-semibold text-white">Van Veen</h1>
                </div>
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
                        className="text-xl font-semibold text-white underline duration-300 ease-in-out decoration-transparent transition-all hover:decoration-black hover:text-black"
                        onClick={() => setMenu(false)}
                    >
                        Emerge
                    </Link>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant={"link"}
                                className="flex items-center gap-1 hover:decoration-black hover:text-black group p-2 pl-0"
                            >
                                <span className="text-xl font-semibold text-white underline duration-300 ease-in-out decoration-transparent transition-all hover:decoration-black hover:text-black group-hover:text-black group-hover:decoration-black">
                                    Públicos
                                </span>
                                <ChevronDown className="h-4 w-4 text-white group-hover:text-black duration-300 ease-in-out transition-all" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem asChild>
                                <Link href="/parents" className="cursor-pointer">
                                    Pais e Responsáveis
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link href="/teachers" className="cursor-pointer">
                                    Professores e Escolas
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link href="/companies" className="cursor-pointer">
                                    Empresas
                                </Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </nav>
            </header>
        </>
    );
}

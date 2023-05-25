import Link from "next/link"
import Container from "./Container"
import { GlobeAmericasIcon, HomeIcon, IdentificationIcon, XMarkIcon } from "@heroicons/react/24/solid"

export default function Menu() {

    function stopPropagation(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        e.stopPropagation()
    }

    return (
        <div className="w-[80vw] h-screen bg-blue-900 fixed top-0 left-0 z-[100] transition transform origin-top-right" onClick={stopPropagation}>
            <Container direction="flex-col" justify="justify-start" items="items-start" others="pt-5">
                <div className="flex justify-between w-full">
                    <img src="/vanVeenShield.svg" alt="" className="h-10"/>
                    <XMarkIcon className="h-10 text-white cursor-pointer"></XMarkIcon>
                </div>
                <nav className="flex-col flex pt-8">
                    <Link href={"/"} className="text-white font-semibold text-lg py-2 flex items-center gap-4 capitalize">
                        <HomeIcon className="h-6"></HomeIcon>
                        home
                    </Link>
                    <Link href={"/about-us"} className="text-white font-semibold text-lg py-2 flex items-center gap-4 capitalize">
                        <GlobeAmericasIcon className="h-6"></GlobeAmericasIcon>
                        Sobre nós
                    </Link>
                    <Link href={"/contact-us"} className="text-white font-semibold text-lg py-2 flex items-center gap-4 capitalize">
                        <IdentificationIcon className="h-6"></IdentificationIcon>
                        Entre em contato
                    </Link>
                </nav>
            </Container>
        </div>
    )
}
"use client";

import { useState } from "react";
import { Menu as MenuIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logo from "public/images/vanVeenShield.svg";
import { Sheet, SheetContent, SheetTrigger } from "./sheet";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "./accordion/Accordion";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "./navigation-menu";
import { Badge } from "./badge";
import LanguageSwitcher from "../LanguageSwitcher";

export default function Header({
    content,
    lang,
}: {
    content: {
        home: string;
        aboutUs: string;
        partnerships: {
            title: string;
            list: {
                russia: { rudn: string };
                scotland: { uws: string };
                usa: { emerge: string };
            };
        };
        courses: {
            title: string;
            list: {
                artenira: string;
                platform: string;
            };
            soon: string;
        };
        contact: string;
        language: string;
        portuguese: string;
        english: string;
        services: {
            title: string;
            list: {
                professors: string;
                parents: string;
                companies: string;
            };
        };
        button: string;
    };
    lang: string;
}) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <header className="sticky top-0 z-50 flex items-center justify-between gap-2 px-6 pt-2 pb-2 bg-secondary lg:px-20 lg:py-3">
                <Link className="w-full md:w-fit" href={"/"}>
                    <div className="flex flex-row items-center gap-2">
                        <Image
                            src={logo}
                            alt="Logo"
                            className="w-12 h-12 lg:w-10 lg:h-10"
                        ></Image>
                        <h1 className="text-2xl md:text-lg font-medium text-white">
                            Van Veen
                        </h1>
                    </div>
                </Link>

                <NavigationMenu className="hidden gap-4 lg:justify-between lg:items-center lg:flex w-fit">
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuLink
                                asChild
                                className={navigationMenuTriggerStyle()}
                            >
                                <Link
                                    href={"/"}
                                    className="text-lg font-medium text-white underline duration-300 ease-in-out decoration-transparent transition-all "
                                >
                                    {content.home}
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuLink
                                asChild
                                className={navigationMenuTriggerStyle()}
                            >
                                <Link
                                    href={"/about-us"}
                                    className="text-lg font-medium text-white underline duration-300 ease-in-out decoration-transparent transition-all "
                                >
                                    {content.aboutUs}
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuTrigger className="text-lg transition-all duration-150">
                                {content.services.title}
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="flex w-[400px] gap-3 p-4 md:w-[500px] flex-col lg:w-[200px] ">
                                    <NavigationMenuLink
                                        asChild
                                        className="cursor-pointer block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                    >
                                        <Link href="/services/parents">
                                            {content.services.list.parents}
                                        </Link>
                                    </NavigationMenuLink>
                                    <NavigationMenuLink
                                        asChild
                                        className="cursor-pointer block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                    >
                                        <Link href="/services/teachers">
                                            {content.services.list.professors}
                                        </Link>
                                    </NavigationMenuLink>
                                    <NavigationMenuLink
                                        asChild
                                        className="cursor-pointer block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                    >
                                        <Link href="/services/companies">
                                            {content.services.list.companies}
                                        </Link>
                                    </NavigationMenuLink>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuTrigger className="text-lg transition-all duration-150">
                                {content.partnerships.title}
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="flex flex-col w-[400px] gap-3 p-4 md:w-[500px] lg:w-[200px] ">
                                    <NavigationMenuLink
                                        asChild
                                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                    >
                                        <Link href="/partnerships/usa/emerge-education">
                                            {content.partnerships.list.usa.emerge}
                                        </Link>
                                    </NavigationMenuLink>

                                    <NavigationMenuLink
                                        asChild
                                        className="cursor-pointer block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                    >
                                        <Link href="/partnerships/scotland/uws">
                                            {content.partnerships.list.scotland.uws}
                                        </Link>
                                    </NavigationMenuLink>

                                    <NavigationMenuLink
                                        asChild
                                        className="cursor-pointer block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                    >
                                        <Link href="/partnerships/russia/rudn">
                                            {content.partnerships.list.russia.rudn}
                                        </Link>
                                    </NavigationMenuLink>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuTrigger className="text-lg transition-all duration-150">
                                {content.courses.title}
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="flex flex-col w-[400px] gap-3 p-4 md:w-[500px] lg:w-[200px] ">
                                    <Link
                                        className="cursor-not-allowed p-3 rounded-md opacity-50"
                                        href=""
                                    >
                                        {content.courses.list.platform}{" "}
                                        <Badge>{content.courses.soon}</Badge>
                                    </Link>
                                    <NavigationMenuLink
                                        asChild
                                        className="cursor-pointer block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                    >
                                        <Link href="/courses/artenira">
                                            {content.courses.list.artenira}
                                        </Link>
                                    </NavigationMenuLink>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuLink className="cursor-pointer block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                <LanguageSwitcher
                                    currentLang={lang}
                                    content={content.button}
                                ></LanguageSwitcher>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>

                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild className="lg:hidden">
                        <button className="p-2" aria-label="Menu de navegação">
                            <MenuIcon className="h-6 w-6" />
                        </button>
                    </SheetTrigger>
                    <SheetContent
                        side="right"
                        className="w-[252px] sm:w-[400px] bg-accent text-accent-foreground border-accent p-8"
                    >
                        <nav className="flex flex-col gap-4">
                            <Link
                                href={"/"}
                                className="text-md font-medium text-white underline duration-300 ease-in-out decoration-transparent transition-all "
                                onClick={() => setIsOpen(false)}
                            >
                                {content.home}
                            </Link>
                            <Link
                                href={"/about-us"}
                                className="text-md min-w-max font-medium text-white underline duration-300 ease-in-out decoration-transparent transition-all "
                                onClick={() => setIsOpen(false)}
                            >
                                {content.aboutUs}
                            </Link>

                            <Accordion
                                type="multiple"
                                className="flex flex-col gap-4"
                            >
                                <AccordionItem value="services">
                                    <AccordionTrigger className="pt-0 pb-2">
                                        <p className="font-medium">
                                            {content.services.title}
                                        </p>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <div className="pl-3 py-1 ml-3 border-l border-white/60">
                                            <ul className="flex flex-col gap-2">
                                                <li>
                                                    <Link
                                                        className="text-md font-medium text-white underline duration-300 ease-in-out decoration-transparent transition-all hover:decoration-black "
                                                        onClick={() =>
                                                            setIsOpen(false)
                                                        }
                                                        href="/services/parents"
                                                    >
                                                        {
                                                            content.services.list
                                                                .parents
                                                        }
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="text-md min-w-max font-medium text-white underline duration-300 ease-in-out decoration-transparent transition-all "
                                                        onClick={() =>
                                                            setIsOpen(false)
                                                        }
                                                        href="/services/teachers"
                                                    >
                                                        {
                                                            content.services.list
                                                                .professors
                                                        }
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="text-md min-w-max font-medium text-white underline duration-300 ease-in-out decoration-transparent transition-all "
                                                        onClick={() =>
                                                            setIsOpen(false)
                                                        }
                                                        href="/services/companies"
                                                    >
                                                        {
                                                            content.services.list
                                                                .companies
                                                        }
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="partnerships">
                                    <AccordionTrigger className="pt-0 pb-2">
                                        <p className="font-medium">
                                            {content.partnerships.title}
                                        </p>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <div className="pl-3 py-1 ml-3 border-l border-white/60">
                                            <ul className="flex flex-col gap-2">
                                                <li>
                                                    <Link
                                                        href="/partnerships/usa/emerge-education"
                                                        className="text-md font-medium text-white underline duration-300 ease-in-out decoration-transparent transition-all hover:decoration-black "
                                                        onClick={() =>
                                                            setIsOpen(false)
                                                        }
                                                    >
                                                        {
                                                            content.partnerships.list
                                                                .usa.emerge
                                                        }
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/partnerships/scotland/uws"
                                                        className="text-md min-w-max font-medium text-white underline duration-300 ease-in-out decoration-transparent transition-all "
                                                        onClick={() =>
                                                            setIsOpen(false)
                                                        }
                                                    >
                                                        {
                                                            content.partnerships.list
                                                                .scotland.uws
                                                        }
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href="/partnerships/russia/rudn"
                                                        className="text-md min-w-max font-medium text-white underline duration-300 ease-in-out decoration-transparent transition-all "
                                                        onClick={() =>
                                                            setIsOpen(false)
                                                        }
                                                    >
                                                        {
                                                            content.partnerships.list
                                                                .russia.rudn
                                                        }
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="courses">
                                    <AccordionTrigger className="pt-0 pb-2">
                                        <p className="font-medium">Parcerias</p>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <div className="pl-3 py-1 ml-3 border-l border-white/60">
                                            <ul className="flex flex-col gap-2">
                                                <li>
                                                    <Link
                                                        className="cursor-not-allowed p-3 rounded-md opacity-50"
                                                        href=""
                                                    >
                                                        {
                                                            content.courses.list
                                                                .platform
                                                        }{" "}
                                                        <Badge>
                                                            {content.courses.soon}
                                                        </Badge>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        className="text-md min-w-max font-medium text-white underline duration-300 ease-in-out decoration-transparent transition-all "
                                                        onClick={() =>
                                                            setIsOpen(false)
                                                        }
                                                        href="/courses/artenira"
                                                    >
                                                        {
                                                            content.courses.list
                                                                .artenira
                                                        }
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>

                            <div className="mt-auto">
                                <LanguageSwitcher
                                    currentLang={lang}
                                    content={content.button}
                                ></LanguageSwitcher>
                            </div>
                        </nav>
                    </SheetContent>
                </Sheet>
            </header>
        </>
    );
}

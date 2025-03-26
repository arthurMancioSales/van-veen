import Image from "next/image";
import woman from "public/images/home/woman.svg";
import student from "public/images/home/student.jpg";
import emerge from "public/images/home/emerge_horizontal.png";
import nicolasClass from "public/images/home/nicolas_class.jpg";
import arthurClass from "public/images/home/arthur_class.jpg";
import mayaraClass from "public/images/home/mayara_class.jpg";

import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/button/Button";
import Testimonial from "@/components/Testimonial";
import HomeAccordion from "@/components/HomeAccordion";
import InstagramPost from "@/components/InstagramPost";
import HomeCards from "@/components/sections/homeCards/HomeCards";
import {
    Calendar,
    CheckCircle,
    ChevronRight,
    FileCheck2,
    PenSquare,
    Sparkles,
} from "lucide-react";
import { availableLanguages } from "@/interfaces/languages";
import { getDictionary } from "@/app/[lang]/dictionaries";
import Link from "next/link";

export default async function Home({
    params,
}: {
    params: Promise<{ lang: `${availableLanguages}` }>;
}) {
    const lang = (await params).lang;
    const dict = await getDictionary(lang);

    return (
        <>
            <section className="bg-[url(/images/home/clouds_desktop.svg)] bg-contain bg-no-repeat bg-secondary">
                <div className="md:h-[calc(100vh-44px)]">
                    <div className="h-[85%] md:flex items-center w-full md:bg-[url(/images/home/university_desktop.svg)] gap-4 md:bg-[length:30rem] lg:bg-[length:45rem] 2xl:bg-[length:80rem] md:bg-[bottom_right] bg-[length:100%] bg-[url(/images/home/university.svg)] bg-[top] bg-no-repeat">
                        <div className="pt-[85%] md:pt-0">
                            <div className="bg-[url(/images/home/hero.svg)] md:hidden bg-[length:100%] bg-no-repeat bg-top w-full h-10 z-10"></div>
                            <div className="px-8 bg-background flex flex-col gap-4 md:bg-transparent md:items-start justify-center items-center">
                                <h2 className="md:text-5xl text-3xl font-bold uppercase text-accent text-center md:text-left">
                                    <span>{dict.home.hero.title}</span>
                                    <br />
                                    <span>{dict.home.hero.subtitle}</span>
                                </h2>
                                <p className="font-medium md:text-left text-accent text-md w-72 lg:w-80 text-center">
                                    {dict.home.hero.description}
                                </p>
                                <a href="#IAI">
                                    <Button className="rounded-full">
                                        {dict.home.hero.callToAction}
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="h-[15%] w-full bg-background relative">
                        <Image
                            src={woman}
                            alt="Wave figure"
                            className="hidden md:block absolute bottom-0 w-[12vw] lg:left-[50vw] left-[60vw]"
                        ></Image>
                    </div>
                </div>
            </section>

            <section className="justify-start h-fit gap-6 flex flex-col py-8">
                <Container className="flex flex-col justify-center items-start gap-4">
                    <h2 className="text-3xl font-bold text-left lg:text-4xl">
                        {dict.home.records.title}
                    </h2>
                    <p className="section-subtitle indent-6">
                        {dict.home.records.subtitle}
                    </p>
                </Container>
                <Container className="flex flex-col justify-between lg:flex-row">
                    <HomeCards content={dict.home.records.cards}></HomeCards>
                </Container>
            </section>

            <section className="w-full flex flex-row flex-wrap gap-16"></section>

            <section className="bg-primary/40 py-8 my-16 mt-8 md:bg-[url(/images/home/student.png)] bg-no-repeat bg-[-30px_bottom] bg-[length:60vw] xl:bg-[length:70vw] 2xl:bg-[length:25vw] xl:bg-[0px_bottom]">
                <Container className="flex flex-col gap-8 items-center md:max-w-md md:ml-auto md:mr-8 lg:mr-12 md:items-start lg:max-w-md xl:mr-40 xl:max-w-md 2xl:mr-[22rem] 2xl:max-w-md ">
                    <h2
                        className="text-3xl font-bold text-left lg:text-4xl md:text-left"
                        id="IAI"
                    >
                        {dict.home.emerge.title}
                    </h2>
                    <p className="section-subtitle indent-6 lg:text-base text-justify">
                        {dict.home.emerge.description1}
                    </p>
                    <div className="relative h-20 w-full">
                        <Image
                            fill
                            src={emerge}
                            alt="emerge logo"
                            className="object-contain"
                        ></Image>
                    </div>
                    <p className="section-subtitle indent-6 lg:text-base text-justify">
                        {dict.home.emerge.description2}
                    </p>
                    <Link href={"/van-veen&emerge"}>
                        <Button className="bg-accent rounded-full w-fit">
                            {dict.home.emerge.callToAction}
                        </Button>
                    </Link>
                </Container>
            </section>

            <section className="py-8 bg-gradient-to-b from-background from-10% to-secondary lg:bg-secondary lg:bg-none lg:h-fit lg:py-0">
                <div className="relative lg:flex-col">
                    <div className=" lg:flex lg:items-stretch lg:min-h-fit pb-16">
                        <div className="hidden w-3/5 self-stretch relative lg:block">
                            <Image
                                src={student}
                                alt="Figure"
                                fill
                                className="object-cover h-full w-full"
                            ></Image>
                        </div>
                        <div className="w-full flex flex-col gap-8 lg:px-12 lg:pt-8">
                            <Container className="flex flex-col justify-center items-start gap-4">
                                <h2
                                    className="text-3xl font-bold text-left lg:text-4xl"
                                    id="IAI"
                                >
                                    {dict.home.IAIcourse.title}
                                </h2>
                                <p className="section-subtitle indent-6 lg:text-base">
                                    {dict.home.IAIcourse.description}
                                </p>
                            </Container>
                            <Container className="flex flex-col justify-center items-start gap-8">
                                <div className="flex flex-col items-start justify-between lg:flex-row gap-2">
                                    <Calendar className="w-10 lg:w-16"></Calendar>
                                    <div className="flex flex-col lg:max-w-[92%]">
                                        <h4 className="font-semibold">
                                            {
                                                dict.home.IAIcourse.modules.method
                                                    .title
                                            }
                                        </h4>
                                        <p className="indent-6">
                                            {
                                                dict.home.IAIcourse.modules.method
                                                    .description
                                            }
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-start justify-between  lg:flex-row gap-2">
                                    <PenSquare className="w-10 lg:w-16"></PenSquare>
                                    <div className="flex flex-col lg:max-w-[92%]">
                                        <h4 className="font-semibold">
                                            {dict.home.IAIcourse.modules.exams.title}
                                        </h4>
                                        <p className="indent-6">
                                            {
                                                dict.home.IAIcourse.modules.exams
                                                    .description
                                            }
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-start justify-between lg:flex-row gap-2">
                                    <FileCheck2 className="w-10 lg:w-16"></FileCheck2>
                                    <div className="flex flex-col lg:max-w-[92%]">
                                        <h4 className="font-semibold">
                                            {
                                                dict.home.IAIcourse.modules
                                                    .documentation.title
                                            }
                                        </h4>
                                        <p className="indent-6">
                                            {
                                                dict.home.IAIcourse.modules
                                                    .documentation.description
                                            }
                                        </p>
                                    </div>
                                </div>
                            </Container>
                        </div>
                    </div>
                    <div className="hidden w-full h-28 lg:block lg:bg-[url(/images/home/testimonial_desktop.svg)] bg-no-repeat bg-cover absolute -bottom-10"></div>
                </div>
            </section>

            <section className="w-full overflow-hidden bg-secondary bg-cover lg:bg-transparent pt-20 pb-8">
                <Container>
                    <Testimonial lang={availableLanguages[lang]}></Testimonial>
                </Container>
            </section>

            <section className="w-full bg-secondary bg-gradient-to-b from-secondary py-8 to-background lg:bg-none lg:bg-transparent">
                <Container className="flex flex-col gap-8 items-center">
                    <h2 className="self-start text-3xl font-bold text-left lg:text-4xl">
                        {dict.home.instagram.title}
                    </h2>
                    <InstagramPost
                        callToAction={dict.home.instagram.callToAction}
                    ></InstagramPost>
                </Container>
            </section>

            <section className="w-full bg-secondary bg-gradient-to-b from-secondary py-8 to-background lg:bg-none lg:bg-transparent">
                <section className="w-full py-12 md:py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                        <div className="absolute -top-24 -left-24 w-48 h-48 rounded-full bg-background"></div>
                        <div className="absolute top-1/2 -right-24 w-64 h-64 rounded-full bg-background"></div>
                        <div className="absolute bottom-12 left-1/4 w-32 h-32 rounded-full bg-background"></div>
                        <Sparkles className="absolute top-12 right-1/4 text-primary/40 w-12 h-12" />
                        <Sparkles className="absolute bottom-24 left-12 text-primary/40 w-8 h-8" />
                    </div>

                    <div className="container px-4 md:px-6 relative">
                        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                            <div className="w-full lg:w-1/2 space-y-6">
                                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-sm font-semibold transition-colors bg-primary/10 text-primary">
                                    <Sparkles className="mr-1 h-3.5 w-3.5" />
                                    <span>{dict.home.demo.title}</span>
                                </div>

                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-3xl md:max-w-md">
                                    {dict.home.demo.subtitle} <br />{" "}
                                    <span className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                        Nicolas Van Veen
                                    </span>
                                </h2>

                                <p className="text-muted-foreground md:text-xl">
                                    {dict.home.demo.description1}{" "}
                                    <strong> {dict.home.demo.bold1}</strong>{" "}
                                    {dict.home.demo.description2}{" "}
                                    <strong>{dict.home.demo.bold2}</strong>{" "}
                                    {dict.home.demo.description3}
                                    <strong> {dict.home.demo.bold3}</strong>{" "}
                                    {dict.home.demo.description4}
                                </p>

                                <ul className="space-y-2">
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="h-5 w-5 text-primary" />
                                        <span>{dict.home.demo.topics.first}</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="h-5 w-5 text-primary" />
                                        <span>{dict.home.demo.topics.second}</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="h-5 w-5 text-primary" />
                                        <span>{dict.home.demo.topics.third}</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="h-5 w-5 text-primary" />
                                        <span>{dict.home.demo.topics.fourth}</span>
                                    </li>
                                </ul>

                                <div className="flex flex-col sm:flex-row gap-3">
                                    <Link
                                        href={
                                            "https://wa.me//5519994828888?text=Ol%C3%A1%21%20Gostaria%20de%20agendar%20uma%20aula%20demonstrativa"
                                        }
                                        target="_blank"
                                    >
                                        <Button size="lg" className="gap-1">
                                            {dict.home.demo.button}
                                            <ChevronRight className="h-4 w-4" />
                                        </Button>
                                    </Link>
                                </div>
                            </div>

                            <div className="w-full lg:w-1/2 relative">
                                <div className="relative mx-auto max-w-[500px]">
                                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl transform rotate-1"></div>
                                    <div className="relative bg-white p-2 rounded-2xl shadow-lg">
                                        <Image
                                            src={nicolasClass}
                                            width={600}
                                            height={600}
                                            alt="Nicolas Van Veen durante uma aula"
                                            className="rounded-xl object-cover aspect-square"
                                        />
                                        <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-4 flex items-center gap-3">
                                            <div className="bg-primary/10 p-2 rounded-full">
                                                <Sparkles className="h-5 w-5 text-primary" />
                                            </div>
                                            <div>
                                                <p className="font-medium">
                                                    {dict.home.demo.feature1}
                                                    100% Gratuito
                                                </p>
                                                <p className="text-sm text-muted-foreground">
                                                    {dict.home.demo.feature2}
                                                    Sem compromisso
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-16 pt-8 border-t">
                            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                                <div className="flex items-center gap-4">
                                    <div className="flex -space-x-4">
                                        {[
                                            nicolasClass,
                                            arthurClass,
                                            mayaraClass,
                                        ].map((image, index) => (
                                            <div
                                                key={index}
                                                className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-muted"
                                            >
                                                <Image
                                                    src={image}
                                                    width={40}
                                                    height={40}
                                                    alt={`Professor ${index}`}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                    <div>
                                        <p className="font-medium">
                                            {dict.home.demo.feature3}
                                            Nossos especialistas
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            {dict.home.demo.feature4}
                                            Profissionais qualificados e experientes
                                        </p>
                                    </div>
                                </div>

                                <Link
                                    href="#"
                                    className="text-primary font-medium flex items-center gap-1 hover:underline"
                                >
                                    {dict.home.demo.team}
                                    Conheça nossa equipe
                                    <ChevronRight className="h-4 w-4" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </section>

            <section className="py-8">
                <Container className="w-full flex flex-col justify-center items-center gap-8">
                    <h2 className="self-start text-3xl font-bold text-left lg:text-4xl">
                        {dict.home.faq.title}
                    </h2>
                    <div className="flex flex-col items-center justify-center w-full">
                        <HomeAccordion content={dict}></HomeAccordion>
                    </div>
                </Container>
            </section>
        </>
    );
}

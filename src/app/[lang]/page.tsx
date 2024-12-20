import Image from "next/image";
import woman from "public/images/home/woman.svg";
import student from "public/images/home/student.jpg";

import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/button/Button";
import Testimonial from "@/components/Testimonial";
import HomeAccordion from "@/components/HomeAccordion";
import InstagramPost from "@/components/InstagramPost";
import HomeCards from "@/components/sections/homeCards/HomeCards";
import { Calendar, FileCheck2, PenSquare } from "lucide-react";
import { availableLanguages } from "@/interfaces/languages";
import { getDictionary } from "@/app/[lang]/dictionaries";

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
                    <HomeCards></HomeCards>
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
                    <Testimonial></Testimonial>
                </Container>
            </section>

            <section className="w-full bg-secondary bg-gradient-to-b from-secondary py-8 to-background lg:bg-none lg:bg-transparent">
                <Container className="flex flex-col gap-8 items-center">
                    <h2 className="self-start text-3xl font-bold text-left lg:text-4xl">
                        {dict.home.instagram.title}
                    </h2>
                    <InstagramPost></InstagramPost>
                </Container>
            </section>

            <section className="pt-8">
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

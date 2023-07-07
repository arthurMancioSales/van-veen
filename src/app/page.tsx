import { AcademicCapIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import university_mobile from "/public/images/home/university.svg";
import hero from "/public/images/home/hero.svg";
import woman from "/public/images/home/woman.svg";
import placeholder from "/public/images/about-us/placeholder.png";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import StudentCard from "@/components/StudentCard";
import Testimonial from "@/components/Testimonial";
import HomeAccordion from "@/components/HomeAccordion";
import InstagramPost from "@/components/InstagramPost";


export default function Home() {
    return (
        <>
            <main
                className="flex flex-col items-center justify-start "
            >
                <section className="section lg:bg-[url(/images/home/clouds_desktop.svg)] bg-no-repeat bg-top lg:bg-blue-200 lg:h-[92vh] lg:p-0 lg:mb-[10vh]">
                    <div className="min-h-[50vh] flex flex-col items-center justify-between bg-blue-200 bg-[url(/images/home/clouds.svg)] bg-no-repeat bg-top w-full overflow-x-hidden relative lg:bg-[url(/images/home/university_desktop.svg)] lg:h-full lg:bg-transparent lg:bg-contain lg:bg-[center_right_10vw] lg:items-start">
                        <Image
                            src={university_mobile}
                            alt="University figure"
                            className="min-w-[170vw] absolute bottom-0 max-h-[130%] unselectable lg:hidden"
                        />
                        <Container direction="flex-col" items="items-start" width="w-[40vw]" justify="justify-end pb-10" others="hidden lg:flex">
                            <h2 className="text-5xl font-bold text-white uppercase">
                                Welcome To Van Veen
                            </h2>
                            <p className="py-8 font-medium text-left text-white text-md">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Asperiores, tempore! Magnam
                                vel nihil molestiae iusto doloremque, distinctio
                                voluptatibus!
                            </p>
                            <Button
                                color="bg-orange-400"
                                text="saiba mais"
                                textColor="text-white"
                            />
                        </Container>
                    </div>

                    <div className="relative z-20 flex flex-col items-start justify-start w-full lg:hidden">
                        <Container direction="flex-col" height="h-[30vh]">
                            <h2 className="text-blue-900 section-title">
                                Van Veen
                            </h2>
                            <p className="pb-4 text-sm text-center">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Asperiores, tempore! Magnam
                                vel nihil molestiae iusto doloremque, distinctio
                                voluptatibus!
                            </p>
                            <Button
                                color="bg-orange-400"
                                text="saiba mais"
                                textColor="text-white"
                            />
                            <Image
                                src={hero}
                                alt="Wave figure"
                                className="w-[100vw] absolute -top-[25%] -z-10 unselectable"
                            ></Image>
                        </Container>
                    </div>
                    <div className="hidden w-full bg-white lg:block h-[20vh] ">
                        <Image
                            src={woman}
                            alt="Wave figure"
                            className="absolute bottom-0 w-[10vw] left-[60vw]"
                        ></Image>
                    </div>
                </section>
                <section className="justify-start section h-fit">
                    <Container
                        direction="flex-col"
                        height="h-auto"
                        justify="justify-center"
                        items="items-start"
                    >
                        <h2 className="section-title">Números recorde</h2>
                        <p className="section-subtitle">
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Distinctio accusantium aliquid sint vitae
                            magnam officiis.
                        </p>
                    </Container>
                    <Container
                        direction="flex-col"
                        height="h-fit"
                        justify="justify-between"
                        others="lg:flex-row"
                    >
                        <Card title="+XXX" content="aprovações internacionais"/>
                        <Card title="+XXX" content="bolsas de estudo" />
                        <Card title="+XXX" content="Países" />
                        <StudentCard
                            name="Gabriele Mello"
                            approvals="29 aprovações"
                            img="/images/about-us/placeholder.png"
                        />
                    </Container>
                </section>
                <section className="section bg-gradient-to-b from-white from-10% to-blue-200 lg:bg-blue-200 lg:bg-none lg:h-fit lg:pb-0">
                    <div className="relative lg:flex-col">
                        <div className=" lg:flex lg:items-start">
                            <div 
                                className="hidden w-[70vw] lg:block h-[100vh]"
                            >
                                <Image
                                    src={placeholder}
                                    alt="Figure"
                                    className="w-full h-full"
                                >
                                </Image>
                            </div>
                            <div>
                                <Container
                                    direction="flex-col"
                                    height="h-auto"
                                    justify="justify-center"
                                    items="items-start"
                                    others="pb-2 lg:pt-16"
                                >
                                    <h2 className="section-title">
                                        Conheça a grade que se adequa a você
                                    </h2>
                                    <p className="section-subtitle">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing
                                        elit. Distinctio accusantium aliquid sint vitae
                                        magnam officiis.
                                    </p>
                                </Container>
                                <Container direction="flex-col" items="items-start">
                                    <div className="flex flex-col items-start justify-between pb-8 lg:flex-row lg:gap-3">
                                        <AcademicCapIcon className="w-10 lg:w-16"></AcademicCapIcon>
                                        <div className="flex flex-col">
                                            <h4 className="py-2 font-semibold lg:pt-0">
                                                Exames padronizados
                                            </h4>
                                            <p>
                                                Lorem ipsum dolor sit, amet consectetur
                                                adipisicing elit. Facilis quibusdam labore
                                                iusto? Asperiores, eveniet eaque.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-start justify-between pb-8 lg:flex-row lg:gap-3">
                                        <AcademicCapIcon className="w-10 lg:w-16"></AcademicCapIcon>
                                        <div className="flex flex-col">
                                            <h4 className="py-2 font-semibold lg:pt-0">
                                                Exames padronizados
                                            </h4>
                                            <p>
                                                Lorem ipsum dolor sit, amet consectetur
                                                adipisicing elit. Facilis quibusdam labore
                                                iusto? Asperiores, eveniet eaque.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-start justify-between pb-8 lg:flex-row lg:gap-3">
                                        <AcademicCapIcon className="w-10 lg:w-16"></AcademicCapIcon>
                                        <div className="flex flex-col">
                                            <h4 className="py-2 font-semibold lg:pt-0">
                                                Exames padronizados
                                            </h4>
                                            <p>
                                                Lorem ipsum dolor sit, amet consectetur
                                                adipisicing elit. Facilis quibusdam labore
                                                iusto? Asperiores, eveniet eaque.
                                            </p>
                                        </div>
                                    </div>
                                </Container>
                            </div>
                        </div>
                        <div className="hidden w-full h-28 lg:block lg:bg-[url(/images/home/testimonial_desktop.svg)] bg-no-repeat bg-cover absolute bottom-0">
                        </div>
                    </div>
                </section>
                <section className="w-full overflow-hidden bg-blue-200 bg-cover section lg:bg-transparent lg:mb-10">
                    <Testimonial></Testimonial>
                </section>
                <section className="w-full bg-blue-200 section bg-gradient-to-b from-blue-200 to-white lg:bg-none lg:bg-transparent">
                    <Container direction="flex-col" others="pb-4">
                        <h2 className="self-start section-title">
                            Ultimas atualizações
                        </h2>
                    </Container>
                    {/* @ts-expect-error Async Server Component */}
                    <InstagramPost></InstagramPost>
                </section>
                <section className="section">
                    <Container direction="flex-col" justify="justify-center" items="items-center" width="w-full">
                        <h2 className="self-start section-title">Perguntas frequentes</h2>
                        <div className="flex flex-col items-center justify-center w-full pt-4">
                            <HomeAccordion></HomeAccordion>
                        </div>
                    </Container>
                </section>
            </main>
        </>
    );
}

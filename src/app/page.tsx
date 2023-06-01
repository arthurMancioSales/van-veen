import { AcademicCapIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import university from "/public/university.svg";
import hero from "/public/hero.svg";
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
                <section className="section">
                    <div className="min-h-[50vh] flex flex-col items-center justify-between bg-blue-200 bg-[url(/clouds.svg)] bg-no-repeat bg-top w-screen overflow-x-hidden relative">
                        <Image
                            src={university}
                            alt="University figure"
                            className="min-w-[170vw] absolute bottom-0 max-h-[130%] unselectable"
                        />
                    </div>

                    <div className="relative z-20 flex flex-col items-start justify-start w-screen">
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
                    >
                        <Card title="+XXX" content="aprovações internacionais"/>
                        <Card title="+XXX" content="bolsas de estudo" />
                        <Card title="+XXX" content="Países" />
                        <StudentCard
                            title="XX"
                            content="Nome do aluno - Qntd Aprovações"
                            img="/university.svg"
                        />
                    </Container>
                </section>
                <section className="section bg-gradient-to-b from-white from-10% to-blue-200">
                    <Container
                        direction="flex-col"
                        height="h-auto"
                        justify="justify-center"
                        items="items-start"
                        others="pb-2"
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
                        <div className="flex flex-col items-start justify-between pb-8">
                            <AcademicCapIcon className="w-10"></AcademicCapIcon>
                            <h4 className="py-2 font-semibold">
                                Exames padronizados
                            </h4>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Facilis quibusdam labore
                                iusto? Asperiores, eveniet eaque.
                            </p>
                        </div>
                        <div className="flex flex-col items-start justify-between pb-8">
                            <AcademicCapIcon className="w-10"></AcademicCapIcon>
                            <h4 className="py-2 font-semibold">
                                Exames padronizados
                            </h4>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Facilis quibusdam labore
                                iusto? Asperiores, eveniet eaque.
                            </p>
                        </div>
                        <div className="flex flex-col items-start justify-between pb-8">
                            <AcademicCapIcon className="w-10"></AcademicCapIcon>
                            <h4 className="py-2 font-semibold">
                                Exames padronizados
                            </h4>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Facilis quibusdam labore
                                iusto? Asperiores, eveniet eaque.
                            </p>
                        </div>
                    </Container>
                </section>
                <section className="section bg-[url('/testimonialBg.svg')] w-screen bg-cover bg-blue-200 overflow-hidden">
                    <Testimonial></Testimonial>
                </section>
                <section className="w-screen bg-blue-200 section bg-gradient-to-b from-blue-200 to-white">
                    <Container direction="flex-col" others="pb-4">
                        <h2 className="self-start section-title">
                            Ultimas atualizações
                        </h2>
                    </Container>
                    {/* @ts-expect-error Async Server Component */}
                    <InstagramPost></InstagramPost>
                </section>
                <section className="section">
                    <Container direction="flex-col" justify="justify-center" items="items-center" width="w-screen">
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

"use client";

import Image from "next/image";
import universityMobile from "public/images/home/university.svg";
import hero from "public/images/home/hero.svg";
import woman from "public/images/home/woman.svg";
import student from "public/images/home/student.jpg";

import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/button/Button";
import HomeCards from "@/components/sections/homeCards/HomeCards";
import { Calendar, FileCheck2, PenSquare } from "lucide-react";
import { useMediaQuery } from "react-responsive";
import Testimonial from "./components/testimonial/Testimonial";
import InstagramPost from "./components/instagramPost/InstagramPost";
import HomeAccordion from "./components/homeAccordion/HomeAccordion";
import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";

export default function Home() {
    const isDesktopOrLaptop = useMediaQuery({ query: "(max-width: 1224px)" });

    return (
        <>
            <Header></Header>
            <section className="section flex flex-col items-center justify-center lg:bg-[url(/images/home/clouds_desktop.svg)] bg-no-repeat bg-top lg:bg-secondary lg:h-[92vh] lg:p-0 lg:mb-[10vh]">
                <div className="min-h-[50vh] flex flex-col items-center justify-center bg-secondary bg-[url(/images/home/clouds.svg)] bg-no-repeat bg-top w-full overflow-x-hidden relative lg:bg-[url(/images/home/university_desktop.svg)] lg:h-full lg:bg-transparent lg:bg-contain lg:bg-[center_right] lg:items-start lg:max-w-6xl">
                    {isDesktopOrLaptop && (
                        <Image
                            src={universityMobile}
                            alt="University figure"
                            className="min-w-[170vw] absolute bottom-0 max-h-[130%]"
                        />
                    )}
                    <div className="flex-col items-start justify-center hidden w-[40vw] lg:flex lg:gap-8">
                        <h2 className="text-5xl font-bold uppercase text-accent">
                            Welcome To Van Veen
                        </h2>
                        <p className="font-medium text-left text-accent text-md lg:w-80">
                            Prepare-se para o sucesso global. No Instituto Van Veen,
                            você encontra todo apoio necessário para entrar nas
                            melhores universidades do mundo!
                        </p>
                        <a href="#IAI">
                            <Button className="rounded-full">saiba mais</Button>
                        </a>
                    </div>

                    {isDesktopOrLaptop && (
                        <Container className="flex flex-col min-h-[30vh] justify-center items-center gap-3">
                            <h2 className="text-blue-900 section-title">Van Veen</h2>
                            <p className="text-sm text-center">
                                Prepare-se para o sucesso global. No Instituto Van
                                Veen, você encontra todo apoio necessário para entrar
                                nas melhores universidades do mundo!
                            </p>
                            <a href="#IAI">
                                <Button className="rounded-full">saiba mais</Button>
                            </a>
                            <Image
                                src={hero}
                                alt="Wave figure"
                                className="w-[100vw] absolute -top-[25%] right-0 -z-10 unselectable"
                            ></Image>
                        </Container>
                    )}
                </div>
                <div className="hidden w-full bg-background lg:block h-[20vh] ">
                    <Image
                        src={woman}
                        alt="Wave figure"
                        className="absolute bottom-0 w-[10vw] left-[60vw]"
                    ></Image>
                </div>
            </section>

            <section className="justify-start section h-fit gap-6 flex flex-col">
                <Container className="flex flex-col justify-center items-start gap-4">
                    <h2 className="section-title">Números recorde</h2>
                    <p className="section-subtitle indent-6">
                        Nossos resultados falam por si. Com um impressionante recorde
                        de aprovações internacionais, temos orgulho em ajudar
                        estudantes a conquistarem vagas nas melhores universidades ao
                        redor do mundo.
                    </p>
                </Container>
                <Container className="flex flex-col justify-between lg:flex-row">
                    <HomeCards></HomeCards>
                </Container>
            </section>

            <section className="section bg-gradient-to-b from-background from-10% to-secondary lg:bg-secondary lg:bg-none lg:h-fit lg:pb-0">
                <div className="relative lg:flex-col">
                    <div className=" lg:flex lg:items-start lg:min-h-fit">
                        <div className="hidden w-3/5 h-[120vh] lg:block">
                            <Image
                                src={student}
                                alt="Figure"
                                className="w-full h-full"
                            ></Image>
                        </div>
                        <div className="w-full flex flex-col gap-8 lg:px-12 lg:pt-8">
                            <Container className="flex flex-col justify-center items-start gap-4">
                                <h2 className="section-title" id="IAI">
                                    Conheça o Curso de Introdução a Aplicação
                                    Internacional
                                </h2>
                                <p className="section-subtitle indent-6 lg:text-base">
                                    Esse o ponto de partida perfeito para quem deseja
                                    iniciar sua jornada de candidatura ao ensino
                                    superior no exterior. Cobrimos todo o conteúdo
                                    necessário para uma aplicação bem-sucedida, desde
                                    a escolha do curso e da universidade até a
                                    redação de uma carta de motivação convincente.
                                    Não se preocupe se você não tem experiência
                                    prévia na área, o curso é projetado para alunos
                                    de todos os níveis de conhecimento. Prepare-se
                                    para dar os primeiros passos em direção ao seu
                                    futuro acadêmico internacional!
                                </p>
                            </Container>
                            <Container className="flex flex-col justify-center items-start gap-8">
                                <div className="flex flex-col items-start justify-between lg:flex-row gap-2">
                                    <Calendar className="w-10 lg:w-16"></Calendar>
                                    <div className="flex flex-col lg:max-w-[92%]">
                                        <h4 className="font-semibold">
                                            Organização e método
                                        </h4>
                                        <p className="indent-6">
                                            Aprenda a se organizar de forma
                                            eficiente, desde a seleção das
                                            universidades e prazos importantes até a
                                            criação de um cronograma de estudos
                                            estruturado, para garantir que você
                                            esteja preparado(a) para cada etapa do
                                            processo de candidatura.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-start justify-between  lg:flex-row gap-2">
                                    <PenSquare className="w-10 lg:w-16"></PenSquare>
                                    <div className="flex flex-col lg:max-w-[92%]">
                                        <h4 className="font-semibold">
                                            Exames padronizados
                                        </h4>
                                        <p className="indent-6">
                                            Domine as habilidades necessárias para
                                            enfrentar os exames padronizados, com
                                            foco especial em áreas como o DET e
                                            TOEFL, para alcançar pontuações
                                            competitivas que se destacarão nas suas
                                            aplicações.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-start justify-between lg:flex-row gap-2">
                                    <FileCheck2 className="w-10 lg:w-16"></FileCheck2>
                                    <div className="flex flex-col lg:max-w-[92%]">
                                        <h4 className="font-semibold">
                                            Documentação
                                        </h4>
                                        <p className="indent-6">
                                            Descubra o conjunto de documentos
                                            essenciais exigidos pelas universidades
                                            internacionais, desde históricos
                                            acadêmicos e cartas de recomendação até a
                                            tradução e autenticação de documentos,
                                            para garantir que sua documentação esteja
                                            completa e apresentável.
                                        </p>
                                    </div>
                                </div>
                            </Container>
                        </div>
                    </div>
                    <div className="hidden w-full h-28 lg:block lg:bg-[url(/images/home/testimonial_desktop.svg)] bg-no-repeat bg-cover absolute bottom-0"></div>
                </div>
            </section>

            <section className="w-full overflow-hidden bg-secondary bg-cover section lg:bg-transparent py-20">
                <Container>
                    <Testimonial></Testimonial>
                </Container>
            </section>

            <section className="w-full bg-secondary section bg-gradient-to-b from-secondary to-background lg:bg-none lg:bg-transparent">
                <Container className="flex flex-col gap-8 items-center">
                    <h2 className="self-start section-title">
                        Ultimas atualizações
                    </h2>
                    <InstagramPost></InstagramPost>
                </Container>
            </section>

            <section className="section">
                <Container className="w-full flex flex-col justify-center items-center gap-8">
                    <h2 className="self-start section-title">
                        Perguntas frequentes
                    </h2>
                    <div className="flex flex-col items-center justify-center w-full">
                        <HomeAccordion></HomeAccordion>
                    </div>
                </Container>
            </section>
            <Footer></Footer>
        </>
    );
}

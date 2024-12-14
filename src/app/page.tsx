"use client";

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
import { useMediaQuery } from "react-responsive";

export default function Home() {
    const isMobile = useMediaQuery({ maxWidth: 425 });

    return (
        <>
            {console.log(isMobile)}
            <section className="bg-[url(/images/home/clouds_desktop.svg)] bg-contain bg-no-repeat bg-secondary">
                <div className="md:h-[calc(100vh-44px)]">
                    <div className="h-[85%] md:flex items-center w-full md:bg-[url(/images/home/university_desktop.svg)] gap-4 md:bg-[length:30rem] lg:bg-[length:45rem] 2xl:bg-[length:80rem] md:bg-[bottom_right] bg-[length:100%] bg-[url(/images/home/university.svg)] bg-[top] bg-no-repeat">
                        <div className="pt-[85%] md:pt-0">
                            <div className="bg-[url(/images/home/hero.svg)] md:hidden bg-[length:100%] bg-no-repeat bg-top w-full h-10 z-10"></div>
                            <div className="px-8 bg-background flex flex-col gap-4 md:bg-transparent md:items-start justify-center items-center">
                                <h2 className="md:text-5xl text-3xl font-bold uppercase text-accent text-center md:text-left">
                                    <span>Welcome To</span>
                                    <br />
                                    <span>Van Veen</span>
                                </h2>
                                <p className="font-medium md:text-left text-accent text-md w-72 lg:w-80 text-center">
                                    Prepare-se para o sucesso global. No Instituto
                                    Van Veen, você encontra todo apoio necessário
                                    para entrar nas melhores universidades do mundo!
                                </p>
                                <a href="#IAI">
                                    <Button className="rounded-full">
                                        saiba mais
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
                        Números recorde
                    </h2>
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
                        Ultimas atualizações
                    </h2>
                    <InstagramPost></InstagramPost>
                </Container>
            </section>

            <section className="pt-8">
                <Container className="w-full flex flex-col justify-center items-center gap-8">
                    <h2 className="self-start text-3xl font-bold text-left lg:text-4xl">
                        Perguntas frequentes
                    </h2>
                    <div className="flex flex-col items-center justify-center w-full">
                        <HomeAccordion></HomeAccordion>
                    </div>
                </Container>
            </section>
        </>
    );
}

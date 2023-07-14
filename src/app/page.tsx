import { CalendarIcon, DocumentCheckIcon, PencilSquareIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import university_mobile from "/public/images/home/university.svg";
import hero from "/public/images/home/hero.svg";
import woman from "/public/images/home/woman.svg";
import student from "/public/images/home/student.jpg";

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
                            <p className="py-8 font-medium text-left text-white text-md lg:w-80">
                            Prepare-se para o sucesso global. No Instituto Van Veen, você encontra todo apoio necessário para entrar nas melhores universidades do mundo!
                            </p>
                            <a href ="#IAI" >
                                <Button
                                    color="bg-orange-400"
                                    text="saiba mais"
                                    textColor="text-white"
                                />
                            </a>
                        </Container>
                    </div>

                    <div className="relative z-20 flex flex-col items-start justify-start w-full lg:hidden">
                        <Container direction="flex-col" height="h-[30vh]">
                            <h2 className="text-blue-900 section-title">
                                Van Veen
                            </h2>
                            <p className="pb-4 text-sm text-center">
                            Prepare-se para o sucesso global. No Instituto Van Veen, você encontra todo apoio necessário para entrar nas melhores universidades do mundo!
                            </p>
                            <a href ="#IAI" >
                                <Button
                                    color="bg-orange-400"
                                    text="saiba mais"
                                    textColor="text-white"
                                />
                            </a>
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
                        Nossos resultados falam por si. Com um impressionante recorde de aprovações internacionais, temos orgulho em ajudar estudantes a conquistarem vagas nas melhores universidades ao redor do mundo.
                        </p>
                    </Container>
                    <Container
                        direction="flex-col"
                        height="h-fit"
                        justify="justify-between"
                        others="lg:flex-row lg:pt-4"
                    >
                        <Card title="+300" content="aprovações internacionais"/>
                        <Card title="+30.000" content="bolsas de estudo" />
                        <Card title="8" content="Países" />
                        <StudentCard
                            name="Gabriele Mello"
                            approvals="29 aprovações"
                            img="/images/home/gabi.jpg"
                        />
                    </Container>
                </section>
                <section className="section bg-gradient-to-b from-white from-10% to-blue-200 lg:bg-blue-200 lg:bg-none lg:h-fit lg:pb-0">
                    <div className="relative lg:flex-col">
                        <div className=" lg:flex lg:items-start lg:min-h-fit lg:pb-16">
                            <div 
                                className="hidden w-3/5 h-[120vh] lg:block"
                            >
                                <Image
                                    src={student}
                                    alt="Figure"
                                    className="w-full h-full"
                                >
                                </Image>
                            </div>
                            <div className="w-full">
                                <Container
                                    direction="flex-col"
                                    height="h-auto"
                                    justify="justify-center"
                                    items="items-start"
                                    others="pb-2 lg:pt-16"
                                >
                                    <h2 className="section-title" id="IAI">
                                        Conheça o Curso de Introdução a Aplicação Internacional
                                    </h2>
                                    <p className="section-subtitle lg:text-base">
                                        Esse o ponto de partida perfeito para quem deseja iniciar sua jornada de candidatura ao ensino superior no exterior. Cobrimos todo o conteúdo necessário para uma aplicação bem-sucedida, desde a escolha do curso e da universidade até a redação de uma carta de motivação convincente. Não se preocupe se você não tem experiência prévia na área, o curso é projetado para alunos de todos os níveis de conhecimento. Prepare-se para dar os primeiros passos em direção ao seu futuro acadêmico internacional!
                                    </p>
                                </Container>
                                <Container direction="flex-col" items="items-start" others="lg:pt-2">
                                    <div className="flex flex-col items-start justify-between pb-8 lg:flex-row lg:gap-3">
                                        <CalendarIcon className="w-10 lg:w-16"></CalendarIcon>
                                        <div className="flex flex-col lg:max-w-[92%]">
                                            <h4 className="py-2 font-semibold lg:pt-0">
                                                Organização e método
                                            </h4>
                                            <p>
                                                Aprenda a se organizar de forma eficiente, desde a seleção das universidades e prazos importantes até a criação de um cronograma de estudos estruturado, para garantir que você esteja preparado(a) para cada etapa do processo de candidatura.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-start justify-between pb-8 lg:flex-row lg:gap-3">
                                        <PencilSquareIcon className="w-10 lg:w-16"></PencilSquareIcon>
                                        <div className="flex flex-col lg:max-w-[92%]">
                                            <h4 className="py-2 font-semibold lg:pt-0">
                                                Exames padronizados
                                            </h4>
                                            <p>
                                                Domine as habilidades necessárias para enfrentar os exames padronizados, com foco especial em áreas como o DET e TOEFL, para alcançar pontuações competitivas que se destacarão nas suas aplicações.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-start justify-between pb-8 lg:flex-row lg:gap-3">
                                        <DocumentCheckIcon className="w-10 lg:w-16"></DocumentCheckIcon>
                                        <div className="flex flex-col lg:max-w-[92%]">
                                            <h4 className="py-2 font-semibold lg:pt-0">
                                                Documentação
                                            </h4>
                                            <p>
                                                Descubra o conjunto de documentos essenciais exigidos pelas universidades internacionais, desde históricos acadêmicos e cartas de recomendação até a tradução e autenticação de documentos, para garantir que sua documentação esteja completa e apresentável.
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

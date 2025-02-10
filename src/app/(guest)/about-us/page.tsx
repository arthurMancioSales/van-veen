import Container from "@/components/ui/Container";
import Image from "next/image";
import etec from "public/images/about-us/partners/etec.png";
import kopert from "public/images/about-us/partners/kopert.png";
import nuffic from "public/images/about-us/partners/nuffic.jpeg";
import rosso from "public/images/about-us/partners/rossotrudnichestvo.png";
import uepb from "public/images/about-us/partners/UEPB.png";
import unesp from "public/images/about-us/partners/unesp.svg";
import dutcham from "public/images/about-us/partners/dutcham.png";
import ets from "public/images/about-us/partners/ets.png";
import yoga from "public/images/about-us/partners/yoga.jpg";
import standWithUs from "public/images/about-us/partners/stand-with-us-logo.jpg";
import royalHistory from "public/images/about-us/partners/royal-history-logo.png";
import farmaciaPetiti from "public/images/about-us/partners/farmacia comunitaria do petiti.png";
import emerge from "public/images/about-us/partners/emerge.png";
import decolar from "public/images/about-us/partners/decolar.png";
import charlesUniversity from "public/images/about-us/partners/charles-university-logo.png";

import nicolas from "public/images/about-us/Nicolas-Van-Veen.jpg";
import guilhermeVV from "public/images/about-us/Guilherme-Van-Veen.jpg";
import alisson from "public/images/about-us/alisson.jpg";
import arthur from "public/images/about-us/arthur.jpg";
import marcela from "public/images/about-us/marcela.jpeg";
import katie from "public/images/about-us/katie.jpeg";
import russia from "public/images/about-us/russia.jpeg";
import Alumni from "@/components/Alumni";

export default function AboutUs() {
    const today = new Date();
    const vanVeenFoundation = new Date("01-01-2013");
    const vanVeenAge = today.getFullYear() - vanVeenFoundation.getFullYear();

    return (
        <main className={"flex flex-col items-center justify-start"}>
            <section className="section lg:flex-row relative overflow-clip">
                <Container className="flex justify-end">
                    <div className="max-w-2xl absolute left-0 top-0 flex-col flex-wrap items-center content-between justify-around hidden w-3/4 h-screen pr-12 mt-12 overflow-clip lg:flex place-self-start">
                        <div className="relative w-60 h-[300px] overflow-hidden">
                            <Image
                                src={katie}
                                alt="Van Veen alumni"
                                className="absolute top-0 left-0 object-cover w-full h-full rounded-lg"
                            ></Image>
                        </div>
                        <div className="relative w-60 h-[300px] overflow-hidden">
                            <Image
                                src={russia}
                                alt="Van Veen alumni"
                                className="absolute top-0 left-0 object-cover w-full h-full rounded-lg"
                            ></Image>
                        </div>
                        <div className="relative overflow-hidden h-[29rem] w-[20rem]">
                            <Image
                                src={marcela}
                                alt="Van Veen alumni"
                                className="absolute top-0 left-0 object-cover w-full h-full rounded-lg"
                            ></Image>
                        </div>
                    </div>
                    <div className="lg:w-full gap-3 flex items-end flex-col">
                        <Container className="flex flex-col lg:items-center gap-8 lg:w-1/2 mx-0">
                            <h2 className="mt-16 text-4xl font-bold text-left text-blue-900">
                                Há {vanVeenAge} anos transformando a vida de
                                brasileiros
                            </h2>
                            <p className="w-full max-w-lg text-left lg:max-w-xl indent-6">
                                Fundado em fevereiro de 2002, o Instituto Van Veen
                                surgiu com o propósito de fortalecer as relações
                                culturais e educacionais entre diferentes segmentos
                                sociais no Brasil e no exterior. Ao longo dos anos,
                                nosso compromisso com a excelência nos levou a
                                evoluir para uma agência de relações internacionais.
                                Em 2015, nos tornamos parceiros-chave da NESO NUFFIC
                                Brasil, órgão do governo holandês, e da
                                ROSSOTRUDCHESTVO, órgão do governo russo,
                                consolidando nossa atuação global
                            </p>
                        </Container>
                        <div className="relative w-full my-12 h-[530px] lg:hidden grid grid-cols-2 grid-rows-2">
                            <div className="relative w-60 h-60 right-28">
                                <Image
                                    src={russia}
                                    alt="Van Veen alumni"
                                    className="rounded-lg object-cover"
                                    fill
                                ></Image>
                            </div>
                            <div className="relative w-60 h-60">
                                <Image
                                    src={katie}
                                    alt="Van Veen alumni"
                                    className="rounded-lg object-cover"
                                    fill
                                ></Image>
                            </div>
                            <div className="relative h-[250px] w-[480px] right-20">
                                <Image
                                    src={marcela}
                                    alt="Van Veen alumni"
                                    className="rounded-lg object-cover"
                                    fill
                                ></Image>
                            </div>
                        </div>
                        <Container className="flex flex-col lg:items-end gap-4 lg:w-1/2 mx-0">
                            <p className="w-full max-w-lg font-normal text-left lg:max-w-xl">
                                Ao longo de nossa história, alcançamos resultados
                                notáveis. Contamos com mais de 300 aprovações
                                internacionais, permitindo que estudantes realizem o
                                ensino superior no exterior e ampliem seus horizontes
                                acadêmicos. Além disso, orgulhamo-nos de ter
                                concedido mais de 30.000 bolsas de estudos, tornando
                                a educação internacional mais acessível e
                                possibilitando que talentos promissores alcancem seu
                                potencial máximo.
                            </p>

                            <p className="w-full max-w-lg font-normal text-left lg:max-w-xl">
                                Em 2023, estabelecemos uma parceria estratégica com a
                                renomada organização Educational Testing Service
                                (ETS). Como resultado dessa colaboração, o Instituto
                                Van Veen se tornou um centro examinador oficial da
                                ETS. Essa importante conquista fortaleceu ainda mais
                                nossa capacidade de oferecer preparação de alto nível
                                para exames padronizados, por meio de recursos
                                atualizados e suporte especializado. Essa parceria
                                exemplifica nosso compromisso contínuo em
                                proporcionar aos nossos alunos as melhores
                                oportunidades para alcançar sucesso em suas jornadas
                                acadêmicas internacionais.
                            </p>
                        </Container>
                    </div>
                </Container>
            </section>

            <section className="section">
                <Container className="flex flex-col items-start ">
                    <div className="w-full gap-4 flex flex-col">
                        <h2 className="section-title">Nossa equipe</h2>
                        <p className="section-subtitle">
                            Conheça a equipe dedicada por trás do Instituto Van Veen,
                            composta por profissionais apaixonados e experientes.
                        </p>
                    </div>
                    <div className="flex-row justify-between w-full pt-5 lg:flex">
                        <div className="flex flex-col justify-center w-full pt-4 lg:w-1/5 lg:p-0">
                            <div className="relative w-full overflow-hidden pb-[100%] rounded-lg ">
                                <Image
                                    alt="Institute's Founder"
                                    src={nicolas}
                                    className="absolute top-0 left-0 w-full h-auto rounded-lg"
                                ></Image>
                            </div>
                            <div className="flex flex-col items-start">
                                <p className="pt-4 text-lg">
                                    <strong>Nicolas Van Veen</strong>
                                </p>
                                <p className="pt-2">Fundador</p>
                                <p className="pt-2 font-light">
                                    São José dos Campos - Brasil
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center w-full pt-8 lg:w-1/5 lg:p-0">
                            <div className="relative w-full overflow-hidden pb-[100%] rounded-lg">
                                <Image
                                    alt="Institute's CEO"
                                    src={guilhermeVV}
                                    className="absolute top-0 left-0 w-full h-auto rounded-lg"
                                ></Image>
                            </div>
                            <div className="flex flex-col items-start">
                                <p className="pt-4 text-lg">
                                    <strong>Guilherme Van Veen</strong>
                                </p>
                                <p className="pt-2">CEO</p>
                                <p className="pt-2 font-light">Sla - EUA</p>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center w-full pt-8 lg:w-1/5 lg:p-0">
                            <div className="relative w-full overflow-hidden pb-[100%] rounded-lg">
                                <Image
                                    alt="Institute's ???"
                                    src={alisson}
                                    className="absolute top-0 left-0 w-full h-auto rounded-lg"
                                ></Image>
                            </div>
                            <div className="flex flex-col items-start">
                                <p className="pt-4 text-lg">
                                    <strong>Alisson Brito</strong>
                                </p>
                                <p className="pt-2">Diretor de Estudos</p>
                                <p className="pt-2 font-light">
                                    São José dos Campos - Brasil
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center w-full pt-8 lg:w-1/5 lg:p-0">
                            <div className="relative w-full overflow-hidden pb-[100%] rounded-lg">
                                <Image
                                    alt="Institute's College Advisor"
                                    src={arthur}
                                    className="absolute top-0 left-0 w-full h-auto rounded-lg"
                                ></Image>
                            </div>
                            <div className="flex flex-col items-start">
                                <p className="pt-4 text-lg">
                                    <strong>Arthur Mancio Sales</strong>
                                </p>
                                <p className="pt-2">Coordenador de alunos</p>
                                <p className="pt-2 font-light">
                                    São José dos Campos - Brasil
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
            <section className="section">
                <Container className="flex flex-col items-start gap-8">
                    <h2 className="section-title">Nossos valores</h2>
                    <div>
                        <p className="section-subtitle indent-6">
                            Os valores são a base do nosso método no Instituto Van
                            Veen. Eles moldam nossa abordagem e direcionam todas as
                            nossas interações e atividades. Acreditamos que cultivar
                            e viver nossos valores é fundamental para o crescimento
                            acadêmico, pessoal e ético dos nossos alunos.
                        </p>
                        <div className="flex justify-between w-full gap-4 pt-6 lg:pb-8">
                            <ul className="text-lg font-normal list-disc list-inside lg:hidden">
                                <li className="pb-2">
                                    <strong>Cultivar a paz e bom caráter</strong>.
                                    Promovemos um ambiente de harmonia e integridade,
                                    incentivando o desenvolvimento de um bom caráter
                                    em nossos alunos.
                                </li>
                                <li className="py-2">
                                    <strong>
                                        Ajudar os mais pobres e oprimidos
                                    </strong>
                                    . Valorizamos a solidariedade e a
                                    responsabilidade social, buscando oportunidades
                                    para auxiliar aqueles que mais necessitam.
                                </li>
                                <li className="py-2">
                                    <strong>Respeitar pai e mãe</strong>.
                                    Reconhecemos a importância dos laços familiares e
                                    incentivamos o respeito e a gratidão aos pais e
                                    responsáveis.
                                </li>
                                <li className="py-2">
                                    <strong>Respeitar as diferenças</strong>.
                                    Celebramos a diversidade e promovemos um ambiente
                                    inclusivo, onde todas as pessoas são valorizadas
                                    e respeitadas.
                                </li>
                                <li className="py-2">
                                    <strong>Respeitar seus professores</strong>.
                                    Enfatizamos a importância do respeito e
                                    valorização dos professores, reconhecendo sua
                                    contribuição fundamental para o aprendizado dos
                                    alunos.
                                </li>
                                <li className="py-2">
                                    <strong>Método e disciplina</strong>. Valorizamos
                                    a disciplina e um método estruturado de estudo,
                                    que são fundamentais para o progresso acadêmico.
                                </li>
                                <li className="py-2">
                                    <strong>Perseverança</strong>. Incentivamos a
                                    persistência diante dos desafios, acreditando que
                                    a perseverança é fundamental para alcançar o
                                    sucesso.
                                </li>
                                <li className="py-2">
                                    <strong>Ser honesto</strong>. Valorizamos a
                                    honestidade em todas as áreas da vida, fomentando
                                    a integridade acadêmica e pessoal.
                                </li>
                                <li className="py-2">
                                    <strong>Ser livre</strong>. Defendemos a
                                    liberdade de expressão e o respeito às opiniões
                                    individuais, encorajando nossos alunos a
                                    desenvolverem um pensamento crítico e
                                    independente.
                                </li>
                                <li className="py-2">
                                    <strong>Estudar sempre</strong>. Promovemos uma
                                    mentalidade de aprendizado contínuo, incentivando
                                    nossos alunos a cultivarem o hábito de estudo e a
                                    busca constante pelo conhecimento.
                                </li>
                            </ul>

                            <ul className="hidden w-[40%] text-lg font-normal list-disc list-inside lg:block">
                                <li className="pb-2">
                                    <strong>Cultivar a paz e bom caráter</strong>.
                                    Promovemos um ambiente de harmonia e integridade,
                                    incentivando o desenvolvimento de um bom caráter
                                    em nossos alunos.
                                </li>
                                <li className="py-2">
                                    <strong>
                                        Ajudar os mais pobres e oprimidos
                                    </strong>
                                    . Valorizamos a solidariedade e a
                                    responsabilidade social, buscando oportunidades
                                    para auxiliar aqueles que mais necessitam.
                                </li>
                                <li className="py-2">
                                    <strong>Respeitar pai e mãe</strong>.
                                    Reconhecemos a importância dos laços familiares e
                                    incentivamos o respeito e a gratidão aos pais e
                                    responsáveis.
                                </li>
                                <li className="py-2">
                                    <strong>Respeitar as diferenças</strong>.
                                    Celebramos a diversidade e promovemos um ambiente
                                    inclusivo, onde todas as pessoas são valorizadas
                                    e respeitadas.
                                </li>
                                <li className="py-2">
                                    <strong>Respeitar seus professores</strong>.
                                    Enfatizamos a importância do respeito e
                                    valorização dos professores, reconhecendo sua
                                    contribuição fundamental para o aprendizado dos
                                    alunos.
                                </li>
                            </ul>

                            <ul className="hidden text-lg font-normal list-disc list-inside lg:block w-[40%]">
                                <li className="py-2">
                                    <strong>Método e disciplina</strong>. Valorizamos
                                    a disciplina e um método estruturado de estudo,
                                    que são fundamentais para o progresso acadêmico.
                                </li>
                                <li className="py-2">
                                    <strong>Perseverança</strong>. Incentivamos a
                                    persistência diante dos desafios, acreditando que
                                    a perseverança é fundamental para alcançar o
                                    sucesso.
                                </li>
                                <li className="py-2">
                                    <strong>Ser honesto</strong>. Valorizamos a
                                    honestidade em todas as áreas da vida, fomentando
                                    a integridade acadêmica e pessoal.
                                </li>
                                <li className="py-2">
                                    <strong>Ser livre</strong>. Defendemos a
                                    liberdade de expressão e o respeito às opiniões
                                    individuais, encorajando nossos alunos a
                                    desenvolverem um pensamento crítico e
                                    independente.
                                </li>
                                <li className="py-2">
                                    <strong>Estudar sempre</strong>. Promovemos uma
                                    mentalidade de aprendizado contínuo, incentivando
                                    nossos alunos a cultivarem o hábito de estudo e a
                                    busca constante pelo conhecimento.
                                </li>
                            </ul>
                        </div>
                    </div>
                </Container>
            </section>
            <section className="section">
                <Container className="flex flex-col items-start gap-4">
                    <h2 className="section-title">Nossos parceiros</h2>
                    <div className="flex flex-row flex-wrap items-center justify-between lg:gap-4">
                        <a
                            href="https://www.centroiyengaryogasjc.com.br"
                            target="_blank"
                            className="w-[45%] lg:w-[18%]"
                        >
                            <Image
                                alt="Institute's Partner - Centro Iyengar Yoga logo"
                                src={yoga}
                                className="py-3 transition duration-300 ease-in-out hover:scale-110"
                                title="Centro Iyengar Yoga"
                            ></Image>
                        </a>
                        <a
                            href="https://www.standwithus.com"
                            target="_blank"
                            className="w-[45%] lg:w-[18%]"
                        >
                            <Image
                                alt="Institute's Partner - Stand With Us logo"
                                src={standWithUs}
                                className="py-3 transition duration-300 ease-in-out hover:scale-110"
                                title="Stand With Us"
                            ></Image>
                        </a>
                        <a
                            href="https://royalhistsoc.org"
                            target="_blank"
                            className="w-[45%] lg:w-[18%]"
                        >
                            <Image
                                alt="Institute's Partner - Royal History Society logo"
                                src={royalHistory}
                                className="py-3 transition duration-300 ease-in-out hover:scale-110"
                                title="Royal History Society"
                            ></Image>
                        </a>
                        <a
                            href="https://www.instagram.com/farmaciacomunitariadopetiti/"
                            target="_blank"
                            className="w-[45%] lg:w-[18%]"
                        >
                            <Image
                                alt="Institute's Partner - Farmácia do Petiti logo"
                                src={farmaciaPetiti}
                                className="py-3 transition duration-300 ease-in-out hover:scale-110"
                                title="Farmácia do Petiti"
                            ></Image>
                        </a>
                        <a
                            href="https://emergeedu.com"
                            target="_blank"
                            className="w-[45%] lg:w-[18%]"
                        >
                            <Image
                                alt="Institute's Partner - Emerge Education logo"
                                src={emerge}
                                className="py-3 transition duration-300 ease-in-out hover:scale-110"
                                title="Emerge Education"
                            ></Image>
                        </a>
                        <a className="w-[45%] lg:w-[18%]">
                            <Image
                                alt="Institute's Partner - Projeto Decolar logo"
                                src={decolar}
                                className="py-3 transition duration-300 ease-in-out hover:scale-110"
                                title="Projeto Decolar"
                            ></Image>
                        </a>
                        <a
                            href="https://cuni.cz/UKEN-1.html"
                            target="_blank"
                            className="w-[45%] lg:w-[18%]"
                        >
                            <Image
                                alt="Institute's Partner - Charles University logo"
                                src={charlesUniversity}
                                className="py-3 transition duration-300 ease-in-out hover:scale-110"
                                title="Charles University"
                            ></Image>
                        </a>
                        <a
                            href="https://www.ets.org"
                            target="_blank"
                            className="w-[45%] lg:w-[18%]"
                        >
                            <Image
                                alt="Institute's Partner - ETS logo"
                                src={ets}
                                className="py-3 transition duration-300 ease-in-out hover:scale-110"
                                title="ETS"
                            ></Image>
                        </a>
                        <a
                            href="https://www.cps.sp.gov.br/etec/"
                            target="_blank"
                            className="w-[45%] lg:w-[18%]"
                        >
                            <Image
                                alt="Institute's Partner - Etec logo"
                                src={etec}
                                className="py-3 transition duration-300 ease-in-out hover:scale-110"
                                title="ETEC"
                            ></Image>
                        </a>
                        <a
                            href="https://www2.unesp.br"
                            target="_blank"
                            className="w-[45%] lg:w-[18%]"
                        >
                            <Image
                                alt="Institute's Partner - Unesp logo"
                                src={unesp}
                                className="py-3 transition duration-300 ease-in-out hover:scale-110"
                                title="UNESP"
                            ></Image>
                        </a>
                        <a
                            href="https://ufpb.br"
                            target="_blank"
                            className="w-[45%] lg:w-[18%]"
                        >
                            <Image
                                alt="Institute's Partner - UEPB logo"
                                src={uepb}
                                className="py-3 transition duration-300 ease-in-out hover:scale-110"
                                title="UEPB"
                            ></Image>
                        </a>
                        <a
                            href="http://government.ru/en/department/93/"
                            target="_blank"
                            className="w-[45%] lg:w-[18%]"
                        >
                            <Image
                                alt="Institute's Partner - Rossotrudnichestvo logo"
                                src={rosso}
                                className="py-3 transition duration-300 ease-in-out hover:scale-110"
                                title="Rossotrudnichestvo"
                            ></Image>
                        </a>
                        <a
                            href="https://www.koppert.com.br/sobre-a-koppert/koppert-do-brasil/"
                            target="_blank"
                            className="w-[45%] lg:w-[18%]"
                        >
                            <Image
                                alt="Institute's Partner - Kopert logo"
                                src={kopert}
                                className="py-3 transition duration-300 ease-in-out hover:scale-110"
                                title="Kopert"
                            ></Image>
                        </a>
                        <a
                            href="https://www.nuffic.nl/en/subjects/neso"
                            target="_blank"
                            className="w-[45%] lg:w-[18%]"
                        >
                            <Image
                                alt="Institute's Partner - Nuffic logo"
                                src={nuffic}
                                className="py-3 transition duration-300 ease-in-out hover:scale-110"
                                title="Nuffic"
                            ></Image>
                        </a>
                        <a
                            href="https://www.dutcham.com.br"
                            target="_blank"
                            className="w-[45%] lg:w-[18%]"
                        >
                            <Image
                                alt="Institute's Partner - Dutcham logo"
                                src={dutcham}
                                className="py-3 transition duration-300 ease-in-out hover:scale-110 "
                                title="Dutcham"
                            ></Image>
                        </a>
                    </div>
                </Container>
            </section>
            <section className="section">
                <Container className="flex flex-col items-start gap-4">
                    <h2 className="section-title">Conheça nossa Alumni</h2>
                    <p className="section-subtitle">
                        Temos muito orgulho da nossa rede alumni, composta por
                        estudantes talentosos que passaram pelo Instituto Van Veen e
                        alcançaram sucesso em suas trajetórias acadêmicas no
                        exterior. Dedicamos esse espaço, a todos que compartilharam
                        conosco suas histórias inspiradoras e conquistas notáveis.
                    </p>
                    <Alumni></Alumni>
                </Container>
            </section>
        </main>
    );
}

import Container from "@/components/ui/Container";
import Image from "next/image";
import becan from "public/images/about-us/partners/becan.gif";
import etec from "public/images/about-us/partners/etec.png";
import franklin from "public/images/about-us/partners/franklinCovey.png";
import kopert from "public/images/about-us/partners/kopert.png";
import multicultural from "public/images/about-us/partners/multicultural.png";
import nuffic from "public/images/about-us/partners/nuffic.jpeg";
import rosso from "public/images/about-us/partners/rossotrudnichestvo.png";
import uepb from "public/images/about-us/partners/UEPB.png";
import unesp from "public/images/about-us/partners/unesp.svg";
import dutcham from "public/images/about-us/partners/dutcham.png";
import ets from "public/images/about-us/partners/ets.png";
import nicolas from "public/images/about-us/Nicolas-Van-Veen.jpg";
import alisson from "public/images/about-us/alisson.jpeg";
import arthur from "public/images/about-us/arthur.png";
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
            <section className="pb-8 md:flex-row relative overflow-clip">
                <div className="flex justify-end">
                    <div>
                        <Container className="gap-4 flex flex-col">
                            <h2 className="mt-4 text-4xl font-bold text-left text-blue-900">
                                Há {vanVeenAge} anos transformando a vida de
                                brasileiros
                            </h2>
                            <p className="w-full max-w-lg text-left lg:max-w-none md:max-w-xl indent-6">
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
                        <div className="relative w-full py-4 h-[530px] grid grid-cols-2 grid-rows-2 md:gap-8 md:h-auto">
                            <div className="relative w-60 h-60 right-28 md:right-auto md:ml-auto">
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
                            <div className="relative h-[250px] w-[480px] right-20 md:right-auto md:col-span-2 md:m-auto">
                                <Image
                                    src={marcela}
                                    alt="Van Veen alumni"
                                    className="rounded-lg object-cover"
                                    fill
                                ></Image>
                            </div>
                        </div>
                        <Container>
                            <p className="w-full max-w-lg text-left lg:max-w-none md:max-w-xl indent-6">
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

                            <p className="w-full max-w-lg text-left lg:max-w-none md:max-w-xl indent-6">
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
                </div>
            </section>

            <section className="py-8">
                <Container className="flex flex-col gap-6">
                    <div className="w-full gap-4 flex flex-col">
                        <h2 className="section-title">Nossa equipe</h2>
                        <p className="section-subtitle">
                            Conheça a equipe dedicada por trás do Instituto Van Veen,
                            composta por profissionais apaixonados e experientes.
                        </p>
                    </div>
                    <div className="gap-4 justify-between w-full flex flex-col lg:flex-row">
                        <div className="flex flex-col justify-center w-full gap-2 lg:w-1/5 ">
                            <div className="relative w-full overflow-hidden pb-[100%] rounded-lg">
                                <Image
                                    alt="Institute's Founder"
                                    src={nicolas}
                                    className="absolute top-0 left-0 w-full h-auto rounded-lg"
                                ></Image>
                            </div>
                            <div className="flex flex-col items-start gap-1">
                                <p className=" text-lg">
                                    <strong>Nicolas Van Veen</strong>
                                </p>
                                <p className="">Fundador</p>
                                <p className="font-light">
                                    São José dos Campos - Brasil
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center w-full gap-2 lg:w-1/5 ">
                            <div className="relative w-full overflow-hidden pb-[100%] rounded-lg">
                                <Image
                                    alt="Institute's CEO"
                                    src={alisson}
                                    className="absolute top-0 left-0 w-full h-auto rounded-lg"
                                ></Image>
                            </div>
                            <div className="flex flex-col items-start gap-1">
                                <p className=" text-lg">
                                    <strong>Alisson Brito</strong>
                                </p>
                                <p className="">CEO</p>
                                <p className=" font-light">
                                    São José dos Campos - Brasil
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center w-full gap-2 lg:w-1/5 ">
                            <div className="relative w-full overflow-hidden pb-[100%] rounded-lg">
                                <Image
                                    alt="Institute's College Advisor"
                                    src={arthur}
                                    className="absolute top-0 left-0 w-full h-auto rounded-lg"
                                ></Image>
                            </div>
                            <div className="flex flex-col items-start gap-1">
                                <p className=" text-lg">
                                    <strong>Arthur Mancio Sales</strong>
                                </p>
                                <p className="">Coordenador de alunos</p>
                                <p className=" font-light">
                                    São José dos Campos - Brasil
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
            <section className="py-8">
                <Container className="flex flex-col items-start gap-8">
                    <h2 className="section-title">Nossos valores</h2>
                    <div className="flex flex-col gap-4">
                        <p className="section-subtitle indent-6">
                            Os valores são a base do nosso método no Instituto Van
                            Veen. Eles moldam nossa abordagem e direcionam todas as
                            nossas interações e atividades. Acreditamos que cultivar
                            e viver nossos valores é fundamental para o crescimento
                            acadêmico, pessoal e ético dos nossos alunos.
                        </p>
                        <div className="flex justify-between w-full gap-4">
                            <ul className="text-lg font-normal list-disc list-inside lg:hidden flex flex-col gap-2">
                                <li className="">
                                    <strong>Cultivar a paz e bom caráter</strong>.
                                    Promovemos um ambiente de harmonia e integridade,
                                    incentivando o desenvolvimento de um bom caráter
                                    em nossos alunos.
                                </li>
                                <li className="">
                                    <strong>
                                        Ajudar os mais pobres e oprimidos
                                    </strong>
                                    . Valorizamos a solidariedade e a
                                    responsabilidade social, buscando oportunidades
                                    para auxiliar aqueles que mais necessitam.
                                </li>
                                <li className="">
                                    <strong>Respeitar pai e mãe</strong>.
                                    Reconhecemos a importância dos laços familiares e
                                    incentivamos o respeito e a gratidão aos pais e
                                    responsáveis.
                                </li>
                                <li className="">
                                    <strong>Respeitar as diferenças</strong>.
                                    Celebramos a diversidade e promovemos um ambiente
                                    inclusivo, onde todas as pessoas são valorizadas
                                    e respeitadas.
                                </li>
                                <li className="">
                                    <strong>Respeitar seus professores</strong>.
                                    Enfatizamos a importância do respeito e
                                    valorização dos professores, reconhecendo sua
                                    contribuição fundamental para o aprendizado dos
                                    alunos.
                                </li>
                                <li className="">
                                    <strong>Método e disciplina</strong>. Valorizamos
                                    a disciplina e um método estruturado de estudo,
                                    que são fundamentais para o progresso acadêmico.
                                </li>
                                <li className="">
                                    <strong>Perseverança</strong>. Incentivamos a
                                    persistência diante dos desafios, acreditando que
                                    a perseverança é fundamental para alcançar o
                                    sucesso.
                                </li>
                                <li className="">
                                    <strong>Ser honesto</strong>. Valorizamos a
                                    honestidade em todas as áreas da vida, fomentando
                                    a integridade acadêmica e pessoal.
                                </li>
                                <li className="">
                                    <strong>Ser livre</strong>. Defendemos a
                                    liberdade de expressão e o respeito às opiniões
                                    individuais, encorajando nossos alunos a
                                    desenvolverem um pensamento crítico e
                                    independente.
                                </li>
                                <li className="">
                                    <strong>Estudar sempre</strong>. Promovemos uma
                                    mentalidade de aprendizado contínuo, incentivando
                                    nossos alunos a cultivarem o hábito de estudo e a
                                    busca constante pelo conhecimento.
                                </li>
                            </ul>

                            <ul className="hidden w-[40%] text-lg font-normal list-disc list-inside lg:block">
                                <li className="">
                                    <strong>Cultivar a paz e bom caráter</strong>.
                                    Promovemos um ambiente de harmonia e integridade,
                                    incentivando o desenvolvimento de um bom caráter
                                    em nossos alunos.
                                </li>
                                <li className="">
                                    <strong>
                                        Ajudar os mais pobres e oprimidos
                                    </strong>
                                    . Valorizamos a solidariedade e a
                                    responsabilidade social, buscando oportunidades
                                    para auxiliar aqueles que mais necessitam.
                                </li>
                                <li className="">
                                    <strong>Respeitar pai e mãe</strong>.
                                    Reconhecemos a importância dos laços familiares e
                                    incentivamos o respeito e a gratidão aos pais e
                                    responsáveis.
                                </li>
                                <li className="">
                                    <strong>Respeitar as diferenças</strong>.
                                    Celebramos a diversidade e promovemos um ambiente
                                    inclusivo, onde todas as pessoas são valorizadas
                                    e respeitadas.
                                </li>
                                <li className="">
                                    <strong>Respeitar seus professores</strong>.
                                    Enfatizamos a importância do respeito e
                                    valorização dos professores, reconhecendo sua
                                    contribuição fundamental para o aprendizado dos
                                    alunos.
                                </li>
                            </ul>

                            <ul className="hidden text-lg font-normal list-disc list-inside lg:block w-[40%]">
                                <li className="">
                                    <strong>Método e disciplina</strong>. Valorizamos
                                    a disciplina e um método estruturado de estudo,
                                    que são fundamentais para o progresso acadêmico.
                                </li>
                                <li className="">
                                    <strong>Perseverança</strong>. Incentivamos a
                                    persistência diante dos desafios, acreditando que
                                    a perseverança é fundamental para alcançar o
                                    sucesso.
                                </li>
                                <li className="">
                                    <strong>Ser honesto</strong>. Valorizamos a
                                    honestidade em todas as áreas da vida, fomentando
                                    a integridade acadêmica e pessoal.
                                </li>
                                <li className="">
                                    <strong>Ser livre</strong>. Defendemos a
                                    liberdade de expressão e o respeito às opiniões
                                    individuais, encorajando nossos alunos a
                                    desenvolverem um pensamento crítico e
                                    independente.
                                </li>
                                <li className="">
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

            <section className="py-8">
                <Container className="flex flex-col items-start gap-4">
                    <h2 className="section-title">Nossos parceiros</h2>
                    <div className="flex flex-row flex-wrap items-center justify-between lg:gap-4">
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
                            href="https://multicultural.com.br"
                            target="_blank"
                            className="w-[45%] lg:w-[18%]"
                        >
                            <Image
                                alt="Institute's Partner - Multicultural logo"
                                src={multicultural}
                                className="py-3 transition duration-300 ease-in-out hover:scale-110"
                                title="multicultural Communication Consulting"
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
                            href="https://franklincovey.com.br"
                            target="_blank"
                            className="w-[45%] lg:w-[18%]"
                        >
                            <Image
                                alt="Institute's Partner - Franklin Covey logo"
                                src={franklin}
                                className="py-3 transition duration-300 ease-in-out hover:scale-110"
                                title="Franklin Covey"
                            ></Image>
                        </a>
                        <a
                            href="https://becan.ca"
                            target="_blank"
                            className="w-[45%] lg:w-[18%]"
                        >
                            <Image
                                alt="Institute's Partner - Becan logo"
                                src={becan}
                                className="py-3 transition duration-300 ease-in-out hover:scale-110"
                                title="Becan"
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

            <section className="py-8">
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

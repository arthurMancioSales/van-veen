import Container from "@/components/ui/Container";
import Image from "next/image";
import template from "/public/images/about-us/placeholder.png";
import becan from "/public/images/about-us/partners/becan.gif";
import etec from "/public/images/about-us/partners/etec.jpg";
import franklin from "/public/images/about-us/partners/franklinCovey.jpg";
import kopert from "/public/images/about-us/partners/kopert.jpg";
import multicultural from "/public/images/about-us/partners/multicultural.png";
import nuffic from "/public/images/about-us/partners/nuffic.jpeg";
import rosso from "/public/images/about-us/partners/rossotrudnichestvo.png";
import uepb from "/public/images/about-us/partners/UEPB.webp";
import unesp from "/public/images/about-us/partners/unesp.svg";
import dutcham from "/public/images/about-us/partners/dutcham.png";
import { ArrowPathIcon } from "@heroicons/react/24/solid";
import Alumni from "@/components/Alumni";

export default function AboutUs() {
    return (
        <main  className={"flex flex-col items-center justify-start"}>
            <section className="section lg:flex-row">
                <div className="sticky top-0 flex-col flex-wrap items-center content-between justify-around hidden w-full h-screen pr-8 mt-12 overflow-clip lg:flex place-self-start">
                    <div className="relative w-60 h-[300px] overflow-hidden right-12">
                        <Image src={template} alt="Van Veen alumni" className="absolute top-0 left-0 object-cover w-full h-full rounded-lg"></Image>
                    </div>
                    <div className="relative w-60 h-[300px] overflow-hidden right-12">
                        <Image src={template} alt="Van Veen alumni" className="absolute top-0 left-0 object-cover w-full h-full rounded-lg"></Image>
                    </div>
                    <div className="relative overflow-hidden h-[29rem] w-[20rem]">
                        <Image src={template} alt="Van Veen alumni" className="absolute top-0 left-0 object-cover w-full h-full rounded-lg"></Image>
                    </div>
                </div>
                <div>
                    <Container 
                        direction="flex-col"
                        others="lg:items-start"
                    >
                        <h2 className="mt-24 text-4xl font-bold text-left text-blue-900">
                            Há XX anos transformando a vida de brasileiros
                        </h2>
                        <p className="w-full max-w-lg pt-6 text-left lg:max-w-xl">
                        Lorem ipsum dolor sit amet consectetur. Ultrices montes nunc in proin eu id. Morbi in tellus aliquet odio erat eu rhoncus lacus sit. Id a elementum proin faucibus ullamcorper pellentesque. Nunc morbi eros morbi consectetur cursus eu tortor. Turpis odio montes interdum leo viverra aliquam at dictumst varius. Gravida vulputate aliquam cras arcu pellentesque ridiculus mi. In dignissim varius amet aliquet eget. Varius aliquet mattis sagittis rhoncus ut. 
                        </p>
                    </Container>
                    <div className="relative flex w-full my-12 overflow-clip h-[530px] lg:hidden">
                        <Image src={template} alt="Van Veen alumni" className="absolute right-[65%] top-0 h-60 rounded-lg"></Image>
                        <Image src={template} alt="Van Veen alumni" className="absolute right-[65%] bottom-0 h-60 rounded-lg"></Image>
                        <Image src={template} alt="Van Veen alumni" className="absolute left-[50%] top-[12%] h-[400px] rounded-lg"></Image>
                    </div>
                    <Container 
                        direction="flex-col"
                        others="lg:items-start pt-4"
                    >
                        <p className="w-full max-w-lg font-normal text-left lg:max-w-xl">
                        Lorem ipsum dolor sit amet consectetur. Ultrices montes nunc in proin eu id. Morbi in tellus aliquet odio erat eu rhoncus lacus sit. Id a elementum proin faucibus ullamcorper pellentesque. Nunc morbi eros morbi consectetur cursus eu tortor. Turpis odio montes interdum leo viverra aliquam at dictumst varius. Gravida vulputate aliquam cras arcu pellentesque ridiculus mi. In dignissim varius amet aliquet eget. Varius aliquet mattis sagittis rhoncus ut. 
                        </p>
                        <div className="flex w-full gap-4 pt-8">
                            <ArrowPathIcon className="self-start w-24 pt-1"></ArrowPathIcon>
                            <p className="font-light">
                                <strong className="font-bold">Lorem ipsum dolor sit amet consectetur</strong>. Ultrices montes nunc in proin eu id. Morbi in tellus aliquet odio erat eu rhoncus lacus sit. Id a elementum proin faucibus ullamcorper pellentesque. 
                            </p>
                        </div>
                        <div className="flex w-full gap-4 pt-6 ">
                            <ArrowPathIcon className="self-start w-24 pt-1"></ArrowPathIcon>
                            <p className="font-light">
                                <strong className="font-bold">Lorem ipsum dolor sit amet consectetur</strong>. Ultrices montes nunc in proin eu id. Morbi in tellus aliquet odio erat eu rhoncus lacus sit. Id a elementum proin faucibus ullamcorper pellentesque. 
                            </p>
                        </div>
                        <div className="flex w-full gap-4 pt-6 pb-8">
                            <ArrowPathIcon className="self-start w-24 pt-1"></ArrowPathIcon>
                            <p className="font-light">
                                <strong className="font-bold">Lorem ipsum dolor sit amet consectetur</strong>. Ultrices montes nunc in proin eu id. Morbi in tellus aliquet odio erat eu rhoncus lacus sit. Id a elementum proin faucibus ullamcorper pellentesque. 
                            </p>
                        </div>
                        <p className="w-full max-w-lg font-normal text-left lg:max-w-xl">
                        Lorem ipsum dolor sit amet consectetur. Ultrices montes nunc in proin eu id. Morbi in tellus aliquet odio erat eu rhoncus lacus sit. Id a elementum proin faucibus ullamcorper pellentesque. Nunc morbi eros morbi consectetur cursus eu tortor. Turpis odio montes interdum leo viverra aliquam at dictumst varius. Gravida vulputate aliquam cras arcu pellentesque ridiculus mi. In dignissim varius amet aliquet eget. Varius aliquet mattis sagittis rhoncus ut. 
                        </p>
                    </Container>
                </div>
            </section>
            <section className="section">
                <Container 
                    direction="flex-col" 
                    items="items-start"
                >
                    <div className="block w-full">
                        <h2 className="section-title">Nossa equipe</h2>
                        <p className="section-subtitle">
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Distinctio accusantium aliquid sint vitae
                            magnam officiis.
                        </p>
                    </div>
                    <div className="flex-row justify-between w-full pt-5 lg:flex">
                        
                        <div className="flex flex-col justify-center w-full pt-4 lg:w-1/5 lg:p-0">
                            <div className="relative w-full overflow-hidden pb-[100%] rounded-lg ">
                                <Image alt="Institute's CEO" src={template} className="absolute top-0 left-0 w-full h-auto rounded-lg"></Image>
                            </div>
                            <div className="flex flex-col items-start">
                                <p className="pt-4 text-lg"><strong>Nicolas Van Veen</strong></p>
                                <p className="pt-2">Fundador</p>
                                <p className="pt-2 font-light">São José dos Campos - Brasil</p>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center w-full pt-8 lg:w-1/5 lg:p-0">
                            <div className="relative w-full overflow-hidden pb-[100%] rounded-lg">
                                <Image alt="Institute's CEO" src={template} className="absolute top-0 left-0 w-full h-auto rounded-lg"></Image>
                            </div>
                            <div className="flex flex-col items-start">
                                <p className="pt-4 text-lg"><strong>Guilherme Van Veen</strong></p>
                                <p className="pt-2">Sla</p>
                                <p className="pt-2 font-light">Sla - EUA</p>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center w-full pt-8 lg:w-1/5 lg:p-0">
                            <div className="relative w-full overflow-hidden pb-[100%] rounded-lg">
                                <Image alt="Institute's CEO" src={template} className="absolute top-0 left-0 w-full h-auto rounded-lg"></Image>
                            </div>
                            <div className="flex flex-col items-start">
                                <p className="pt-4 text-lg"><strong>Alisson Brito</strong></p>
                                <p className="pt-2">????</p>
                                <p className="pt-2 font-light">São José dos Campos - Brasil</p>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center w-full pt-8 lg:w-1/5 lg:p-0">
                            <div className="relative w-full overflow-hidden pb-[100%] rounded-lg">
                                <Image alt="Institute's CEO" src={template} className="absolute top-0 left-0 w-full h-auto rounded-lg"></Image>
                            </div>
                            <div className="flex flex-col items-start">
                                <p className="pt-4 text-lg"><strong>Arthur Mancio Sales</strong></p>
                                <p className="pt-2">Coordenador de alunos</p>
                                <p className="pt-2 font-light">São José dos Campos - Brasil</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
            <section className="section">
                <Container direction="flex-col" items="items-start">
                    <h2 className="section-title">Nossos valores</h2>
                    <p className="section-subtitle">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Distinctio accusantium aliquid sint vitae
                        magnam officiis. Distinctio accusantium aliquid sint vitae
                        magnam officiis.
                    </p>
                    <div className="flex justify-between w-full gap-4 pt-6 pb-8">
                        <ul className="text-lg font-normal list-disc list-inside lg:hidden">
                            <li className="pb-2">
                                <strong>Cultivar a paz e bom caráter</strong>. Distinctio accusantium aliquid sint vitae
                        magnam officiis.
                            </li>
                            <li className="py-2">
                                <strong>Ajudar os mais pobres e oprimidos</strong>. Distinctio accusantium aliquid sint vitae
                        magnam officiis.
                            </li>
                            <li className="py-2">
                                <strong>Respeitar pai e mãe</strong>. Distinctio accusantium aliquid sint vitae
                        magnam officiis.
                            </li>
                            <li className="py-2">
                                <strong>Respeitar as diferenças</strong>. Distinctio accusantium aliquid sint vitae
                        magnam officiis.
                            </li>
                            <li className="py-2">
                                <strong>Respeitar seus professores</strong>. Distinctio accusantium aliquid sint vitae
                        magnam officiis.
                            </li>
                            <li className="py-2">
                                <strong>Método e disciplina</strong>. Distinctio accusantium aliquid sint vitae
                        magnam officiis.
                            </li>
                            <li className="py-2">
                                <strong>Perseverança</strong>. Distinctio accusantium aliquid sint vitae
                        magnam officiis.
                            </li>
                            <li className="py-2">
                                <strong>Ser honesto</strong>. Distinctio accusantium aliquid sint vitae
                        magnam officiis.
                            </li>
                            <li className="py-2">
                                <strong>Ser livre</strong>. Distinctio accusantium aliquid sint vitae
                        magnam officiis.
                            </li>
                            <li className="py-2">
                                <strong>Estudar sempre</strong>. Distinctio accusantium aliquid sint vitae
                        magnam officiis.
                            </li>
                        </ul>

                        <ul className="hidden w-[40%] text-lg font-normal list-disc list-inside lg:block">
                            <li className="pb-2">
                                <strong>Cultivar a paz e bom caráter</strong>. Distinctio accusantium aliquid sint vitae
                        magnam officiis.
                            </li>
                            <li className="py-2">
                                <strong>Ajudar os mais pobres e oprimidos</strong>. Distinctio accusantium aliquid sint vitae
                        magnam officiis.
                            </li>
                            <li className="py-2">
                                <strong>Respeitar pai e mãe</strong>. Distinctio accusantium aliquid sint vitae
                        magnam officiis.
                            </li>
                            <li className="py-2">
                                <strong>Respeitar as diferenças</strong>. Distinctio accusantium aliquid sint vitae
                        magnam officiis.
                            </li>
                            <li className="py-2">
                                <strong>Respeitar seus professores</strong>. Distinctio accusantium aliquid sint vitae
                        magnam officiis.
                            </li>
                        </ul>
                        
                        <ul className="hidden text-lg font-normal list-disc list-inside lg:block w-[40%]">
                            <li className="pb-2">
                                <strong>Método e disciplina</strong>. Distinctio accusantium aliquid sint vitae
                        magnam officiis.
                            </li>
                            <li className="py-2">
                                <strong>Perseverança</strong>. Distinctio accusantium aliquid sint vitae
                        magnam officiis.
                            </li>
                            <li className="py-2">
                                <strong>Ser honesto</strong>. Distinctio accusantium aliquid sint vitae
                        magnam officiis.
                            </li>
                            <li className="py-2">
                                <strong>Ser livre</strong>. Distinctio accusantium aliquid sint vitae
                        magnam officiis.
                            </li>
                            <li className="py-2">
                                <strong>Estudar sempre</strong>. Distinctio accusantium aliquid sint vitae
                        magnam officiis.
                            </li>
                        </ul>
                    </div>
                </Container>
            </section>
            <section className="section">
                <Container direction="flex-col" items="items-start">
                    <h2 className="section-title">Nossos parceiros</h2>
                    <div className="flex flex-row flex-wrap items-center justify-between lg:gap-4">
                        <Image alt="Multicultural log" src={multicultural} className="py-3 w-[45%] lg:w-[20%]" title="multicultural Communication Consulting"></Image>
                        <Image alt="Etec logo" src={etec} className="py-3 w-[45%] lg:w-[20%]" title="ETEC"></Image>
                        <Image alt="Unesp logo" src={unesp} className="py-3 w-[45%] lg:w-[20%]" title="UNESP"></Image>
                        <Image alt="UEPB logo" src={uepb} className="py-3 w-[45%] lg:w-[20%]" title="UEPB"></Image>
                        <Image alt="Franklin Covey log" src={franklin} className="py-3 w-[45%] lg:w-[20%]" title="Franklin Covey"></Image>
                        <Image alt="Becan log" src={becan} className="py-3 w-[45%] lg:w-[20%]" title="Becan"></Image>
                        <Image alt="Rossotrudnichestvo log" src={rosso} className="py-3 w-[45%] lg:w-[20%]" title="Rossotrudnichestvo"></Image>
                        <Image alt="Kopert log" src={kopert} className="py-3 w-[45%] lg:w-[20%]" title="Kopert"></Image>
                        <Image alt="Nuffic log" src={nuffic} className="py-3 w-[45%] lg:w-[20%]" title="Nuffic"></Image>
                        <Image alt="Dutcham log" src={dutcham} className="py-3 w-[45%] lg:w-[20%] mr-auto" title="Dutcham"></Image>
                    </div>
                </Container>
            </section>
            <section className="section">
                <Container direction="flex-col" items="items-start">
                    <h2 className="section-title">Conheça nossa Alumni</h2>
                    <p className="section-subtitle">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Distinctio accusantium aliquid sint vitae
                        magnam officiis. Distinctio accusantium aliquid sint vitae
                        magnam officiis.
                    </p>
                    <Alumni></Alumni>
                </Container>
            </section>
        </main>
    );
}

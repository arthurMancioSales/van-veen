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
import rudn from "public/images/services/teachers/rudn-university.png";
import uws from "public/images/services/teachers/university west of scotland.png";

import nicolas from "public/images/about-us/Nicolas-Van-Veen.jpg";
import alisson from "public/images/about-us/alisson.jpeg";
import arthur from "public/images/home/arthur_class.jpg";
import marcela from "public/images/about-us/marcela.jpeg";
import katie from "public/images/about-us/katie.jpeg";
import russia from "public/images/about-us/russia.jpeg";
import Alumni from "@/components/Alumni";

import { availableLanguages } from "@/interfaces/languages";
import { getDictionary } from "../../dictionaries";
import Link from "next/link";

export default async function AboutUs({
    params,
}: {
    params: Promise<{ lang: `${availableLanguages}` }>;
}) {
    const lang = (await params).lang;
    const dict = await getDictionary(lang);

    return (
        <main className={"flex flex-col items-center justify-start"}>
            <section className="pb-8 md:flex-row relative overflow-clip">
                <div className="flex justify-end">
                    <div>
                        <Container className="gap-4 flex flex-col">
                            <h2 className="mt-4 text-4xl font-bold text-left text-blue-900">
                                {dict.aboutUs.history.title}
                            </h2>
                            <p className="w-full max-w-lg text-left lg:max-w-none md:max-w-xl indent-6 leading-6">
                                {dict.aboutUs.history.first}
                            </p>
                            <p className="w-full max-w-lg text-left lg:max-w-none md:max-w-xl indent-6 leading-6">
                                {dict.aboutUs.history.second}
                            </p>
                            <p className="w-full max-w-lg text-left lg:max-w-none md:max-w-xl indent-6 leading-6">
                                {dict.aboutUs.history.third}
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
                        <Container className="gap-4 flex flex-col">
                            <p className="w-full max-w-lg text-left lg:max-w-none md:max-w-xl indent-6 leading-6">
                                {dict.aboutUs.history.fourth}
                            </p>

                            <p className="w-full max-w-lg text-left lg:max-w-none md:max-w-xl indent-6 leading-6">
                                {dict.aboutUs.history.fifth}
                            </p>

                            <p className="w-full max-w-lg text-left lg:max-w-none md:max-w-xl indent-6 leading-6">
                                {dict.aboutUs.history.sixth}
                            </p>

                            <p className="w-full max-w-lg text-left lg:max-w-none md:max-w-xl indent-6 leading-6">
                                {dict.aboutUs.history.seventh}
                            </p>
                        </Container>
                    </div>
                </div>
            </section>

            <section className="py-8 w-full">
                <Container className="flex flex-col items-start justify-start gap-8">
                    <div className="w-full gap-4 flex flex-col">
                        <h2 className="section-title">{dict.aboutUs.team.title}</h2>
                        <p className="section-subtitle">
                            {dict.aboutUs.team.subtitle}
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
                                    <strong>
                                        {dict.aboutUs.team.members.nicolas.name}
                                    </strong>
                                </p>
                                <p className="">
                                    {dict.aboutUs.team.members.nicolas.position}
                                </p>
                                <p className="font-light">
                                    {dict.aboutUs.team.members.nicolas.location}
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
                                    <strong>
                                        {dict.aboutUs.team.members.alisson.name}
                                    </strong>
                                </p>
                                <p className="">
                                    {dict.aboutUs.team.members.alisson.position}
                                </p>
                                <p className=" font-light">
                                    {dict.aboutUs.team.members.nicolas.location}
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
                                    <strong>
                                        {dict.aboutUs.team.members.arthur.name}
                                    </strong>
                                </p>
                                <p className="">
                                    {dict.aboutUs.team.members.arthur.position}
                                </p>
                                <p className=" font-light">
                                    {dict.aboutUs.team.members.arthur.location}
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
            <section className="py-8">
                <Container className="flex flex-col items-start gap-8">
                    <h2 className="section-title">{dict.aboutUs.values.title}</h2>
                    <div className="flex flex-col gap-4">
                        <p className="section-subtitle indent-6 leading-6">
                            {dict.aboutUs.values.description}
                        </p>
                        <div className="flex justify-between w-full gap-4 px-8">
                            <ul className="text-lg font-normal list-disc list-inside lg:hidden flex flex-col gap-2">
                                <li className="">
                                    <strong>
                                        {dict.aboutUs.values.first.title}
                                    </strong>
                                    . {dict.aboutUs.values.first.description}
                                </li>
                                <li className="">
                                    <strong>
                                        {dict.aboutUs.values.second.title}
                                    </strong>
                                    . {dict.aboutUs.values.second.description}
                                </li>
                                <li className="">
                                    <strong>
                                        {dict.aboutUs.values.third.title}
                                    </strong>
                                    . {dict.aboutUs.values.third.description}
                                </li>
                                <li className="">
                                    <strong>
                                        {dict.aboutUs.values.fourth.title}
                                    </strong>
                                    . {dict.aboutUs.values.fourth.description}
                                </li>
                                <li className="">
                                    <strong>
                                        {dict.aboutUs.values.fifth.title}
                                    </strong>
                                    . {dict.aboutUs.values.fifth.description}
                                </li>
                                <li className="">
                                    <strong>
                                        {dict.aboutUs.values.sixth.title}
                                    </strong>
                                    . {dict.aboutUs.values.sixth.description}
                                </li>
                                <li className="">
                                    <strong>
                                        {dict.aboutUs.values.seventh.title}
                                    </strong>
                                    . {dict.aboutUs.values.seventh.description}
                                </li>
                                <li className="">
                                    <strong>
                                        {dict.aboutUs.values.eighth.title}
                                    </strong>
                                    . {dict.aboutUs.values.eighth.description}
                                </li>
                                <li className="">
                                    <strong>
                                        {dict.aboutUs.values.ninth.title}
                                    </strong>
                                    . {dict.aboutUs.values.ninth.description}
                                </li>
                                <li className="">
                                    <strong>
                                        {dict.aboutUs.values.tenth.title}
                                    </strong>
                                    . {dict.aboutUs.values.tenth.description}
                                </li>
                            </ul>

                            <ul className="hidden w-[40%] text-lg font-normal list-disc list-inside lg:block">
                                <li className="">
                                    <strong>
                                        {dict.aboutUs.values.first.title}
                                    </strong>
                                    . {dict.aboutUs.values.first.description}
                                </li>
                                <li className="">
                                    <strong>
                                        {dict.aboutUs.values.second.title}
                                    </strong>
                                    . {dict.aboutUs.values.second.description}
                                </li>
                                <li className="">
                                    <strong>
                                        {dict.aboutUs.values.third.title}
                                    </strong>
                                    . {dict.aboutUs.values.third.description}
                                </li>
                                <li className="">
                                    <strong>
                                        {dict.aboutUs.values.fourth.title}
                                    </strong>
                                    . {dict.aboutUs.values.fourth.description}
                                </li>
                                <li className="">
                                    <strong>
                                        {dict.aboutUs.values.fifth.title}
                                    </strong>
                                    . {dict.aboutUs.values.fifth.description}
                                </li>
                            </ul>

                            <ul className="hidden text-lg font-normal list-disc list-inside lg:block w-[40%]">
                                <li className="">
                                    <strong>
                                        {dict.aboutUs.values.sixth.title}
                                    </strong>
                                    . {dict.aboutUs.values.sixth.description}
                                </li>
                                <li className="">
                                    <strong>
                                        {dict.aboutUs.values.seventh.title}
                                    </strong>
                                    . {dict.aboutUs.values.seventh.description}
                                </li>
                                <li className="">
                                    <strong>
                                        {dict.aboutUs.values.eighth.title}
                                    </strong>
                                    . {dict.aboutUs.values.eighth.description}
                                </li>
                                <li className="">
                                    <strong>
                                        {dict.aboutUs.values.ninth.title}
                                    </strong>
                                    . {dict.aboutUs.values.ninth.description}
                                </li>
                                <li className="">
                                    <strong>
                                        {dict.aboutUs.values.tenth.title}
                                    </strong>
                                    . {dict.aboutUs.values.tenth.description}
                                </li>
                            </ul>
                        </div>
                    </div>
                </Container>
            </section>

            <section className="py-8">
                <Container className="flex flex-col items-start gap-4">
                    <h2 className="section-title">{dict.aboutUs.partners.title}</h2>
                    <div className="flex flex-row flex-wrap items-center justify-between lg:gap-4">
                        <Link
                            href="https://www.instagram.com/iyengaryogasjc/"
                            target="_blank"
                            className="w-[45%] lg:w-[18%]"
                        >
                            <Image
                                alt="Institute's Partner - Centro Iyengar Yoga logo"
                                src={yoga}
                                className="py-3 transition duration-300 ease-in-out hover:scale-110"
                                title="Centro Iyengar Yoga"
                            ></Image>
                        </Link>
                        <Link
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
                        </Link>
                        <Link
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
                        </Link>
                        <Link
                            href="https://www.instagram.com/farmaciacomunitariapetiti/"
                            target="_blank"
                            className="w-[45%] lg:w-[18%]"
                        >
                            <Image
                                alt="Institute's Partner - Farmácia do Petiti logo"
                                src={farmaciaPetiti}
                                className="py-3 transition duration-300 ease-in-out hover:scale-110"
                                title="Farmácia do Petiti"
                            ></Image>
                        </Link>
                        <Link
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
                        </Link>
                        <Link href={"#"} className="w-[45%] lg:w-[18%]">
                            <Image
                                alt="Institute's Partner - Projeto Decolar logo"
                                src={decolar}
                                className="py-3 transition duration-300 ease-in-out hover:scale-110"
                                title="Projeto Decolar"
                            ></Image>
                        </Link>
                        <Link
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
                        </Link>
                        <Link
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
                        </Link>
                        <Link
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
                        </Link>
                        <Link
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
                        </Link>
                        <Link
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
                        </Link>
                        <Link
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
                        </Link>
                        <Link
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
                        </Link>
                        <Link
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
                        </Link>
                        <Link
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
                        </Link>
                        <Link
                            href="https://www.uws.ac.uk"
                            target="_blank"
                            className="w-[45%] lg:w-[18%]"
                        >
                            <Image
                                alt="Institute's Partner - UWS logo"
                                src={uws}
                                className="py-3 transition duration-300 ease-in-out hover:scale-110 "
                                title="UWS"
                            ></Image>
                        </Link>
                        <Link
                            href="https://rudn-sochi.ru"
                            target="_blank"
                            className="w-[45%] lg:w-[18%]"
                        >
                            <Image
                                alt="Institute's Partner - Rudn logo"
                                src={rudn}
                                className="py-3 transition duration-300 ease-in-out hover:scale-110 "
                                title="Rudn"
                            ></Image>
                        </Link>
                    </div>
                </Container>
            </section>

            <section className="py-8">
                <Container className="flex flex-col items-start gap-4">
                    <h2 className="section-title">{dict.aboutUs.alumni.title}</h2>
                    <p className="section-subtitle">
                        {dict.aboutUs.alumni.description}
                    </p>
                    <Alumni></Alumni>
                </Container>
            </section>
        </main>
    );
}

import Image from "next/image";
import { Briefcase, CheckCircle, Globe, Users } from "lucide-react";
import { Button } from "@/components/ui/button/Button";
import { availableLanguages } from "@/interfaces/languages";
import { getDictionary } from "../../dictionaries";
import { Card, CardContent } from "@/components/ui/card/Card";
import mba from "public/images/companies/mba.jpg";
import office from "public/images/companies/office.avif";
import interview from "public/images/companies/interviews.jpg";
import scholarship from "public/images/companies/scholarship.jpeg";
import Link from "next/link";

export default async function CompaniesPage({
    params,
}: {
    params: Promise<{ lang: `${availableLanguages}` }>;
}) {
    const lang = (await params).lang;
    const dict = await getDictionary(lang);

    return (
        <main className="flex-1">
            <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-slate-50">
                <div className="container px-4 md:px-6">
                    <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
                        <div className="flex flex-col justify-center space-y-4">
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                    {dict.companies.hero.title}
                                </h1>
                                <p className="max-w-[600px] text-slate-700 md:text-xl">
                                    {dict.companies.hero.subtitle}
                                </p>
                            </div>
                            <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                <Link
                                    href={
                                        "https://wa.me//5519994828888?text=Ol%C3%A1%21%20Gostaria%20de%20solicitar%20a%20apresenta%C3%A7%C3%A3o%20sobre%20parcerias%20coorporativas%0A"
                                    }
                                >
                                    <Button
                                        size="lg"
                                        className="w-full"
                                        variant="outline"
                                    >
                                        {dict.companies.hero.callToAction}
                                    </Button>
                                </Link>
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <Image
                                src={office}
                                width={400}
                                height={400}
                                alt="Executivos em reunião"
                                className="rounded-lg object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full py-12 md:py-24 lg:py-32">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                {dict.companies.why.title}
                            </h2>
                            <p className="max-w-[900px] text-slate-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                {dict.companies.why.description}
                            </p>
                        </div>
                    </div>
                    <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
                        <Card className="border-slate-200">
                            <CardContent className="flex flex-col items-center gap-2 p-6">
                                <Globe className="h-12 w-12 text-slate-900" />
                                <h3 className="text-xl font-bold text-center">
                                    {dict.companies.why.first.title}
                                </h3>
                                <p className="text-center text-slate-700">
                                    {dict.companies.why.first.description}
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="border-slate-200">
                            <CardContent className="flex flex-col items-center gap-2 p-6">
                                <Briefcase className="h-12 w-12 text-slate-900" />

                                <h3 className="text-xl font-bold text-center">
                                    {dict.companies.why.second.title}
                                </h3>
                                <p className="text-center text-slate-700">
                                    {dict.companies.why.second.description}
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="border-slate-200">
                            <CardContent className="flex flex-col items-center gap-2 p-6">
                                <Users className="h-12 w-12 text-slate-900" />
                                <h3 className="text-xl font-bold text-center">
                                    {dict.companies.why.third.title}
                                </h3>
                                <p className="text-center text-slate-700">
                                    {dict.companies.why.third.description}
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            <section id="solutions" className="py-20 bg-navy-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-slate-900 text-slate-50">
                            {dict.companies.solutions.badge}
                        </div>
                        <h2 className="text-3xl font-bold mb-4">
                            {dict.companies.solutions.title}
                        </h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            {dict.companies.solutions.subtitle}
                        </p>
                    </div>

                    <div className="space-y-12">
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <div className="grid md:grid-cols-2">
                                <div className="p-8">
                                    <h3 className="text-2xl font-bold mb-4">
                                        {dict.companies.solutions.first.title}
                                    </h3>
                                    <p className="text-gray-600 mb-6">
                                        {dict.companies.solutions.first.description}
                                    </p>
                                    <ul className="space-y-2 mb-6">
                                        <li className="flex items-center">
                                            <CheckCircle className="h-5 w-5 text-navy-600 mr-2" />
                                            <span>
                                                {
                                                    dict.companies.solutions.first
                                                        .topics.first
                                                }
                                            </span>
                                        </li>
                                        <li className="flex items-center">
                                            <CheckCircle className="h-5 w-5 text-navy-600 mr-2" />
                                            <span>
                                                {
                                                    dict.companies.solutions.first
                                                        .topics.second
                                                }
                                            </span>
                                        </li>
                                        <li className="flex items-center">
                                            <CheckCircle className="h-5 w-5 text-navy-600 mr-2" />
                                            <span>
                                                {
                                                    dict.companies.solutions.first
                                                        .topics.third
                                                }
                                            </span>
                                        </li>
                                        <li className="flex items-center">
                                            <CheckCircle className="h-5 w-5 text-navy-600 mr-2" />
                                            <span>
                                                {
                                                    dict.companies.solutions.first
                                                        .topics.fourth
                                                }
                                            </span>
                                        </li>
                                    </ul>
                                    <Link
                                        href={
                                            "https://wa.me//5519994828888?text=Ol%C3%A1%21%20Gostaria%20de%20conhecer%20o%20programa%20de%20desenvolvimento%20internacional%0A"
                                        }
                                    >
                                        <Button>
                                            {
                                                dict.companies.solutions.first
                                                    .callToAction
                                            }
                                        </Button>
                                    </Link>
                                </div>
                                <div className="bg-navy-100">
                                    <Image
                                        src={mba}
                                        width={600}
                                        height={400}
                                        alt="Programa de Desenvolvimento Internacional"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <div className="grid md:grid-cols-2">
                                <div className="bg-navy-100 md:order-2">
                                    <Image
                                        src={scholarship}
                                        width={600}
                                        height={400}
                                        alt="Programa de Bolsas Corporativas"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-8 md:order-1">
                                    <h3 className="text-2xl font-bold mb-4">
                                        {dict.companies.solutions.second.title}
                                    </h3>
                                    <p className="text-gray-600 mb-6">
                                        {dict.companies.solutions.second.description}
                                    </p>
                                    <ul className="space-y-2 mb-6">
                                        <li className="flex items-center">
                                            <CheckCircle className="h-5 w-5 text-navy-600 mr-2" />
                                            <span>
                                                {
                                                    dict.companies.solutions.second
                                                        .topics.first
                                                }
                                            </span>
                                        </li>
                                        <li className="flex items-center">
                                            <CheckCircle className="h-5 w-5 text-navy-600 mr-2" />
                                            <span>
                                                {
                                                    dict.companies.solutions.second
                                                        .topics.second
                                                }
                                            </span>
                                        </li>
                                        <li className="flex items-center">
                                            <CheckCircle className="h-5 w-5 text-navy-600 mr-2" />
                                            <span>
                                                {
                                                    dict.companies.solutions.second
                                                        .topics.third
                                                }
                                            </span>
                                        </li>
                                        <li className="flex items-center">
                                            <CheckCircle className="h-5 w-5 text-navy-600 mr-2" />
                                            <span>
                                                {
                                                    dict.companies.solutions.second
                                                        .topics.fourth
                                                }
                                            </span>
                                        </li>
                                    </ul>
                                    <Link
                                        href={
                                            "https://wa.me//5519994828888?text=Ol%C3%A1%21%20Gostaria%20de%20conhecer%20o%20programa%20de%20bolsas%20corporativas%0A"
                                        }
                                    >
                                        <Button>
                                            {
                                                dict.companies.solutions.second
                                                    .callToAction
                                            }
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <div className="grid md:grid-cols-2">
                                <div className="p-8">
                                    <h3 className="text-2xl font-bold mb-4">
                                        {dict.companies.solutions.third.title}
                                    </h3>
                                    <p className="text-gray-600 mb-6">
                                        {dict.companies.solutions.third.description}
                                    </p>
                                    <ul className="space-y-2 mb-6">
                                        <li className="flex items-center">
                                            <CheckCircle className="h-5 w-5 text-navy-600 mr-2" />
                                            <span>
                                                {
                                                    dict.companies.solutions.third
                                                        .topics.first
                                                }
                                            </span>
                                        </li>
                                        <li className="flex items-center">
                                            <CheckCircle className="h-5 w-5 text-navy-600 mr-2" />
                                            <span>
                                                {
                                                    dict.companies.solutions.third
                                                        .topics.second
                                                }
                                            </span>
                                        </li>
                                        <li className="flex items-center">
                                            <CheckCircle className="h-5 w-5 text-navy-600 mr-2" />
                                            <span>
                                                {
                                                    dict.companies.solutions.third
                                                        .topics.third
                                                }
                                            </span>
                                        </li>
                                        <li className="flex items-center">
                                            <CheckCircle className="h-5 w-5 text-navy-600 mr-2" />
                                            <span>
                                                {
                                                    dict.companies.solutions.third
                                                        .topics.fourth
                                                }
                                            </span>
                                        </li>
                                    </ul>
                                    <Link
                                        href={
                                            "https://wa.me//5519994828888?text=Ol%C3%A1%21%20Gostaria%20de%20conhecer%20o%20programa%20de%20recrutamento%20de%20talentos%20internacionais"
                                        }
                                    >
                                        <Button>
                                            {
                                                dict.companies.solutions.third
                                                    .callToAction
                                            }
                                        </Button>
                                    </Link>
                                </div>
                                <div className="bg-navy-100">
                                    <Image
                                        src={interview}
                                        width={600}
                                        height={400}
                                        alt="Recrutamento de Talentos Internacionais"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <section className="w-full py-12 md:py-24 lg:py-32">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                Casos de sucesso
                            </h2>
                            <p className="max-w-[900px] text-slate-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                Conheça algumas empresas que já investem em programas
                                de educação internacional com o Instituto Van Veen.
                            </p>
                        </div>
                    </div>
                    <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2">
                        <Card className="border-slate-200">
                            <CardContent className="p-6">
                                <div className="flex items-center gap-4">
                                    <Image
                                        src="/placeholder-logo.svg"
                                        width={80}
                                        height={40}
                                        alt="Logo da empresa parceira"
                                        className="rounded-lg"
                                    />
                                    <div>
                                        <h3 className="text-xl font-bold">
                                            Empresa Tecnologia S.A.
                                        </h3>
                                        <p className="text-sm text-slate-500">
                                            Programa de bolsas para engenheiros
                                        </p>
                                    </div>
                                </div>
                                <p className="mt-4 text-slate-700">
                                    &quot;Nosso programa de bolsas com o Instituto
                                    Van Veen já enviou mais de 50 engenheiros para
                                    mestrado e doutorado em universidades como MIT e
                                    Stanford. O retorno para a empresa tem sido
                                    extraordinário em termos de inovação.&quot;
                                </p>
                                <p className="mt-2 text-sm font-medium">
                                    Maria Silva, Diretora de RH
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="border-slate-200">
                            <CardContent className="p-6">
                                <div className="flex items-center gap-4">
                                    <Image
                                        src="/placeholder-logo.svg"
                                        width={80}
                                        height={40}
                                        alt="Logo da empresa parceira"
                                        className="rounded-lg"
                                    />
                                    <div>
                                        <h3 className="text-xl font-bold">
                                            Banco Investimento
                                        </h3>
                                        <p className="text-sm text-slate-500">
                                            Programa de desenvolvimento de lideranças
                                        </p>
                                    </div>
                                </div>
                                <p className="mt-4 text-slate-700">
                                    &quot;A parceria com o Instituto Van Veen nos
                                    permitiu desenvolver um programa de formação
                                    internacional para nossos executivos, resultando
                                    em uma visão mais global e estratégica para
                                    nossos negócios.&quot;
                                </p>
                                <p className="mt-2 text-sm font-medium">
                                    Carlos Mendes, CEO
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="border-slate-200">
                            <CardContent className="p-6">
                                <div className="flex items-center gap-4">
                                    <Image
                                        src="/placeholder-logo.svg"
                                        width={80}
                                        height={40}
                                        alt="Logo da empresa parceira"
                                        className="rounded-lg"
                                    />
                                    <div>
                                        <h3 className="text-xl font-bold">
                                            Indústria Nacional Ltda.
                                        </h3>
                                        <p className="text-sm text-slate-500">
                                            Programa de responsabilidade social
                                        </p>
                                    </div>
                                </div>
                                <p className="mt-4 text-slate-700">
                                    &quot;Através do nosso programa de
                                    responsabilidade social com o Instituto Van Veen,
                                    já patrocinamos mais de 100 bolsas para jovens de
                                    comunidades carentes estudarem no exterior.&quot;
                                </p>
                                <p className="mt-2 text-sm font-medium">
                                    Ana Costa, Diretora de Sustentabilidade
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="border-slate-200">
                            <CardContent className="p-6">
                                <div className="flex items-center gap-4">
                                    <Image
                                        src="/placeholder-logo.svg"
                                        width={80}
                                        height={40}
                                        alt="Logo da empresa parceira"
                                        className="rounded-lg"
                                    />
                                    <div>
                                        <h3 className="text-xl font-bold">
                                            Grupo Comércio
                                        </h3>
                                        <p className="text-sm text-slate-500">
                                            Programa de talentos internacionais
                                        </p>
                                    </div>
                                </div>
                                <p className="mt-4 text-slate-700">
                                    &quot;Nossa parceria com o Instituto Van Veen nos
                                    ajudou a criar um programa de desenvolvimento de
                                    talentos com foco internacional, fortalecendo
                                    nossa expansão global.&quot;
                                </p>
                                <p className="mt-2 text-sm font-medium">
                                    Roberto Alves, Diretor de Expansão
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section> */}

            <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-900 text-slate-50">
                <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                            {dict.companies.footer.title}
                        </h2>
                        <p className="text-slate-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            {dict.companies.footer.description}
                        </p>
                    </div>
                    <div className="flex flex-col gap-4 min-[400px]:flex-row lg:justify-end">
                        <Link
                            target="_blank"
                            className="w-full"
                            href={
                                "https://wa.me//5519994828888?text=Ol%C3%A1%21%20Gostaria%20de%20solicitar%20uma%20proposta%20de%20programa%20para%20a%20minha%20empresa"
                            }
                        >
                            <Button
                                size="lg"
                                className="bg-slate-50 text-slate-900 hover:bg-slate-200 w-full"
                            >
                                {dict.companies.footer.button}
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}

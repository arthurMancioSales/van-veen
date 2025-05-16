import Image from "next/image";
import {
    BookOpen,
    Calendar,
    GraduationCap,
    HeartHandshake,
    School,
    Users,
} from "lucide-react";
import { Button } from "@/components/ui/button/Button";
import { availableLanguages } from "@/interfaces/languages";
import { Card, CardContent } from "@/components/ui/card/Card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import schoolMeeting from "public/images/services/teachers/school meeting.avif";
import partnership from "public/images/services/teachers/partnership.avif";
import etec from "public/images/about-us/partners/etec.png";
import rudn from "public/images/services/teachers/rudn-university.png";
import wes from "public/images/services/teachers/university west of scotland.png";
import charlesUniversity from "public/images/about-us/partners/charles-university-logo.png";
import UEPB from "public/images/about-us/partners/UEPB.png";
import univap from "public/images/services/teachers/univap.png";
import { getDictionary } from "../../../dictionaries";

export default async function TeachersPage({
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
                                    {dict.teachers.hero.title}
                                </h1>
                                <p className="max-w-[600px] text-slate-700 md:text-xl">
                                    {dict.teachers.hero.description}
                                </p>
                            </div>
                            <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                <Link
                                    target="_blank"
                                    className="w-full"
                                    href={
                                        "https://wa.me//5519994828888?text=Ol%C3%A1%21%20Gostaria%20de%20estabelecer%20uma%20parceria%20entre%20minha%20institui%C3%A7%C3%A3o%20e%20o%20Instituto%20Van%20Veen"
                                    }
                                >
                                    <Button size="lg" className="w-full">
                                        {dict.teachers.hero.callToAction}
                                    </Button>
                                </Link>
                            </div>
                        </div>
                        <div className="flex items-center justify-end">
                            <Image
                                src={schoolMeeting}
                                width={400}
                                height={400}
                                alt="Professores e coordenadores em reunião"
                                className="rounded-lg object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full py-12 md:py-24 lg:py-32">
                <div className="container px-4 md:px-6">
                    <Tabs defaultValue="escolas" className="w-full">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                    {dict.teachers.solutions.title}
                                </h2>
                                <p className="max-w-[900px] text-slate-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    {dict.teachers.solutions.subtitle}
                                </p>
                            </div>
                            <TabsList className="grid w-full max-w-md grid-cols-2">
                                <TabsTrigger value="escolas">
                                    {dict.teachers.solutions.first.title}
                                </TabsTrigger>
                                <TabsTrigger value="professores">
                                    {dict.teachers.solutions.second.title}
                                </TabsTrigger>
                            </TabsList>
                        </div>
                        <TabsContent value="escolas" className="space-y-8">
                            <div className="grid gap-6 lg:grid-cols-3">
                                <Card className="border-slate-200">
                                    <CardContent className="flex flex-col items-center gap-2 p-6">
                                        <School className="h-12 w-12 text-slate-900" />
                                        <h3 className="text-xl font-bold">
                                            {
                                                dict.teachers.solutions.first.topics
                                                    .first.title
                                            }
                                        </h3>
                                        <p className="text-center text-slate-700">
                                            {
                                                dict.teachers.solutions.first.topics
                                                    .first.description
                                            }
                                        </p>
                                    </CardContent>
                                </Card>
                                <Card className="border-slate-200">
                                    <CardContent className="flex flex-col items-center gap-2 p-6">
                                        <Users className="h-12 w-12 text-slate-900" />
                                        <h3 className="text-xl font-bold">
                                            {
                                                dict.teachers.solutions.first.topics
                                                    .second.title
                                            }
                                        </h3>
                                        <p className="text-center text-slate-700">
                                            {
                                                dict.teachers.solutions.first.topics
                                                    .second.description
                                            }
                                        </p>
                                    </CardContent>
                                </Card>
                                <Card className="border-slate-200">
                                    <CardContent className="flex flex-col items-center gap-2 p-6">
                                        <HeartHandshake className="h-12 w-12 text-slate-900" />
                                        <h3 className="text-xl font-bold">
                                            {
                                                dict.teachers.solutions.first.topics
                                                    .second.title
                                            }
                                        </h3>
                                        <p className="text-center text-slate-700">
                                            {
                                                dict.teachers.solutions.first.topics
                                                    .second.description
                                            }
                                        </p>
                                    </CardContent>
                                </Card>
                            </div>
                            <div className="flex justify-center">
                                <Link
                                    target="_blank"
                                    href={
                                        "https://wa.me//5519994828888?text=Ol%C3%A1%21%20Gostaria%20de%20solicitar%20uma%20proposta%20de%20parceria%20entre%20o%20Instituto%20Van%20Veen%20e%20minha%20institui%C3%A7%C3%A3o"
                                    }
                                >
                                    <Button size="lg">
                                        {dict.teachers.solutions.first.callToAction}
                                    </Button>
                                </Link>
                            </div>
                        </TabsContent>
                        <TabsContent value="professores" className="space-y-8">
                            <div className="grid gap-6 lg:grid-cols-3">
                                <Card className="border-slate-200">
                                    <CardContent className="flex flex-col items-center gap-2 p-6">
                                        <BookOpen className="h-12 w-12 text-slate-900" />
                                        <h3 className="text-xl font-bold">
                                            {
                                                dict.teachers.solutions.second.topics
                                                    .first.title
                                            }
                                        </h3>
                                        <p className="text-center text-slate-700">
                                            Programas de formação para professores
                                            sobre metodologias internacionais e
                                            preparação de alunos para o exterior.
                                        </p>
                                    </CardContent>
                                </Card>
                                <Card className="border-slate-200">
                                    <CardContent className="flex flex-col items-center gap-2 p-6">
                                        <Users className="h-12 w-12 text-slate-900" />
                                        <h3 className="text-xl font-bold">
                                            {
                                                dict.teachers.solutions.second.topics
                                                    .second.title
                                            }
                                        </h3>
                                        <p className="text-center text-slate-700">
                                            {
                                                dict.teachers.solutions.second.topics
                                                    .second.description
                                            }
                                        </p>
                                    </CardContent>
                                </Card>
                                <Card className="border-slate-200">
                                    <CardContent className="flex flex-col items-center gap-2 p-6">
                                        <GraduationCap className="h-12 w-12 text-slate-900" />
                                        <h3 className="text-xl font-bold">
                                            {
                                                dict.teachers.solutions.second.topics
                                                    .third.title
                                            }
                                        </h3>
                                        <p className="text-center text-slate-700">
                                            {
                                                dict.teachers.solutions.second.topics
                                                    .third.description
                                            }
                                        </p>
                                    </CardContent>
                                </Card>
                            </div>
                            <div className="flex justify-center">
                                <Link
                                    target="_blank"
                                    href={
                                        "https://wa.me//5519994828888?text=Ol%C3%A1%21%20Gostaria%20de%20conhcer%20os%20programas%20para%20dispon%C3%ADveis%20para%20professores"
                                    }
                                >
                                    <Button size="lg">
                                        {dict.teachers.solutions.second.callToAction}
                                    </Button>
                                </Link>
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </section>

            <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
                <div className="container px-4 md:px-6">
                    <div className="grid gap-10 lg:grid-cols-2">
                        <div className="flex items-center justify-center">
                            <Image
                                src={partnership}
                                width={500}
                                height={400}
                                alt="Reunião de parceria educacional"
                                className="rounded-lg object-cover"
                            />
                        </div>
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                                {dict.teachers.benefits.title}
                            </h2>
                            <p className="text-slate-700 md:text-xl">
                                {dict.teachers.benefits.subtitle}
                            </p>
                            <ul className="space-y-2">
                                <li className="flex items-start gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="h-5 w-5 text-slate-900 mt-0.5"
                                    >
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                    <p className="font-medium">
                                        {dict.teachers.benefits.first}
                                    </p>
                                </li>
                                <li className="flex items-start gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="h-5 w-5 text-slate-900 mt-0.5"
                                    >
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                    <p className="font-medium">
                                        {dict.teachers.benefits.second}
                                    </p>
                                </li>
                                <li className="flex items-start gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="h-5 w-5 text-slate-900 mt-0.5"
                                    >
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                    <p className="font-medium">
                                        {dict.teachers.benefits.third}
                                    </p>
                                </li>
                                <li className="flex items-start gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="h-5 w-5 text-slate-900 mt-0.5"
                                    >
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                    <p className="font-medium">
                                        {dict.teachers.benefits.fourth}
                                    </p>
                                </li>
                                <li className="flex items-start gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="h-5 w-5 text-slate-900 mt-0.5"
                                    >
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                    <p className="font-medium">
                                        {dict.teachers.benefits.fifth}
                                    </p>
                                </li>
                                <li className="flex items-start gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="h-5 w-5 text-slate-900 mt-0.5"
                                    >
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                    <p className="font-medium">
                                        {dict.teachers.benefits.sixth}
                                    </p>
                                </li>
                            </ul>
                            <Link
                                target="_blank"
                                href={
                                    "https://wa.me//5519994828888?text=Ol%C3%A1%21%20Gostaria%20de%20saber%20mais%20sobre%20os%20benef%C3%ADcios%20de%20estabelecer%20uma%20parceria%20entre%20minha%20institui%C3%A7%C3%A3o%20e%20o%20Instituto%20Van%20Veen"
                                }
                            >
                                <Button className="mt-4">
                                    {dict.teachers.benefits.callToAction}
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full py-12 md:py-24 lg:py-32">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                {dict.teachers.partnerships.title}
                            </h2>
                            <p className="max-w-[900px] text-slate-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                {dict.teachers.partnerships.subtitle}
                            </p>
                        </div>
                    </div>
                    <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 py-12 md:grid-cols-3 lg:grid-cols-4">
                        {[etec, univap, UEPB, charlesUniversity, rudn, wes].map(
                            (i, index) => (
                                <div
                                    key={index}
                                    className="flex items-center justify-center p-4"
                                >
                                    <Image
                                        src={i}
                                        height={200}
                                        alt={`Logo da instituição parceira ${index}`}
                                        className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                                    />
                                </div>
                            ),
                        )}
                    </div>
                </div>
            </section>

            <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-900 text-slate-50">
                <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                            {dict.teachers.footer.title}
                        </h2>
                        <p className="text-slate-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            {dict.teachers.footer.description}
                        </p>
                    </div>
                    <div className="flex flex-col gap-4 min-[400px]:flex-row lg:justify-end">
                        <Link
                            target="_blank"
                            className="w-full"
                            href={
                                "https://wa.me//5519994828888?text=Ol%C3%A1%21%20Gostaria%20de%20agendar%20uma%20reuni%C3%A3o%20para%20discutir%20uma%20poss%C3%ADvel%20parecia%20com%20a%20minha%20institui%C3%A7%C3%A3o"
                            }
                        >
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-slate-50  w-full"
                            >
                                <Calendar className="mr-2 h-4 w-4" />
                                {dict.teachers.footer.button}
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}

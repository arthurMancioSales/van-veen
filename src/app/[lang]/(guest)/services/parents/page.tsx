import Image from "next/image";
import { Award, BookOpen, Calendar, CheckCircle, Globe } from "lucide-react";
import { Button } from "@/components/ui/button/Button";
import { availableLanguages } from "@/interfaces/languages";
import { getDictionary } from "../../../dictionaries";
import { Card, CardContent } from "@/components/ui/card/Card";
import hero from "public/images/services/parents/hero.jpg";
import student from "public/images/services/parents/student.jpeg";
import Link from "next/link";

export default async function ParentsPage({
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
                                    {dict.parents.hero.title}
                                </h1>
                                <p className="max-w-[600px] text-slate-700 md:text-xl">
                                    {dict.parents.hero.subtitle}
                                </p>
                            </div>
                            <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                <Link
                                    target="_blank"
                                    className="w-full"
                                    href={
                                        "https://wa.me//5519994828888?text=Ol%C3%A1%21%20Gostaria%20de%20agendar%20uma%20consulta%20para%20falar%20sobre%20os%20estudos%20do%20meu%20filho"
                                    }
                                >
                                    <Button size="lg" className="w-full">
                                        {dict.parents.hero.button}
                                    </Button>
                                </Link>
                            </div>
                        </div>
                        <div className="flex items-center justify-end">
                            <Image
                                src={hero}
                                width={400}
                                height={400}
                                alt="Estudantes celebrando formatura"
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
                            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-slate-900 text-slate-50">
                                {dict.parents.why.title}
                            </div>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                {dict.parents.why.subtitle}
                            </h2>
                            <p className="max-w-[900px] text-slate-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                {dict.parents.why.description}
                            </p>
                        </div>
                    </div>
                    <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
                        <Card className="border-slate-200">
                            <CardContent className="flex flex-col items-center gap-2 p-6">
                                <Award className="h-12 w-12 text-slate-900" />
                                <h3 className="text-xl font-bold">
                                    {dict.parents.why.first.title}
                                </h3>
                                <p className="text-center text-slate-700">
                                    {dict.parents.why.first.description}
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="border-slate-200">
                            <CardContent className="flex flex-col items-center gap-2 p-6">
                                <BookOpen className="h-12 w-12 text-slate-900" />
                                <h3 className="text-xl font-bold">
                                    {dict.parents.why.second.title}
                                </h3>
                                <p className="text-center text-slate-700">
                                    {dict.parents.why.second.description}
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="border-slate-200">
                            <CardContent className="flex flex-col items-center gap-2 p-6">
                                <Globe className="h-12 w-12 text-slate-900" />
                                <h3 className="text-xl font-bold">
                                    {dict.parents.why.third.title}
                                </h3>
                                <p className="text-center text-slate-700">
                                    {dict.parents.why.third.description}
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
                <div className="container px-4 md:px-6">
                    <div className="grid gap-10 lg:grid-cols-2">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                                {dict.parents.process.title}
                            </h2>
                            <p className="text-slate-700 md:text-xl">
                                {dict.parents.process.subtitle}
                            </p>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="h-5 w-5 text-slate-900" />
                                    <p className="font-medium">
                                        {dict.parents.process.steps.first}
                                    </p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="h-5 w-5 text-slate-900" />
                                    <p className="font-medium">
                                        {dict.parents.process.steps.second}
                                    </p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="h-5 w-5 text-slate-900" />
                                    <p className="font-medium">
                                        {dict.parents.process.steps.third}
                                    </p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="h-5 w-5 text-slate-900" />
                                    <p className="font-medium">
                                        {dict.parents.process.steps.fourth}
                                    </p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="h-5 w-5 text-slate-900" />
                                    <p className="font-medium">
                                        {dict.parents.process.steps.fifth}
                                    </p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="h-5 w-5 text-slate-900" />
                                    <p className="font-medium">
                                        {dict.parents.process.steps.sixth}
                                    </p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="h-5 w-5 text-slate-900" />
                                    <p className="font-medium">
                                        {dict.parents.process.steps.seventh}
                                    </p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="h-5 w-5 text-slate-900" />
                                    <p className="font-medium">
                                        {dict.parents.process.steps.eighth}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <Image
                                src={student}
                                width={500}
                                height={400}
                                alt="Estudantes em sessão de orientação"
                                className="rounded-lg object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* <section className="w-full py-12 md:py-24 lg:py-32">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                O que dizem as famílias
                            </h2>
                            <p className="max-w-[900px] text-slate-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                Conheça histórias de sucesso de famílias que
                                confiaram no Instituto Van Veen.
                            </p>
                        </div>
                    </div>
                    <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
                        <Card className="border-slate-200">
                            <CardContent className="flex flex-col items-center gap-4 p-6">
                                <Image
                                    src="/placeholder.svg?height=100&width=100"
                                    width={100}
                                    height={100}
                                    alt="Foto de aluno"
                                    className="rounded-full object-cover"
                                />
                                <div className="space-y-2 text-center">
                                    <h3 className="text-xl font-bold">
                                        Pedro Almeida
                                    </h3>
                                    <p className="text-sm text-slate-500">
                                        Harvard University
                                    </p>
                                    <p className="text-slate-700">
                                        &quot;O Instituto Van Veen foi fundamental
                                        para minha aprovação em Harvard com bolsa
                                        integral. A orientação personalizada fez toda
                                        a diferença.&quot;
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="border-slate-200">
                            <CardContent className="flex flex-col items-center gap-4 p-6">
                                <Image
                                    src="/placeholder.svg?height=100&width=100"
                                    width={100}
                                    height={100}
                                    alt="Foto de aluna"
                                    className="rounded-full object-cover"
                                />
                                <div className="space-y-2 text-center">
                                    <h3 className="text-xl font-bold">
                                        Mariana Costa
                                    </h3>
                                    <p className="text-sm text-slate-500">
                                        Stanford University
                                    </p>
                                    <p className="text-slate-700">
                                        &quot;Graças ao acompanhamento do Instituto
                                        Van Veen, consegui uma bolsa de 90% em
                                        Stanford. O processo foi desafiador, mas tive
                                        todo o suporte necessário.&quot;
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="border-slate-200">
                            <CardContent className="flex flex-col items-center gap-4 p-6">
                                <Image
                                    src="/placeholder.svg?height=100&width=100"
                                    width={100}
                                    height={100}
                                    alt="Foto de aluno"
                                    className="rounded-full object-cover"
                                />
                                <div className="space-y-2 text-center">
                                    <h3 className="text-xl font-bold">
                                        Lucas Mendes
                                    </h3>
                                    <p className="text-sm text-slate-500">MIT</p>
                                    <p className="text-slate-700">
                                        &quot;O preparo acadêmico e emocional que
                                        recebi do Instituto Van Veen foi essencial
                                        para minha aprovação no MIT com bolsa
                                        integral.&quot;
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section> */}

            <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-900 text-slate-50">
                <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                            {dict.parents.footer.title}
                        </h2>
                        <p className="text-slate-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            {dict.parents.footer.description}
                        </p>
                    </div>
                    <div className="flex flex-col gap-4 min-[400px]:flex-row lg:justify-end">
                        <Link
                            target="_blank"
                            className="w-full"
                            href={
                                "https://wa.me//5519994828888?text=Ol%C3%A1%21%20Gostaria%20de%20agendar%20uma%20consulta%20para%20falar%20sobre%20os%20estudos%20do%20meu%20filho"
                            }
                        >
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-slate-50 w-full"
                            >
                                <Calendar className="mr-2 h-4 w-4" />
                                {dict.parents.footer.button}
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}

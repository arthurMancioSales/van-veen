import Image from "next/image";
import woman from "public/images/home/woman.svg";
import studentGroup from "public/images/emerge/student_group.jpg";
import emerge from "public/images/home/emerge_horizontal.png";

import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/button/Button";
import Testimonial from "@/components/Testimonial";
import HomeAccordion from "@/components/HomeAccordion";
import InstagramPost from "@/components/InstagramPost";
import HomeCards from "@/components/sections/homeCards/HomeCards";
import {
    ArrowRight,
    Award,
    Calendar,
    CheckCircle,
    FileCheck2,
    Globe,
    PenSquare,
    Users,
} from "lucide-react";
import { availableLanguages } from "@/interfaces/languages";
import { getDictionary } from "@/app/[lang]/dictionaries";
import Link from "next/link";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card/Card";

export default async function Emerge({
    params,
}: {
    params: Promise<{ lang: `${availableLanguages}` }>;
}) {
    const lang = (await params).lang;
    const dict = await getDictionary(lang);

    return (
        <>
            <section className="relative bg-gradient-to-r from-muted/10 to-muted/5 py-20 md:py-32">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-muted/10 blur-3xl"></div>
                    <div className="absolute top-60 -left-40 h-80 w-80 rounded-full bg-muted/10 blur-3xl"></div>
                </div>
                <div className="container relative z-10 mx-auto px-4 text-center">
                    <div className="mx-auto max-w-3xl">
                        <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">
                            Instituto Van Veen e Emerge Education
                        </h1>
                        <p className="mb-10 text-xl text-muted-foreground md:text-2xl">
                            {dict.emerge.header}
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link target="_blank" href={"https://emergeedu.com"}>
                                <Button size="lg" className="gap-2">
                                    {dict.emerge.headerCallToAction}{" "}
                                    <ArrowRight className="h-4 w-4" />
                                </Button>
                            </Link>
                            <Link
                                href="https://wa.me//5519994828888?text=Ol%C3%A1%21%20Gostaria%20de%20conhecer%20mais%20sobre%20a%20Emerge%20Education"
                                target="_blank"
                            >
                                <Button size="lg" variant="outline">
                                    {dict.emerge.headerContact}{" "}
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto mt-16 px-4">
                    <div className="flex justify-center">
                        <div className="relative h-[300px] w-full max-w-4xl overflow-hidden rounded-xl shadow-xl">
                            <Image
                                src="/placeholder.svg?height=600&width=1200"
                                alt="Parceria Instituto Van Veen e Emerge Education"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="mb-16 text-center">
                        <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                            {dict.emerge.features.title}
                        </h2>
                        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                            {dict.emerge.features.paragraphs1}
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2">
                        <Card className="overflow-hidden border-none bg-gradient-to-br from-primary/10 to-primary/5 shadow-lg transition-all hover:shadow-xl">
                            <CardHeader className="pb-2">
                                <CardTitle className="flex items-center gap-2 text-2xl">
                                    <Award className="h-6 w-6 text-primary" />
                                    {dict.emerge.features.topics.first.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    {dict.emerge.features.topics.first.content}
                                </p>
                                <ul className="mt-4 space-y-2">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                                        <span>
                                            Acesso a instituições de ensino renomadas
                                            internacionalmente
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                                        <span>
                                            Programas customizados para o mercado
                                            brasileiro
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                                        <span>
                                            Metodologias inovadoras e práticas
                                        </span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="overflow-hidden border-none bg-gradient-to-br from-primary/10 to-primary/5 shadow-lg transition-all hover:shadow-xl">
                            <CardHeader className="pb-2">
                                <CardTitle className="flex items-center gap-2 text-2xl">
                                    <Users className="h-6 w-6 text-primary" />
                                    {dict.emerge.features.topics.second.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    {dict.emerge.features.topics.second.content}
                                </p>
                                <ul className="mt-4 space-y-2">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                                        <span>
                                            Valorização do currículo com
                                            certificações internacionais
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                                        <span>
                                            Desenvolvimento de habilidades
                                            valorizadas globalmente
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                                        <span>
                                            Networking com profissionais e
                                            instituições internacionais
                                        </span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            <section className="bg-muted/5 py-20">
                <div className="container mx-auto px-4">
                    <div className="mb-16 text-center">
                        <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                            {dict.emerge.sellingPoints.title}
                        </h2>
                        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                            {dict.emerge.sellingPoints.subtitle}
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-3">
                        <Card className="flex flex-col items-center text-center">
                            <CardHeader>
                                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                                    <Globe className="h-8 w-8 text-primary" />
                                </div>
                                <CardTitle>
                                    {dict.emerge.sellingPoints.first.title}
                                </CardTitle>
                                <CardDescription className="text-base">
                                    {dict.emerge.sellingPoints.first.reason}
                                </CardDescription>
                            </CardHeader>
                        </Card>

                        <Card className="flex flex-col items-center text-center">
                            <CardHeader>
                                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                                    <Users className="h-8 w-8 text-primary" />
                                </div>
                                <CardTitle>
                                    {dict.emerge.sellingPoints.second.title}
                                </CardTitle>
                                <CardDescription className="text-base">
                                    {dict.emerge.sellingPoints.second.reason}
                                </CardDescription>
                            </CardHeader>
                        </Card>

                        <Card className="flex flex-col items-center text-center">
                            <CardHeader>
                                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                                    <Award className="h-8 w-8 text-primary" />
                                </div>
                                <CardTitle>
                                    {dict.emerge.sellingPoints.third.title}
                                </CardTitle>
                                <CardDescription className="text-base">
                                    {dict.emerge.sellingPoints.third.reason}
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="mb-16 text-center">
                        <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                            {dict.emerge.experience.title}
                        </h2>
                        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                            {dict.emerge.experience.paragraph1}
                        </p>
                    </div>

                    <div className="mx-auto max-w-3xl">
                        <h3 className="mb-6 text-xl font-semibold md:text-2xl">
                            {dict.emerge.experience.list.title}
                        </h3>
                        <ul className="space-y-4">
                            {[
                                dict.emerge.experience.list.first,
                                dict.emerge.experience.list.second,
                                dict.emerge.experience.list.third,
                                dict.emerge.experience.list.fourth,
                                dict.emerge.experience.list.fifth,
                                dict.emerge.experience.list.sixth,
                                dict.emerge.experience.list.seventh,
                            ].map((item, index) => (
                                <li
                                    key={index}
                                    className="flex items-start gap-3 rounded-lg bg-primary/5 p-4"
                                >
                                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            <section className="bg-primary/10 py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                        {dict.emerge.callToAction.title}
                    </h2>
                    <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
                        {dict.emerge.callToAction.subtitle}
                    </p>
                    <Link
                        href="https://wa.me//5519994828888?text=Ol%C3%A1%21%20Gostaria%20de%20conhecer%20mais%20sobre%20a%20Emerge%20Education"
                        target="_blank"
                    >
                        <Button size="lg" className="gap-2">
                            {dict.emerge.callToAction.button}{" "}
                            <ArrowRight className="h-4 w-4" />
                        </Button>
                    </Link>
                </div>
            </section>
        </>
    );
}

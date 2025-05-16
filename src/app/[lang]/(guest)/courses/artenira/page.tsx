import { getDictionary } from "@/app/[lang]/dictionaries";
import { Button } from "@/components/ui/button/Button";
import { Card, CardContent } from "@/components/ui/card/Card";
import { availableLanguages } from "@/interfaces/languages";
import { ArrowRight, Award, BookOpen, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import artenira from "public/images/courses/artenira/artenira.gif";

export default async function page({
    params,
}: {
    params: Promise<{ lang: `${availableLanguages}` }>;
}) {
    const lang = (await params).lang;
    const dict = await getDictionary(lang);
    const content = dict.courses.artenira;

    return (
        <main>
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-10">
                    <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-accent to-transparent" />
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1">
                            <div className="inline-block px-4 py-1 bg-primary/60 text-accent rounded-full text-sm font-medium mb-4">
                                {content.hero.title}
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                                {content.hero.name}
                            </h1>
                            <p className="text-xl text-slate-700 mb-6">
                                {content.hero.description}
                            </p>
                            <div className="flex flex-wrap gap-3 mb-8">
                                <span className="px-3 py-1 bg-secondary/30 rounded-full text-sm">
                                    {content.hero.tags.first}
                                </span>
                                <span className="px-3 py-1 bg-secondary/30 rounded-full text-sm">
                                    {content.hero.tags.second}
                                </span>
                                <span className="px-3 py-1 bg-secondary/30 rounded-full text-sm">
                                    {content.hero.tags.third}
                                </span>
                                <span className="px-3 py-1 bg-secondary/30 rounded-full text-sm">
                                    {content.hero.tags.fourth}
                                </span>
                            </div>
                            <div className="flex flex-wrap gap-4">
                                {/* <Button className="bg-accent hover:bg-accent">
                                    Conhecer cursos
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button> */}
                                <Link
                                    target="_blank"
                                    href={
                                        "https://api.whatsapp.com/message/V6LSSUZINNNLE1?autoload=1&app_absent=0"
                                    }
                                >
                                    <Button variant="outline">
                                        {content.hero.button}
                                    </Button>
                                </Link>
                            </div>
                        </div>
                        <div className="order-1 md:order-2 flex justify-center">
                            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-white shadow-xl">
                                <Image
                                    src={artenira}
                                    alt="Dra. Artenira Silva"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[500px] max-h-[500px] border border-accent/5 rounded-full -z-10" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[600px] max-h-[600px] border border-accent/10 rounded-full -z-10" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Partnership Section */}
            <section className="py-16 bg-primary/20">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-6">
                            {content.partnership.title}
                        </h2>
                        <p className="text-lg text-slate-700 mb-8">
                            {content.partnership.description}
                        </p>
                        <div className="grid md:grid-cols-3 gap-6">
                            <Card className="bg-white border-none shadow-md">
                                <CardContent className="pt-6">
                                    <div className="w-12 h-12 bg-primary/40 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <BookOpen className="h-6 w-6 text-primary" />
                                    </div>
                                    <h3 className="text-lg font-semibold mb-2">
                                        {content.partnership.cards.first.title}
                                    </h3>
                                    <p className="text-slate-600">
                                        {content.partnership.cards.first.description}
                                    </p>
                                </CardContent>
                            </Card>
                            <Card className="bg-white border-none shadow-md">
                                <CardContent className="pt-6">
                                    <div className="w-12 h-12 bg-primary/40 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Award className="h-6 w-6 text-primary" />
                                    </div>
                                    <h3 className="text-lg font-semibold mb-2">
                                        {content.partnership.cards.second.title}
                                    </h3>
                                    <p className="text-slate-600">
                                        {
                                            content.partnership.cards.second
                                                .description
                                        }
                                    </p>
                                </CardContent>
                            </Card>
                            <Card className="bg-white border-none shadow-md">
                                <CardContent className="pt-6">
                                    <div className="w-12 h-12 bg-primary/40 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Globe className="h-6 w-6 text-primary" />
                                    </div>
                                    <h3 className="text-lg font-semibold mb-2">
                                        {content.partnership.cards.third.title}
                                    </h3>
                                    <p className="text-slate-600">
                                        {content.partnership.cards.third.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Biography Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold mb-8 text-center">
                            {content.biography.title}
                        </h2>

                        <div className="space-y-8">
                            <div className="relative pl-8 border-l-2 border-accent/70">
                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent"></div>
                                <h3 className="text-xl font-semibold mb-2">
                                    {content.biography.list.fifth.title}
                                </h3>
                                <p className="text-slate-600 mb-1">
                                    {content.biography.list.fifth.description}
                                </p>
                                <p className="text-sm text-slate-500">
                                    {content.biography.list.fifth.year}
                                </p>
                            </div>

                            <div className="relative pl-8 border-l-2 border-accent/70">
                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent"></div>
                                <h3 className="text-xl font-semibold mb-2">
                                    {content.biography.list.fourth.title}
                                </h3>
                                <p className="text-slate-600 mb-1">
                                    {content.biography.list.fourth.description}
                                </p>
                                <p className="text-sm text-slate-500">
                                    {content.biography.list.fourth.year}
                                </p>
                            </div>

                            <div className="relative pl-8 border-l-2 border-accent/70">
                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent"></div>
                                <h3 className="text-xl font-semibold mb-2">
                                    {content.biography.list.third.title}
                                </h3>
                                <p className="text-slate-600 mb-1">
                                    {content.biography.list.third.description}
                                </p>
                                <p className="text-sm text-slate-500">
                                    {content.biography.list.third.year}
                                </p>
                            </div>

                            <div className="relative pl-8 border-l-2 border-accent/70">
                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent"></div>
                                <h3 className="text-xl font-semibold mb-2">
                                    {content.biography.list.second.title}
                                </h3>
                                <p className="text-slate-600 mb-1">
                                    {content.biography.list.second.description}
                                </p>
                                <p className="text-sm text-slate-500">
                                    {content.biography.list.second.year}
                                </p>
                            </div>

                            <div className="relative pl-8">
                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent"></div>
                                <h3 className="text-xl font-semibold mb-2">
                                    {content.biography.list.first.title}
                                </h3>
                                <p className="text-slate-600 mb-1">
                                    {content.biography.list.first.description}
                                </p>
                                <p className="text-sm text-slate-500">
                                    {content.biography.list.first.year}
                                </p>
                            </div>
                        </div>

                        <div className="mt-12 bg-slate-50 p-6 rounded-lg border border-slate-200">
                            <h3 className="text-xl font-semibold mb-4">
                                {content.biography.topics.title}
                            </h3>
                            <ul className="space-y-3 text-slate-700">
                                <li className="flex items-start">
                                    <div className="mr-2 mt-1 text-accent">•</div>
                                    <p>{content.biography.topics.first}</p>
                                </li>
                                <li className="flex items-start">
                                    <div className="mr-2 mt-1 text-accent">•</div>
                                    <p>{content.biography.topics.second}</p>
                                </li>
                                <li className="flex items-start">
                                    <div className="mr-2 mt-1 text-accent">•</div>
                                    <p>{content.biography.topics.third}</p>
                                </li>
                                <li className="flex items-start">
                                    <div className="mr-2 mt-1 text-accent">•</div>
                                    <p>{content.biography.topics.fourth}</p>
                                </li>
                                <li className="flex items-start">
                                    <div className="mr-2 mt-1 text-accent">•</div>
                                    <p>{content.biography.topics.fifth}</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Areas of Expertise */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-12 text-center">
                        {content.experience.title}
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <Card className="bg-white border-none shadow-md hover:shadow-lg transition-shadow">
                            <CardContent className="p-6">
                                <h3 className="text-lg font-semibold mb-3 text-accent">
                                    {content.experience.cards.first.title}
                                </h3>
                                <p className="text-slate-600">
                                    {content.experience.cards.first.description}
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="bg-white border-none shadow-md hover:shadow-lg transition-shadow">
                            <CardContent className="p-6">
                                <h3 className="text-lg font-semibold mb-3 text-accent">
                                    {content.experience.cards.second.title}
                                </h3>
                                <p className="text-slate-600">
                                    {content.experience.cards.second.description}
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="bg-white border-none shadow-md hover:shadow-lg transition-shadow">
                            <CardContent className="p-6">
                                <h3 className="text-lg font-semibold mb-3 text-accent">
                                    {content.experience.cards.third.title}
                                </h3>
                                <p className="text-slate-600">
                                    {content.experience.cards.third.description}
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="bg-white border-none shadow-md hover:shadow-lg transition-shadow">
                            <CardContent className="p-6">
                                <h3 className="text-lg font-semibold mb-3 text-accent">
                                    {content.experience.cards.fourth.title}
                                </h3>
                                <p className="text-slate-600">
                                    {content.experience.cards.fourth.description}
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="bg-white border-none shadow-md hover:shadow-lg transition-shadow">
                            <CardContent className="p-6">
                                <h3 className="text-lg font-semibold mb-3 text-accent">
                                    {content.experience.cards.fifth.title}
                                </h3>
                                <p className="text-slate-600">
                                    {content.experience.cards.fifth.description}
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="bg-white border-none shadow-md hover:shadow-lg transition-shadow">
                            <CardContent className="p-6">
                                <h3 className="text-lg font-semibold mb-3 text-accent">
                                    {content.experience.cards.sixth.title}
                                </h3>
                                <p className="text-slate-600">
                                    {content.experience.cards.sixth.description}
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Publications Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-4">
                            {content.papers.title}
                        </h2>
                        <p className="text-lg text-slate-700 mb-10">
                            {content.papers.description}
                        </p>

                        <div className="flex justify-center">
                            <Link
                                href={
                                    "https://scholar.google.com/citations?user=HK751xYAAAAJ&hl=pt-BR"
                                }
                                target="_blank"
                            >
                                <Button className="bg-accent hover:bg-accent">
                                    {content.papers.button}
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-accent text-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-6">
                            {content.callToAction.title}
                        </h2>
                        <p className="text-xl mb-8 opacity-90">
                            {content.callToAction.description}
                        </p>
                        <Link
                            href={"https://www.instagram.com/artenirassilva/"}
                            target="_blank"
                        >
                            <Button className="bg-white text-accent hover:bg-slate-200 hover:text-accent text-lg px-8 py-6">
                                {content.callToAction.button}
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}

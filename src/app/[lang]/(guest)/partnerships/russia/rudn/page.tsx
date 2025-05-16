import {
    ArrowRight,
    BookOpen,
    Calendar,
    GraduationCap,
    Languages,
    MapPin,
    PiggyBank,
} from "lucide-react";
import { Button } from "@/components/ui/button/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card/Card";
import { availableLanguages } from "@/interfaces/languages";
import { getDictionary } from "@/app/[lang]/dictionaries";
import Link from "next/link";

export default async function RudnUniversity({
    params,
}: {
    params: Promise<{ lang: `${availableLanguages}` }>;
}) {
    const lang = (await params).lang;
    const dict = await getDictionary(lang);
    const content = dict.partnerships.russia.rudn;

    return (
        <main className="flex-1">
            <section className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-accent/100 to-accent/90 mix-blend-multiply" />
                <div className="relative mx-auto max-w-screen-xl px-4 py-24 sm:px-6 lg:flex lg:items-center lg:px-8">
                    <div className="max-w-xl text-center sm:text-left text-white">
                        <h1 className="text-3xl font-extrabold sm:text-5xl">
                            {content.hero.title}
                            <strong className="block font-extrabold text-primary">
                                {content.hero.subtitle}
                            </strong>
                        </h1>
                        <p className="mt-4 max-w-lg sm:text-xl/relaxed">
                            {content.hero.description}
                        </p>
                        <div className="mt-8 flex flex-wrap gap-4 text-center">
                            <Link
                                href={
                                    "https://wa.me//5519994828888?text=Ol%C3%A1%21%20Gostaria%20de%20agendar%20uma%20reuni%C3%A3o%20para%20falar%20sobre%20a%20parceria%20com%20a%20RUDN%20University%21"
                                }
                                target="_blank"
                            >
                                <Button
                                    size="lg"
                                    className="bg-primary text-accent hover:bg-primary/60"
                                >
                                    {content.hero.callToAction}
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white py-16">
                <div className="container">
                    <div className="mx-auto max-w-3xl text-center">
                        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                            {content.about.title}
                        </h2>
                        <p className="mt-4 text-gray-600">
                            {content.about.description}
                        </p>
                    </div>

                    <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <Card className="border-none shadow-lg transition-all hover:shadow-xl">
                            <CardHeader className="pb-2">
                                <CardTitle className="flex items-center gap-2 text-xl">
                                    <MapPin className="h-5 w-5 text-accent" />
                                    {content.about.advantages.first.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600">
                                    {content.about.advantages.first.description}
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="border-none shadow-lg transition-all hover:shadow-xl">
                            <CardHeader className="pb-2">
                                <CardTitle className="flex items-center gap-2 text-xl">
                                    <BookOpen className="h-5 w-5 text-accent" />
                                    {content.about.advantages.second.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600">
                                    {content.about.advantages.second.title}
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="border-none shadow-lg transition-all hover:shadow-xl">
                            <CardHeader className="pb-2">
                                <CardTitle className="flex items-center gap-2 text-xl">
                                    <Languages className="h-5 w-5 text-accent" />
                                    {content.about.advantages.third.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600">
                                    {content.about.advantages.third.title}
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            <section className="bg-gray-50 py-16">
                <div className="container">
                    <h2 className="text-center text-3xl font-bold text-gray-900 sm:text-4xl mb-16">
                        {content.benefits.title}
                    </h2>

                    <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                        <div className="relative rounded-lg bg-white p-8 shadow-lg">
                            <div className="absolute -top-6 left-6 rounded-full bg-accent p-3 text-white">
                                <PiggyBank className="h-6 w-6" />
                            </div>
                            <h3 className="mt-4 text-xl font-bold text-gray-900">
                                {content.benefits.list.first.title}
                            </h3>
                            <div className="mt-2 border-t border-gray-200 pt-4">
                                <p className="text-gray-600">
                                    {content.benefits.list.first.reason1}
                                </p>
                                <p className="mt-2 text-lg font-bold text-accent">
                                    {content.benefits.list.first.reason2}
                                </p>
                                <p className="mt-1 text-sm text-gray-500 italic">
                                    {content.benefits.list.first.reason3}
                                </p>
                            </div>
                        </div>

                        <div className="relative rounded-lg bg-white p-8 shadow-lg">
                            <div className="absolute -top-6 left-6 rounded-full bg-accent p-3 text-white">
                                <Languages className="h-6 w-6" />
                            </div>
                            <h3 className="mt-4 text-xl font-bold text-gray-900">
                                {content.benefits.list.second.title}
                            </h3>
                            <div className="mt-2 border-t border-gray-200 pt-4">
                                <p className="text-gray-600">
                                    {content.benefits.list.second.description}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
                        <Card className="border-none shadow-lg transition-all hover:shadow-xl">
                            <CardHeader className="pb-2">
                                <CardTitle className="flex items-center gap-2 text-xl">
                                    <Calendar className="h-5 w-5 text-accent" />
                                    {content.benefits.list.third.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600">
                                    {content.benefits.list.third.description}
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="border-none shadow-lg transition-all hover:shadow-xl">
                            <CardHeader className="pb-2">
                                <CardTitle className="flex items-center gap-2 text-xl">
                                    <GraduationCap className="h-5 w-5 text-accent" />
                                    {content.benefits.list.fourth.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600">
                                    {content.benefits.list.fourth.description}
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="border-none shadow-lg transition-all hover:shadow-xl">
                            <CardHeader className="pb-2">
                                <CardTitle className="flex items-center gap-2 text-xl">
                                    <BookOpen className="h-5 w-5 text-accent" />
                                    {content.benefits.list.fifth.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600">
                                    {content.benefits.list.fifth.description}
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* <section className="bg-accent py-16 text-white">
                <div className="container">
                    <div className="mx-auto max-w-3xl text-center">
                        <h2 className="text-3xl font-bold sm:text-4xl">
                            Transforme seu Futuro Acadêmico
                        </h2>
                        <p className="mt-4">
                            Estude em uma das melhores universidades da Rússia com o
                            suporte completo do Instituto Van Veen.
                        </p>
                        <div className="mt-8">
                            <Button
                                size="lg"
                                className="bg-white text-accent hover:bg-gray-100"
                            >
                                Inscreva-se Agora
                            </Button>
                        </div>
                    </div>
                </div>
            </section> */}

            <section className="bg-white py-16">
                <div className="container">
                    <div className="mx-auto max-w-3xl">
                        <h2 className="text-center text-3xl font-bold text-gray-900 sm:text-4xl mb-12">
                            {content.faq.title}
                        </h2>

                        <div className="space-y-6">
                            <div className="rounded-lg border border-gray-200 p-6">
                                <h3 className="text-lg font-bold text-gray-900">
                                    {content.faq.questions.first.question}
                                </h3>
                                <p className="mt-2 text-gray-600">
                                    {content.faq.questions.first.answer}
                                </p>
                            </div>

                            <div className="rounded-lg border border-gray-200 p-6">
                                <h3 className="text-lg font-bold text-gray-900">
                                    {content.faq.questions.second.question}
                                </h3>
                                <p className="mt-2 text-gray-600">
                                    {content.faq.questions.second.answer}
                                </p>
                            </div>

                            <div className="rounded-lg border border-gray-200 p-6">
                                <h3 className="text-lg font-bold text-gray-900">
                                    {content.faq.questions.third.question}
                                </h3>
                                <p className="mt-2 text-gray-600">
                                    {content.faq.questions.third.answer}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-gray-50 py-16">
                <div className="container">
                    <div className="mx-auto max-w-3xl text-center">
                        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                            {content.contact.title}
                        </h2>
                        <p className="mt-4 text-gray-600">
                            {content.contact.description}
                        </p>

                        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                            <Link
                                href={
                                    "https://wa.me//5519994828888?text=Ol%C3%A1%21%20Gostaria%20de%20agendar%20uma%20reuni%C3%A3o%20para%20falar%20sobre%20a%20parceria%20com%20a%20RUDN%20University%21"
                                }
                                target="_blank"
                            >
                                <Button size="lg" className="w-full sm:w-auto">
                                    {content.contact.button}
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

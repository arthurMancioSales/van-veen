import { Button } from "@/components/ui/button/Button";
import {
    BookOpen,
    Building,
    DollarSign,
    MapPin,
    PenTool,
    Users,
} from "lucide-react";
import Image from "next/image";
import westOfScotland from "public/images/partnerships/scotland/west-of-scotland/west-of-scotland.jpeg";
import dumfriesCampus from "public/images/partnerships/scotland/west-of-scotland/dumfries-campus.jpg";
import lanarkshireCampus from "public/images/partnerships/scotland/west-of-scotland/lanarkshire-campus.jpg";
import londonCampus from "public/images/partnerships/scotland/west-of-scotland/london-campus.webp";
import paisleyCampus from "public/images/partnerships/scotland/west-of-scotland/paisley-campus.jpg";
import ayrCampus from "public/images/partnerships/scotland/west-of-scotland/uws_ayr_campus.webp";
import student from "public/images/partnerships/scotland/west-of-scotland/student.jpg";
import vanVeenLogo from "public/images/vanVeenShield.svg";
import westOfScotlandLogo from "public/images/services/teachers/university west of scotland.png";
import Link from "next/link";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card/Card";
import { availableLanguages } from "@/interfaces/languages";
import { getDictionary } from "@/app/[lang]/dictionaries";

export default async function page({
    params,
}: {
    params: Promise<{ lang: `${availableLanguages}` }>;
}) {
    const lang = (await params).lang;
    const dict = await getDictionary(lang);

    const content = dict.partnerships.scotland.uws;

    return (
        <div>
            <section className="relative">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={westOfScotland}
                        alt="University of West of Scotland Campus"
                        fill
                        className="object-cover brightness-[0.45]"
                        priority
                    />
                </div>
                <div className="container relative z-10 flex flex-col items-center justify-center py-24 text-center text-white">
                    <div className="flex items-center gap-4 mb-6">
                        <Image
                            src={vanVeenLogo}
                            alt="Instituto Van Veen Logo"
                            width={80}
                            height={80}
                            className="rounded-full bg-white/60 p-2"
                        />
                        <div className="text-4xl font-bold">+</div>
                        <Image
                            src={westOfScotlandLogo}
                            alt="University of West of Scotland Logo"
                            width={80}
                            height={80}
                            className="rounded-full bg-white p-2"
                        />
                    </div>
                    <h1 className="mb-4 text-5xl font-bold tracking-tight">
                        {content.hero.title}
                    </h1>
                    <p className="mb-8 max-w-2xl text-xl">
                        {content.hero.description}
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link
                            target="_blank"
                            href={
                                "https://wa.me//5519994828888?text=Ol%C3%A1%21%20Gostaria%20de%20agendar%20uma%20reuni%C3%A3o%20para%20falar%20sobre%20a%20parceria%20com%20a%20University%20of%20West%20of%20Scotland%21"
                            }
                        >
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-white text-white  hover:bg-foreground/50"
                            >
                                {content.hero.callToAction}
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Sobre a Parceria */}
            <section
                id="sobre"
                className="py-20 bg-gradient-to-b from-white to-gray-50"
            >
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4 relative inline-block">
                            {content.about.title}
                            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-accent rounded-full"></span>
                        </h2>
                        <p className="text-lg text-accent max-w-2xl mx-auto">
                            {content.about.description}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-2xl font-bold mb-4 text-accent">
                                {content.about.card.title}
                            </h3>
                            <p className="text-accent mb-6">
                                {content.about.card.first}
                            </p>
                            <p className="text-accent mb-6">
                                {content.about.card.second}
                            </p>
                            <div className="flex items-center border-l-4 border-accent pl-4 py-2 bg-accent/10 rounded-r">
                                <p className="text-gray-700 italic">
                                    &quot; {content.about.card.quote}
                                    &quot;
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="rounded-lg overflow-hidden shadow-lg">
                                <Image
                                    src={student}
                                    alt="Estudantes em campus universitário"
                                    width={600}
                                    height={400}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <div className="absolute -bottom-8 -left-8 bg-white p-4 rounded-lg shadow-lg">
                                <p className="font-bold text-primary">
                                    {content.about.card.popover}
                                </p>
                                <p className="text-sm text-accent">
                                    {content.about.card.details}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vantagens */}
            <section id="vantagens" className="py-20 bg-gray-50">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4 relative inline-block">
                            {content.benefits.title}

                            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-accent rounded-full"></span>
                        </h2>
                        <p className="text-lg text-accent max-w-2xl mx-auto">
                            {content.benefits.description}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <Card className="border-none shadow-md hover:shadow-xl transition-shadow duration-300">
                            <CardHeader className="pb-4">
                                <div className="w-12 h-12 bg-primary/40 rounded-full flex items-center justify-center mb-4">
                                    <BookOpen className="h-6 w-6 text-primary" />
                                </div>
                                <CardTitle>
                                    {content.benefits.cards.first.title}
                                </CardTitle>
                                <CardDescription>
                                    {content.benefits.cards.first.description}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-accent">
                                    <span className="text-2xl font-bold text-accent">
                                        {content.benefits.cards.first.content.first}
                                    </span>{" "}
                                    {content.benefits.cards.first.content.second}
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="border-none shadow-md hover:shadow-xl transition-shadow duration-300">
                            <CardHeader className="pb-4">
                                <div className="w-12 h-12 bg-primary/40 rounded-full flex items-center justify-center mb-4">
                                    <PenTool className="h-6 w-6 text-primary" />
                                </div>
                                <CardTitle>
                                    {content.benefits.cards.second.title}
                                </CardTitle>
                                <CardDescription>
                                    {content.benefits.cards.second.description}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-accent">
                                    {content.benefits.cards.second.content}
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="border-none shadow-md hover:shadow-xl transition-shadow duration-300">
                            <CardHeader className="pb-4">
                                <div className="w-12 h-12 bg-primary/40 rounded-full flex items-center justify-center mb-4">
                                    <DollarSign className="h-6 w-6 text-primary" />
                                </div>
                                <CardTitle>
                                    {content.benefits.cards.third.title}
                                </CardTitle>
                                <CardDescription>
                                    {content.benefits.cards.third.description}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-accent">
                                    {content.benefits.cards.third.content}
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="border-none shadow-md hover:shadow-xl transition-shadow duration-300">
                            <CardHeader className="pb-4">
                                <div className="w-12 h-12 bg-primary/40 rounded-full flex items-center justify-center mb-4">
                                    <MapPin className="h-6 w-6 text-primary" />
                                </div>
                                <CardTitle>
                                    {content.benefits.cards.fourth.title}
                                </CardTitle>
                                <CardDescription>
                                    {content.benefits.cards.fourth.description}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-accent">
                                    {content.benefits.cards.fourth.content}
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="border-none shadow-md hover:shadow-xl transition-shadow duration-300">
                            <CardHeader className="pb-4">
                                <div className="w-12 h-12 bg-primary/40 rounded-full flex items-center justify-center mb-4">
                                    <Users className="h-6 w-6 text-primary" />
                                </div>
                                <CardTitle>
                                    {content.benefits.cards.fifth.title}
                                </CardTitle>
                                <CardDescription>
                                    {content.benefits.cards.fifth.description}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-accent">
                                    {content.benefits.cards.fifth.content}
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="border-none shadow-md hover:shadow-xl transition-shadow duration-300">
                            <CardHeader className="pb-4">
                                <div className="w-12 h-12 bg-primary/40 rounded-full flex items-center justify-center mb-4">
                                    <Building className="h-6 w-6 text-primary" />
                                </div>
                                <CardTitle>
                                    {content.benefits.cards.sixth.title}
                                </CardTitle>
                                <CardDescription>
                                    {content.benefits.cards.sixth.description}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-accent">
                                    {content.benefits.cards.sixth.content}
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Campus */}
            <section id="campus" className="py-20 bg-white">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4 relative inline-block">
                            {content.campus.title}
                            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-accent rounded-full"></span>
                        </h2>
                        <p className="text-lg text-accent max-w-2xl mx-auto">
                            {content.campus.description}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="relative rounded-lg overflow-hidden shadow-lg group">
                            <Image
                                src={paisleyCampus}
                                alt="Campus Paisley"
                                width={600}
                                height={400}
                                className="object-cover w-full h-[300px] group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
                                <h3 className="font-bold text-xl mb-1">
                                    {content.campus.list.first.title}
                                </h3>
                                <p>{content.campus.list.first.description}</p>
                            </div>
                        </div>

                        <div className="relative rounded-lg overflow-hidden shadow-lg group">
                            <Image
                                src={ayrCampus}
                                alt="Campus Ayr"
                                width={600}
                                height={400}
                                className="object-cover w-full h-[300px] group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
                                <h3 className="font-bold text-xl mb-1">
                                    {content.campus.list.second.title}
                                </h3>
                                <p>{content.campus.list.second.description}</p>
                            </div>
                        </div>

                        <div className="relative rounded-lg overflow-hidden shadow-lg group">
                            <Image
                                src={lanarkshireCampus}
                                alt="Campus Lanarkshire"
                                width={600}
                                height={400}
                                className="object-cover w-full h-[300px] group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
                                <h3 className="font-bold text-xl mb-1">
                                    {content.campus.list.third.title}
                                </h3>
                                <p>{content.campus.list.third.description}</p>
                            </div>
                        </div>

                        <div className="relative rounded-lg overflow-hidden shadow-lg group">
                            <Image
                                src={londonCampus}
                                alt="Campus Londres"
                                width={600}
                                height={400}
                                className="object-cover w-full h-[300px] group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
                                <h3 className="font-bold text-xl mb-1">
                                    {content.campus.list.fourth.title}
                                </h3>
                                <p>{content.campus.list.fourth.description}</p>
                            </div>
                        </div>

                        <div className="relative rounded-lg overflow-hidden shadow-lg group">
                            <Image
                                src={dumfriesCampus}
                                alt="dumfries Londres"
                                width={600}
                                height={400}
                                className="object-cover w-full h-[300px] group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
                                <h3 className="font-bold text-xl mb-1">
                                    {content.campus.list.fifth.title}
                                </h3>
                                <p>{content.campus.list.fifth.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            {/* <section className="py-16">
                <div className="container">
                    <h2 className="mb-12 text-center text-3xl font-bold tracking-tight">
                        Depoimentos de Alunos
                    </h2>
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <div className="rounded-lg border bg-white p-6 shadow-sm">
                            <div className="mb-4 flex items-center gap-4">
                                <Image
                                    src="/placeholder.svg?height=60&width=60"
                                    alt="Foto do Aluno"
                                    width={60}
                                    height={60}
                                    className="rounded-full"
                                />
                                <div>
                                    <h3 className="font-bold">Ana Silva</h3>
                                    <p className="text-sm text-gray-500">
                                        Engenharia de Software
                                    </p>
                                </div>
                            </div>
                            <p className="italic text-accent">
                                "O Instituto Van Veen foi fundamental na minha
                                jornada para a UWS. O desconto na mensalidade e o
                                suporte durante todo o processo fizeram toda a
                                diferença."
                            </p>
                        </div>
                        <div className="rounded-lg border bg-white p-6 shadow-sm">
                            <div className="mb-4 flex items-center gap-4">
                                <Image
                                    src="/placeholder.svg?height=60&width=60"
                                    alt="Foto do Aluno"
                                    width={60}
                                    height={60}
                                    className="rounded-full"
                                />
                                <div>
                                    <h3 className="font-bold">Pedro Oliveira</h3>
                                    <p className="text-sm text-gray-500">
                                        Administração Internacional
                                    </p>
                                </div>
                            </div>
                            <p className="italic text-accent">
                                "A abordagem prática da UWS me preparou perfeitamente
                                para o mercado. Consegui um estágio ainda durante o
                                curso e hoje trabalho em uma multinacional em
                                Londres."
                            </p>
                        </div>
                        <div className="rounded-lg border bg-white p-6 shadow-sm">
                            <div className="mb-4 flex items-center gap-4">
                                <Image
                                    src="/placeholder.svg?height=60&width=60"
                                    alt="Foto do Aluno"
                                    width={60}
                                    height={60}
                                    className="rounded-full"
                                />
                                <div>
                                    <h3 className="font-bold">Juliana Costa</h3>
                                    <p className="text-sm text-gray-500">
                                        Ciência de Dados
                                    </p>
                                </div>
                            </div>
                            <p className="italic text-accent">
                                "O ambiente internacional da UWS ampliou minha visão
                                de mundo. Fiz amigos de diversos países e participei
                                de projetos de pesquisa inovadores que abriram portas
                                para minha carreira."
                            </p>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-accent/90 to-accent/95 py-16 text-white">
                <div className="container text-center">
                    <h2 className="mb-4 text-3xl font-bold tracking-tight">
                        {content.callToAction.title}
                    </h2>
                    <p className="mx-auto mb-8 max-w-2xl text-lg">
                        {content.callToAction.description}
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            target="_blank"
                            href={
                                "https://wa.me//5519994828888?text=Ol%C3%A1%21%20Gostaria%20de%20agendar%20uma%20reuni%C3%A3o%20para%20falar%20sobre%20a%20parceria%20com%20a%20University%20of%20West%20of%20Scotland%21"
                            }
                        >
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-white text-white  hover:bg-white/20"
                            >
                                {content.callToAction.button}
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

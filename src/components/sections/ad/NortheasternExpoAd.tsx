import { Calendar, GraduationCap, MapPin, Users } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function NortheasternExpoAd() {
    return (
        <section className="py-16 px-4 relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-orange-50">
            {/* Decorative elements */}
            <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-purple-500/10 blur-3xl"></div>
            <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-orange-500/10 blur-3xl"></div>

            <div className="max-w-7xl mx-auto">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <div className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-purple-100 to-orange-100 text-purple-700 font-semibold text-sm mb-6">
                        Programa Exclusivo
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        <span className="bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
                            Formação de Líderes Globais
                        </span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        Uma jornada de formação inédita que integra a expertise em
                        admissões internacionais com o desenvolvimento das soft
                        skills que as universidades de elite e o mercado global
                        realmente exigem.
                    </p>
                </div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Left Column - Benefits */}
                    <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                        <h2 className="text-2xl font-bold mb-8 text-gray-900">
                            Neste programa de 6 meses, seu filho(a) irá:
                        </h2>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center mt-1">
                                    <svg
                                        className="w-4 h-4 text-purple-600"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">
                                        Desenvolver Autoconhecimento Profundo
                                    </h3>
                                    <p className="text-gray-600 text-sm">
                                        Através da filosofia e organização pessoal,
                                        construindo uma bússola interna sólida e
                                        honestidade intelectual.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center mt-1">
                                    <svg
                                        className="w-4 h-4 text-purple-600"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">
                                        Construir uma Narrativa Pessoal Poderosa
                                    </h3>
                                    <p className="text-gray-600 text-sm">
                                        Dominando a arte do storytelling para criar
                                        cartas de motivação e essays que impressionam
                                        comitês de admissão.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center mt-1">
                                    <svg
                                        className="w-4 h-4 text-purple-600"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">
                                        Aprimorar Inteligência Emocional
                                    </h3>
                                    <p className="text-gray-600 text-sm">
                                        Desenvolvendo comunicação autêntica e
                                        vulnerável que demonstra maturidade emocional
                                        e profundidade.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center mt-1">
                                    <svg
                                        className="w-4 h-4 text-purple-600"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">
                                        Dominar o Pensamento Crítico
                                    </h3>
                                    <p className="text-gray-600 text-sm">
                                        Aprendendo a analisar variáveis complexas e
                                        tomar decisões estratégicas usando
                                        metodologias ágeis.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center mt-1">
                                    <svg
                                        className="w-4 h-4 text-purple-600"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">
                                        Exercitar Liderança Sob Pressão
                                    </h3>
                                    <p className="text-gray-600 text-sm">
                                        Através de simulações e role-playing,
                                        desenvolvendo comunicação interpessoal e
                                        capacidade de liderar.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center mt-1">
                                    <svg
                                        className="w-4 h-4 text-purple-600"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">
                                        Criar Projetos de Impacto Real
                                    </h3>
                                    <p className="text-gray-600 text-sm">
                                        Desenvolvendo resiliência e consciência
                                        social através de trabalhos voluntários e
                                        atividades que geram mudança.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Event Details */}
                    <div className="space-y-8">
                        <div className="bg-gradient-to-br from-purple-600 to-orange-500 rounded-2xl shadow-xl overflow-hidden">
                            <div className="p-8 text-white">
                                <h3 className="text-2xl font-bold mb-6">
                                    Detalhes do Programa
                                </h3>

                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <Calendar className="h-5 w-5" />
                                        <span>Início: 20 de Setembro de 2025</span>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <MapPin className="h-5 w-5" />
                                        <span>Hotel Ibis Styles Taubaté</span>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <Users className="h-5 w-5" />
                                        <span>Jovens de 14 a 17 anos</span>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <GraduationCap className="h-5 w-5" />
                                        <span>6 meses de formação intensiva</span>
                                    </div>
                                </div>

                                <div className="mt-8 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                                    <h4 className="font-semibold mb-2">
                                        🔥 Oferta Especial Pioneiro
                                    </h4>
                                    <p className="text-sm opacity-90 mb-2">
                                        Apenas 10 vagas disponíveis
                                    </p>
                                    <p className="text-2xl font-bold">R$ 8.800,00</p>
                                    <p className="text-sm opacity-90">
                                        ou 6x R$ 1.580,00
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                            <h4 className="text-lg font-semibold mb-4">
                                Criado e Guiado Por:
                            </h4>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <Avatar className=" h-10 w-10">
                                        <AvatarImage
                                            src="/images/home/nicolas.jpeg"
                                            alt="Nicolas Van Veen"
                                        />
                                        <AvatarFallback className="rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-semibold text-sm">
                                            NV
                                        </AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="font-medium">
                                            Nicolas Van Veen
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            Fundador, Instituto Van Veen
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <Avatar className="h-10 w-10">
                                        <AvatarImage
                                            src="/images/home/lilian-macri.jpeg"
                                            alt="Lilian Macri"
                                        />
                                        <AvatarFallback className=" bg-orange-100 flex items-center justify-center text-orange-600 font-semibold text-sm">
                                            LM
                                        </AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="font-medium">Lilian Macri</p>
                                        <p className="text-sm text-gray-600">
                                            Fundadora, Be Kind
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <Avatar className="h-10 w-10">
                                        <AvatarImage
                                            src="/images/home/lilian-monaco.jpeg"
                                            alt="Lilian Paula Mônaco"
                                            className="object-cover"
                                        />
                                        <AvatarFallback className=" bg-purple-100 flex items-center justify-center text-purple-600 font-semibold text-sm">
                                            LP
                                        </AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="font-medium">
                                            Lilian Paula Mônaco
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            Fundadora, Be Kind
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="mt-16 flex flex-col items-center text-center gap-4">
                    <Link
                        href={"https://workshop.vanveen.com.br"}
                        target="_blank"
                        className="px-12 py-6 w-fit text-xl bg-gradient-to-r from-purple-600 to-orange-500 hover:from-purple-700 hover:to-orange-600 text-white font-bold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
                    >
                        Garanta Sua Vaga Agora
                    </Link>
                    <p className="mt-4 text-gray-500">
                        Vagas limitadas para turmas fechadas. Inscrições abertas.
                    </p>
                </div>
            </div>
        </section>
    );
}

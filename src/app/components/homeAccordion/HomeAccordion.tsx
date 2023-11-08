"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion/Accordion";

export default function HomeAccordion() {
    return (
        <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
                <AccordionTrigger className="text-left">
                    Quais são os requisitos para participar do Instituto Van Veen?
                </AccordionTrigger>
                <AccordionContent>
                    <p className="indent-6">
                        Nossa única limitação é a quantidade de vagas. Fora isso, não
                        existem requesitos! Estamos abertos para todos os estudantes
                        sonham em realizar o ensino superior no exterior,
                        independentemente de sua área de estudo ou nível de
                        experiência.
                    </p>
                    <p className="indent-6">
                        Se você deseja fazer parte do Instituto, mas não existem
                        vagas no momento, não se preocupe. Entre em contato, e nós o
                        avisaremos quando surgirem novas vagas!
                    </p>
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
                <AccordionTrigger className="text-left">
                    Qual é a duração do preparatório?
                </AccordionTrigger>
                <AccordionContent>
                    <p className="indent-6">
                        A duração do preparatório varia de acordo com o programa
                        escolhido. Oferecemos opções de cursos de curta e longa
                        duração, permitindo que você escolha o que melhor se encaixa
                        em sua disponibilidade e necessidades acadêmicas.
                    </p>
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
                <AccordionTrigger className="text-left">
                    Vocês oferecem suporte na escolha da universidade?
                </AccordionTrigger>
                <AccordionContent>
                    <p className="indent-6">
                        Sim! Nossos especialistas em educação internacional estão
                        prontos para fornecer orientação personalizada na escolha da
                        universidade ideal para você. Levamos em consideração seus
                        interesses acadêmicos, perfil e objetivos de carreira,
                        ajudando a identificar as melhores opções que se alinham às
                        suas aspirações.
                    </p>
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
                <AccordionTrigger className="text-left">
                    E se eu precisar de suporte adicional durante o processo de
                    candidatura?
                </AccordionTrigger>
                <AccordionContent>
                    <p className="indent-6">
                        Estamos aqui para ajudar em todas as etapas do processo de
                        candidatura. Além do preparatório, oferecemos suporte
                        individualizado para revisão de currículos, redação de
                        ensaios, preparação para entrevistas e orientações sobre os
                        procedimentos de inscrição, garantindo que você esteja bem
                        preparado(a) e confiante durante todo o processo.
                    </p>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
}

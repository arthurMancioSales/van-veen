"use client";

import { ChevronDownIcon } from "@heroicons/react/24/solid";
import * as accordion from "@radix-ui/react-accordion";

export default function HomeAccordion() {
    return (
        <accordion.Root type="multiple" className="accordion-root">
            <accordion.Item value="teste 1" className="accordion-item">
                <accordion.Header className="accordion-header">
                    <accordion.Trigger className="accordion-trigger group">
                        <p className="accordion-title">
                            Quais são os requisitos para participar do Instituto Van Veen?
                        </p> 
                        <ChevronDownIcon className="h-6 ease-in-out transition-transform duration-300 group-data-[state=open]:rotate-180"></ChevronDownIcon>
                    </accordion.Trigger>
                </accordion.Header>
                
                <accordion.Content className="ease-linear data-[state=open]:animate-showFAQ data-[state=closed]:animate-hideFAQ overflow-hidden border-t-2 border-gray-150">
                    <div className="py-[15px] px-5 ">
                        <p>
                            Nossa única limitação é a quantidade de vagas. Fora isso, não existem requesitos! Estamos abertos para todos os estudantes sonham em realizar o ensino superior no exterior, independentemente de sua área de estudo ou nível de experiência. 
                        
                        </p>
                        <p className="pt-2">
                            Se você deseja fazer parte do Instituto, mas não existem vagas no momento, não se preocupe. Entre em contato, e nós o avisaremos quando surgirem novas vagas!
                        </p>
                    </div>
                </accordion.Content>
            </accordion.Item>
            <accordion.Item value="teste 2" className="accordion-item">
                <accordion.Header className="accordion-header">
                    <accordion.Trigger className="accordion-trigger group">
                        <p className="accordion-title">
                            Qual é a duração do preparatório?
                        </p>
                        <ChevronDownIcon className="h-6 ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"></ChevronDownIcon>
                    </accordion.Trigger>
                </accordion.Header>
                <accordion.Content className="ease-linear data-[state=open]:animate-showFAQ data-[state=closed]:animate-hideFAQ overflow-hidden border-t-2 border-gray-150">
                    <div className="py-[15px] px-5 ">
                        A duração do preparatório varia de acordo com o programa escolhido. Oferecemos opções de cursos de curta e longa duração, permitindo que você escolha o que melhor se encaixa em sua disponibilidade e necessidades acadêmicas.
                    </div>
                </accordion.Content>
            </accordion.Item>
            <accordion.Item value="teste 3" className="accordion-item">
                <accordion.Header className="accordion-header">
                    <accordion.Trigger className="accordion-trigger group">
                        <p className="accordion-title">
                            Como são ministradas as aulas?
                        </p>
                        <ChevronDownIcon className="h-6 ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"></ChevronDownIcon>
                    </accordion.Trigger>
                </accordion.Header>
                <accordion.Content className="ease-linear data-[state=open]:animate-showFAQ data-[state=closed]:animate-hideFAQ overflow-hidden border-t-2 border-gray-150">
                    <div className="py-[15px] px-5 ">
                        Nossas aulas são ministradas em formato online. Você terá acesso a videoaulas, materiais de estudo, atividades práticas e também a interação com nossos instrutores especializados e outros alunos.
                    </div>
                </accordion.Content>
            </accordion.Item>
            <accordion.Item value="teste 4" className="accordion-item">
                <accordion.Header>
                    <accordion.Trigger className="accordion-trigger group">
                        <p className="accordion-title">
                            Vocês oferecem suporte na escolha da universidade?
                        </p>
                        <ChevronDownIcon className="h-6 ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"></ChevronDownIcon>
                    </accordion.Trigger>
                </accordion.Header>
                <accordion.Content className="ease-linear data-[state=open]:animate-showFAQ data-[state=closed]:animate-hideFAQ overflow-hidden border-t-2 border-gray-150">
                    <div className="py-[15px] px-5 ">
                        Sim! Nossos especialistas em educação internacional estão prontos para fornecer orientação personalizada na escolha da universidade ideal para você. Levamos em consideração seus interesses acadêmicos, perfil e objetivos de carreira, ajudando a identificar as melhores opções que se alinham às suas aspirações.
                    </div>
                </accordion.Content>
            </accordion.Item>
            <accordion.Item value="teste 5" className="accordion-item">
                <accordion.Header className="accordion-header">
                    <accordion.Trigger className="accordion-trigger group">
                        <p className="accordion-title">
                            E se eu precisar de suporte adicional durante o processo de candidatura?
                        </p>
                        <ChevronDownIcon className="h-6 ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"></ChevronDownIcon>
                    </accordion.Trigger>
                </accordion.Header>
                <accordion.Content className="ease-linear data-[state=open]:animate-showFAQ data-[state=closed]:animate-hideFAQ overflow-hidden border-t-2 border-gray-150">
                    <div className="py-[15px] px-5 ">
                        Estamos aqui para ajudar em todas as etapas do processo de candidatura. Além do preparatório, oferecemos suporte individualizado para revisão de currículos, redação de ensaios, preparação para entrevistas e orientações sobre os procedimentos de inscrição, garantindo que você esteja bem preparado(a) e confiante durante todo o processo.
                    </div>
                </accordion.Content>
            </accordion.Item>
        </accordion.Root>
    );
}

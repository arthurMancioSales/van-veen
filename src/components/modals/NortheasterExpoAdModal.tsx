"use client";

import { useState, useEffect } from "react";
import { Calendar, MapPin, Users } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "../ui/dialog";
import { Button } from "../ui/button/Button";

export function EventModal() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent className="sm:max-w-[700px] p-0 max-h-[90vh] bg-white rounded-xl">
                <div className="p-6">
                    <DialogHeader>
                        <DialogTitle className="text-2xl font-bold text-gray-900 leading-tight">
                            Formação de Líderes Globais
                        </DialogTitle>
                        <DialogDescription className="text-lg pt-2 text-gray-600">
                            Não Apenas Entre na Melhor Universidade.{" "}
                            <span className="font-semibold text-purple-600">
                                Prepare-se para Liderar Nela.
                            </span>
                        </DialogDescription>
                    </DialogHeader>

                    <div className="mt-6 space-y-4">
                        <div className="bg-gradient-to-r from-purple-50 to-orange-50 p-4 rounded-lg border border-purple-100">
                            <p className="text-sm font-medium text-purple-800 mb-2">
                                🔥 OFERTA ESPECIAL PIONEIRO
                            </p>
                            <p className="text-lg font-bold text-purple-900">
                                Apenas 10 vagas disponíveis
                            </p>
                            <p className="text-sm text-purple-700">
                                Investimento especial:{" "}
                                <span className="font-bold">R$ 8.800,00</span> ou 6x
                                R$ 1.580,00
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                            <div className="flex items-center gap-2">
                                <Users className="h-4 w-4 text-purple-600" />
                                <span>Jovens 14-17 anos</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4 text-purple-600" />
                                <span>Início: 20/09/2025</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin className="h-4 w-4 text-purple-600" />
                                <span>Taubaté - SP</span>
                            </div>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-semibold mb-2">
                                Uma parceria estratégica:
                            </h4>
                            <p className="text-sm text-gray-600">
                                <span className="font-medium">
                                    Instituto Van Veen
                                </span>{" "}
                                + <span className="font-medium">Be Kind</span> =
                                Expertise em admissões internacionais +
                                Desenvolvimento de soft skills essenciais
                            </p>
                        </div>

                        <Button
                            className="w-full py-6 text-lg bg-gradient-to-r from-purple-600 to-orange-500 hover:from-purple-700 hover:to-orange-600 text-white font-semibold"
                            onClick={() =>
                                window.open(
                                    "https://workshop.vanveen.com.br",
                                    "_blank",
                                )
                            }
                        >
                            Garanta Sua Vaga Agora
                        </Button>

                        <p className="text-xs text-center text-gray-500">
                            Vagas limitadas para turmas fechadas. Inscrições abertas.
                        </p>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}

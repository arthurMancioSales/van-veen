"use client";

import Container from "@/components/ui/Container";
import { object, string } from "yup";
import "animate.css";
import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Button } from "@/components/ui/button/Button";
import { ContactForm } from "@/components/forms/ContactForm";

interface IResponseSatatus {
    header: string;
    body: string;
}

export default function ContactUs() {
    const [response, setResponse] = useState(false);
    const [error, setError] = useState(false);
    const [captcha, setCaptcha] = useState<string | null | undefined>("");
    const [status, setStatus] = useState<IResponseSatatus | null>();

    const contactSchema = object({
        fullName: string()
            .max(40, "Deve ser 40 caractéres ou menos")
            .required("Obrigatório"),
        email: string().email("Email inválido").required("Obrigatório"),
        phone: string().min(11, "Telefone inválido").required("Obrigatório"),
        message: string().required("Obrigatório"),
    });

    const recaptchaRef = useRef<ReCAPTCHA | null>(null);

    function handleCaptcha() {
        setCaptcha(recaptchaRef.current?.getValue());
    }

    function resetCaptcha() {
        setCaptcha("");
    }

    return (
        <main className={"flex flex-col items-center justify-start"}>
            <section className="section">
                <Container className="flex flex-col items-start">
                    <h2 className="mt-12 text-4xl font-bold text-left text-blue-900">
                        Entre em contato
                    </h2>
                    <p className="pt-4 section-subtitle indent-6">
                        Estamos ansiosos para ouvir de você! Utilize esta seção para
                        entrar em contato conosco e obter mais informações sobre
                        nossos programas, esclarecer dúvidas ou agendar uma consulta
                        personalizada. Estamos prontos para ajudá-lo(a) a dar o
                        próximo passo em direção à sua educação internacional.
                    </p>
                </Container>
                <Container className="flex flex-col items-start">
                    <ContactForm></ContactForm>
                </Container>
            </section>
        </main>
    );
}

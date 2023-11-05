"use client";

import { FormField } from "../ui/formField/FormField";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { object, string } from "yup";
import "animate.css";
import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Button } from "@/components/ui/button/Button";

export function ContactForm() {
    const [response, setResponse] = useState(false);
    const [error, setError] = useState(false);
    const [captcha, setCaptcha] = useState<string | null | undefined>("");

    const initialValues = {
        fullName: "",
        email: "",
        phone: "",
        message: "",
        captcha: "",
    };

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
        <Formik
            initialValues={initialValues}
            validationSchema={contactSchema}
            onSubmit={async (values, { setSubmitting }) => {
                const request = await fetch("/api/mail", {
                    body: JSON.stringify({
                        name: values.fullName,
                        email: values.email,
                        phone: values.phone,
                        message: values.message,
                        captcha,
                    }),
                    headers: {
                        "Content-Type": "application/json",
                    },
                    method: "POST",
                });

                const result = await request.json();

                // if (!request.ok) {
                //     console.log(result.error);
                //     setStatus({
                //         header: "Erro",
                //         body: result.error
                //             ? result.error.message
                //             : "Não foi possível enviar a mensagem. Por favor, tente novamente.",
                //     });
                //     setError(true);
                // } else {
                //     setStatus({
                //         header: "Mensagem enviada!",
                //         body: "Sua mensagem foi enviada com sucesso!",
                //     });
                //     setError(false);
                // }

                setResponse(true);

                setSubmitting(false);
            }}
        >
            {({ values, errors, touched, isSubmitting, setFieldValue }) => (
                <Form className="w-full max-w-xl lg:max-w-none">
                    <div className="grid w-full grid-cols-1 gap-x-8 gap-y-6 lg:grid-cols-2 lg:grid-rows-4">
                        <div className="lg:col-start-1">
                            <label
                                htmlFor="fullName"
                                className="block text-sm font-semibold leading-6 text-gray-900"
                            >
                                Nome completo
                            </label>
                            <div className="w-full">
                                <FormField
                                    name="fullName"
                                    type="text"
                                    placeholder="Full Name"
                                    touched={touched.fullName}
                                    error={errors.email}
                                ></FormField>
                            </div>
                        </div>

                        <div className="lg:col-start-1">
                            <label
                                htmlFor="email"
                                className="block text-sm font-semibold leading-6 text-gray-900"
                            >
                                Email
                            </label>
                            <div className="w-full">
                                <FormField
                                    name="email"
                                    type="email"
                                    placeholder="email@exemple.com"
                                    touched={touched.email}
                                    error={errors.email}
                                ></FormField>
                            </div>
                        </div>

                        <div className="lg:col-start-1">
                            <label
                                htmlFor="phone"
                                className="block text-sm font-semibold leading-6 text-gray-900"
                            >
                                Telefone
                            </label>
                            <div className="w-full">
                                <FormField
                                    name="phone"
                                    type="tel"
                                    placeholder="+XX XX XXXXXXXXX"
                                    touched={touched.phone}
                                    error={errors.phone}
                                ></FormField>
                            </div>
                        </div>

                        <div className="lg:row-start-1 lg:col-start-2 lg:row-span-3 lg:flex lg:flex-col">
                            <label
                                htmlFor="message"
                                className="block text-sm font-semibold leading-6 text-gray-900 "
                            >
                                Mensagem
                            </label>
                            <div className="w-full h-full row-span-4">
                                <FormField
                                    name="message"
                                    textarea
                                    touched={touched.message}
                                    error={errors.message}
                                    className="h-full"
                                ></FormField>
                            </div>
                        </div>
                        <div className="flex lg:flex-row flex-col gap-8 items-center justify-around w-fit mx-auto lg:w-full lg:col-span-2">
                            <ReCAPTCHA
                                sitekey="6LdKXAQnAAAAACPuXut3CuC3zV2ZB2V6aoDhDdeG"
                                ref={recaptchaRef}
                                onChange={handleCaptcha}
                                onExpired={resetCaptcha}
                                className="lg:justify-self-center"
                            />
                            <div className="w-full lg:w-fit">
                                <Button type="submit" className="w-full">
                                    Enviar
                                </Button>
                            </div>
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    );
}

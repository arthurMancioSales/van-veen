"use client";

import { FormField } from "../ui/formField/FormField";
import { Form, Formik } from "formik";
import { object, string } from "yup";
import "animate.css";
import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Button } from "@/components/ui/button/Button";
import generalRequest from "@/lib/generalRequest";
import { useToast } from "@/components/ui/toast/use-toast";
import { cn } from "@/lib/utils";
import { Response } from "@/interfaces/Response";

export function ContactForm() {
    const [captcha, setCaptcha] = useState<string | null | undefined>("");
    const [captchaError, setCaptchaError] = useState(false);
    const { toast } = useToast();

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
        phone: string()
            .matches(
                /(?:([+]\d{1,4})[-.\s]?)?(?:[(](\d{1,3})[)][-.\s]?)?(\d{1,4})[-.\s]?(\d{1,4})[-.\s]?(\d{1,9})/g,
                "Telefone inválido",
            )
            .required("Obrigatório"),
        message: string().required("Obrigatório"),
    });

    const recaptchaRef = useRef<ReCAPTCHA | null>(null);

    function handleCaptcha() {
        setCaptcha(recaptchaRef.current?.getValue());
        setCaptchaError(false);
    }

    function resetCaptcha() {
        setCaptcha("");
        setCaptchaError(true);
    }
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={contactSchema}
            onSubmit={async (values, { setSubmitting }) => {
                if (!captcha || captcha?.length <= 0) {
                    setCaptchaError(true);
                    return;
                }

                const requestBody = {
                    name: values.fullName,
                    email: values.email,
                    phone: values.phone,
                    message: values.message,
                    captcha,
                };

                const request: Response<null> = await generalRequest(
                    "/api/mail",
                    "post",
                    JSON.stringify(requestBody),
                );

                if (request.error) {
                    return toast({
                        title: "Erro",
                        description: request.payload.message,
                        variant: "destructive",
                    });
                }

                setSubmitting(false);

                return toast({
                    title: "Sucesso",
                    description: request.payload.message,
                });
            }}
        >
            {({ errors, touched, isSubmitting }) => (
                <Form className="w-full max-w-xl lg:max-w-none flex flex-col lg:gap-2 gap-8">
                    <div className="grid w-full grid-cols-1 gap-x-8 gap-y-0 lg:grid-cols-2 lg:grid-rows-3">
                        <div className="lg:col-start-1">
                            <label
                                htmlFor="fullName"
                                className="block text-sm font-semibold leading-6 text-foreground after:content-['*'] after:text-destructive"
                            >
                                Nome completo
                            </label>
                            <div className="w-full">
                                <FormField
                                    name="fullName"
                                    type="text"
                                    placeholder="Full Name"
                                    touched={touched.fullName}
                                    error={errors.fullName}
                                ></FormField>
                            </div>
                        </div>

                        <div className="lg:col-start-1">
                            <label
                                htmlFor="email"
                                className="block text-sm font-semibold leading-6 text-foreground after:content-['*'] after:text-destructive"
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
                                className="block text-sm font-semibold leading-6 text-foreground after:content-['*'] after:text-destructive"
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
                                className="block text-sm font-semibold leading-6 text-foreground  after:content-['*'] after:text-destructive"
                            >
                                Mensagem
                            </label>
                            <div className="w-full h-full ">
                                <FormField
                                    name="message"
                                    textarea
                                    touched={touched.message}
                                    error={errors.message}
                                    className="h-full"
                                ></FormField>
                            </div>
                        </div>
                    </div>
                    <div className="flex lg:flex-row flex-col gap-8 items-center justify-around w-fit mx-auto lg:w-full lg:col-span-2 min-h-[1.5rem]">
                        <div>
                            <ReCAPTCHA
                                sitekey="6LdKXAQnAAAAACPuXut3CuC3zV2ZB2V6aoDhDdeG"
                                ref={recaptchaRef}
                                onChange={handleCaptcha}
                                onExpired={resetCaptcha}
                                className="lg:justify-self-center"
                            />
                            <div className="min-h-[1.5rem]">
                                {captchaError && (
                                    <span className="text-destructive">
                                        Obrigatório
                                    </span>
                                )}
                            </div>
                        </div>
                        <div className="w-fit pb-6">
                            <Button
                                type="submit"
                                className={cn("w-40", isSubmitting && "cursor-wait")}
                                loading={isSubmitting}
                                disabled={
                                    isSubmitting ||
                                    Object.keys(errors).length > 0 ||
                                    captchaError
                                }
                            >
                                Enviar
                            </Button>
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    );
}

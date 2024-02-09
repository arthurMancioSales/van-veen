"use client";

import { Form, Formik } from "formik";
import * as Yup from "yup";
import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Button } from "@/components/ui/button/Button";
import generalRequest from "@/lib/generalRequest";
import { useToast } from "@/components/ui/toast/use-toast";
import { cn } from "@/lib/utils";
import { Response } from "@/interfaces/Response";
import { InputError, InputField, InputRoot } from "@/components/ui/Input/Input";

export function SignInForm() {
    const { toast } = useToast();

    const initialValues = {
        email: "",
        password: "",
    };

    const contactSchema = Yup.object({
        fullName: Yup.string()
            .max(40, "Deve ser 40 caractéres ou menos")
            .required("Obrigatório"),
        email: Yup.string().email("Email inválido").required("Obrigatório"),
        emailConfirmation: Yup.string().oneOf(
            [Yup.ref("email")],
            "E-mails devem ser iguais",
        ),
        password: Yup.string().required("Obrigatório"),
        passwordConfrimation: Yup.string().oneOf(
            [Yup.ref("password")],
            "Senhas devem ser iguais",
        ),
    });

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={contactSchema}
            onSubmit={async (values, { setSubmitting }) => {
                const requestBody = {
                    email: values.email,
                    password: values.password,
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
                    <div className="flex flex-col">
                        <div className="lg:col-start-1">
                            <div className="w-full">
                                <InputRoot>
                                    <InputField
                                        name="email"
                                        id="email"
                                        type="email"
                                        label={"Email"}
                                    ></InputField>
                                    <InputError
                                        touched={touched.email}
                                        error={errors.email}
                                    ></InputError>
                                </InputRoot>
                            </div>
                        </div>

                        <div className="lg:col-start-1">
                            <label
                                htmlFor="emailConfirmation"
                                className="block text-sm font-semibold leading-6 text-foreground after:content-['*'] after:text-destructive"
                            >
                                Telefone
                            </label>
                            <div className="w-full">
                                <InputRoot>
                                    <InputField
                                        name="emailConfirmation"
                                        type="tel"
                                        placeholder="+XX XX XXXXXXXXX"
                                    ></InputField>
                                    <InputError
                                        touched={touched.emailConfirmation}
                                        error={errors.emailConfirmation}
                                    ></InputError>
                                </InputRoot>
                            </div>
                        </div>
                    </div>
                    <div className="flex lg:flex-row flex-col gap-8 items-center justify-around w-fit mx-auto lg:w-full lg:col-span-2 min-h-[1.5rem]">
                        <div className="w-fit pb-6">
                            <Button
                                type="submit"
                                className={cn("w-40", isSubmitting && "cursor-wait")}
                                loading={isSubmitting}
                                disabled={
                                    isSubmitting || Object.keys(errors).length > 0
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

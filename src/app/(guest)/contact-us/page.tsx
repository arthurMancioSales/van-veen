"use client";

import Container from "@/components/ui/Container";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { object, string,  } from "yup";
import "animate.css";
import * as Toast from "@radix-ui/react-toast";
import { useState } from "react";

interface IResponseSatatus {
    header: string,
    body: string
}

export default function ContactUs() {
    const [response, setResponse] = useState(false);
    const [status, setStatus] = useState <IResponseSatatus | null>();

    const contactSchema = object({
        fullName: string()
            .max(40, "Deve ser 40 caractéres ou menos")
            .required("Obrigatório"),
        email: string()
            .email("Email inválido")
            .required("Obrigatório"),
        phone: string()
            .min(14, "Telefone inválido")
            .required("Obrigatório"),
        message: string()
            .required("Obrigatório")
    });

    

    return (
        <main className={"flex flex-col items-center justify-start"}>
            <Toast.Provider swipeDirection="left" duration={6000}>
                <section className="section">
                    <Container direction="flex-col" items="items-start">
                        <h2 className="mt-24 text-4xl font-bold text-left text-blue-900">
                            Entre em contato
                        </h2>
                        <p className="pt-4 section-subtitle">
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Distinctio accusantium aliquid sint vitae
                            magnam officiis.
                        </p>
                    </Container>
                    <Container direction="flex-col" items="items-start">
                        <Formik 
                            initialValues={{
                                fullName: "",
                                email: "",
                                phone: "",
                                message: ""
                            }}
                            onSubmit={async (values, { setSubmitting } ) => {
                                const request = await fetch("/api/mail", {
                                    body: JSON.stringify({
                                        name: values.fullName,
                                        email: values.email,
                                        phone: values.phone,
                                        message: values.message
                                    }),
                                    headers: {
                                        "Content-Type": "application/json"
                                    },
                                    method: "POST"
                                });

                                if (!request.ok) {
                                    setStatus({
                                        header: "Erro",
                                        body: "Não foi possível enviar a mensagem. Por favor, tente novamente.",
                                    });
                                } else {
                                    setStatus({
                                        header: "Mensagem enviada!",
                                        body: "Sua mensagem foi enviada com sucesso!",
                                    });
                                }
                                
                                setResponse(true);
                                
                                setSubmitting(false);
                            }}
                            validationSchema={contactSchema}
                        >
                            <Form className="w-full max-w-xl mt-16 sm:mt-20">
                                <div className="grid w-full grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                                    <div>
                                        <label htmlFor="fullName" className="block text-sm font-semibold leading-6 text-gray-900">Nome completo</label>
                                        <div className="mt-2.5 w-full ">
                                            <Field name="fullName" type="text"  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"></Field>
                                            <ErrorMessage name="fullName">
                                                {msg => <p className="pt-2 text-red-600 animate__animated animate__headShake">{msg}</p>}
                                            </ErrorMessage>
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">Email</label>
                                        <div className="mt-2.5 w-full">
                                            <Field name="email" type="email" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"></Field>
                                            <ErrorMessage name="email" >
                                                {msg => <p className="pt-2 text-red-600 animate__animated animate__headShake">{msg}</p>}
                                            </ErrorMessage>
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-semibold leading-6 text-gray-900">Telefone</label>
                                        <div className="mt-2.5 w-full">
                                            <Field name="phone" type="tel" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"></Field>
                                            <ErrorMessage name="phone" >
                                                {msg => <p className="pt-2 text-red-600 animate__animated animate__headShake">{msg}</p>}
                                            </ErrorMessage>
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900 ">Mensagem</label>
                                        <div className="mt-2.5 w-full">
                                            <Field name="message" as="textarea" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"></Field>
                                            <ErrorMessage name="message" className="">
                                                {msg => <p className="pt-2 text-red-600 animate__animated animate__headShake">{msg}</p>}
                                            </ErrorMessage>
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        className="block w-1/2 mx-auto rounded-md bg-orange-400 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-orange-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400" 
                                    >
                                        Enviar
                                    </button>
                                </div>
                            </Form>
                        </Formik>
                    </Container>
                </section>

                <Toast.Root
                    className="bg-blue-200 rounded-md shadow-2xl p-[15px] grid [grid-template-areas:_'title_action'_'description_action'] grid-cols-[auto_max-content] gap-x-[15px] items-center animate__animated animate__slideInRight animate_faster"
                    open={response}
                    onOpenChange={setResponse}
                >
                    <Toast.Title className="[grid-area:_title] mb-[5px] font-medium text-slate12 text-[15px]">
                        {status?.header}
                    </Toast.Title>
                    <Toast.Description asChild>
                        <p>{status?.body}</p>
                    </Toast.Description>
                    <Toast.Action className="[grid-area:_action]" asChild altText="Goto schedule to undo">
                        <button className="inline-flex items-center justify-center rounded font-medium text-xs px-[10px] leading-[25px] h-[25px] bg-green2 text-green11 shadow-[inset_0_0_0_1px] shadow-green7 hover:shadow-[inset_0_0_0_1px] hover:shadow-green8 focus:shadow-[0_0_0_2px] focus:shadow-green8">
                            Ok
                        </button>
                    </Toast.Action>
                </Toast.Root>

                <Toast.Viewport className="[--viewport-padding:_25px] fixed bottom-0 right-0 flex flex-col p-[var(--viewport-padding)] gap-[10px] w-[390px] max-w-[100vw] m-0 list-none z-[2147483647] outline-none" />
            </Toast.Provider>
        </main>
    );
}

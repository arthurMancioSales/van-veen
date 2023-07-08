"use client";

import { useEffect, useState } from "react";
import LoadingTestimonial from "./LoadingTestimonial";
import Container from "./ui/Container";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import ITestimonial from "@/interfaces/ITestimonial";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

export default function Testimonial() {
    const [testimonials, setTestimonials] = useState<ITestimonial[] | null>();
    const [index, setIndex] = useState(0);
    
    try {
        useEffect(() => {
            async function getTestimonials() {
                const response = await fetch("api/testimonials", { next: { revalidate: 60 } });
                
                if (!response.ok) {
                    throw new Error("Não foi possível buscar os dados");
                }
                
                const responseBody = await response.json();
                
                const data: ITestimonial[] = responseBody.data;
                setTestimonials(data);
            }
    
            getTestimonials();
        }, []);
    } catch (error) {
        console.log(error);        
    }

    async function previousTestimonial() {
        await controls.start("entersLeft");
        
        if (index == 0 && testimonials) {
            
            setIndex(testimonials.length - 1);
        } else {
            setIndex((currentIndex) => {
                return currentIndex - 1;
            });
        }

        await controls.start("hideRight");


        await controls.start("center");
    }

    async function nextTestimonail() {
        await controls.start("entersRight");

        if (testimonials && index == testimonials?.length - 1) {
            setIndex(0);
        } else {
            setIndex((currentIndex) => {
                return currentIndex + 1;
            });
        }
        
        await controls.start("hideLeft");
        
        await controls.start("center");
    }

    const controls = useAnimation();

    const slide = {
        entersLeft: {
            x: "-100%",
            transition: {
                duration: 0.3,
                ease: [0.65, 0, 0.35, 1]
            }
        },
        hideRight: {
            x: "100%",
            transition: {
                duration: 0
            }
        },
        center: {
            x: "0",
            transition: {
                duration: 0.3,
                ease: [0.65, 0, 0.35, 1]
            }
        },
        entersRight: {
            x: "100%",
            transition: {
                duration: 0.3,
                ease: [0.65, 0, 0.35, 1]
            }
        },
        hideLeft: {
            x: "-100%",
            transition: {
                duration: 0
            }
        },
    };
    
    return (
        <>
            <motion.div
                animate={controls}
                variants={slide}
                id="testimonialWrapper"
            >
                <Container direction="flex-col" justify="start" height="h-full" position="relative" others="mt-20">
                    { testimonials ? (
                        <div className="relative flex flex-col items-center justify-center rounded-md bg-blue-950 lg:w-full lg:flex-row lg:py-12 lg:justify-between lg:left-28 lg:max-w-3xl">
                            <div className="absolute flex flex-col items-center justify-center h-40 overflow-hidden w-60 -top-16 lg:right-20 lg:h-72 lg:w-[440px] lg:top-12 lg:-left-64">
                                <Image src={testimonials[index].upload.link} alt="Student testimonial" fill className="absolute top-0 left-0 object-cover w-full h-full rounded-md"/>
                            </div>
                            <div 
                                className="relative pt-32 flex flex-row flex-wrap items-end content-end self-end justify-center w-full h-full rounded-md lg:w-[1100px] lg:self-center lg:pt-0 lg:pl-52 lg:min-h-[18rem] lg:items-start"
                            
                            >
                                <p className="px-5 pb-8 text-white">{testimonials[index].testimonial}</p>
                                <div className="flex flex-row items-center self-end justify-between w-full px-5 pb-5 lg:self-end lg:justify-center">
                                    <ChevronLeftIcon className="h-12 text-white lg:hidden" onClick={previousTestimonial}></ChevronLeftIcon>
                                    <p className="px-2 text-lg font-bold text-center text-white w-fit">{testimonials[index].user} </p>
                                    <ChevronRightIcon className="h-12 text-white lg:hidden" onClick={nextTestimonail}></ChevronRightIcon>
                                </div>
                                <div className="flex-row items-center self-end justify-between hidden w-full px-5 pb-5 lg:self-end lg:flex lg:pb-2">
                                    <ChevronLeftIcon className="h-12 text-white" onClick={previousTestimonial}></ChevronLeftIcon>
                                    <ChevronRightIcon className="h-12 text-white" onClick={nextTestimonail}></ChevronRightIcon>
                                </div>
                            </div>
                        </div>
                    ) : <LoadingTestimonial/> }
                </Container>
            </motion.div>
        </>
    );
}

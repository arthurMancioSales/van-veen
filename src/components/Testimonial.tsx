"use client"

import Image from "next/image";
import { Suspense, useEffect, useState } from "react";
import LoadingTestimonial from "./LoadingTestimonial";
import Container from "./ui/Container";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

export default function Testimonial() {
    const [testimonials, setTestimonials] = useState<ITestimonial[] | null>()
    const [index, setIndex] = useState(0)
    
    try {
        useEffect(() => {
            async function getTestimonials() {
                const response = await fetch('https://my-json-server.typicode.com/arthurMancioSales/test-db/testimonials', { next: { revalidate: 10 } })
                
                if (!response.ok) {
                    throw new Error('Não foi possível buscar os dados')
                }
                
                const data: ITestimonial[] = await response.json()
                setTestimonials(data)
            }
    
            getTestimonials()
        }, [])
    } catch (error) {
        console.log(error)        
    }

    function previousTestimonial() {
        if (index == 0 && testimonials) {
            setIndex(testimonials.length - 1)
            return
        }
        setIndex((currentIndex) => {
            return currentIndex - 1
        })
    }

    function nextTestimonail() {
        if (testimonials && index == testimonials?.length - 1) {
            setIndex(0)
            return
        }
        setIndex((currentIndex) => {
            return currentIndex + 1
        })
    }
    
    return (
        <>
            <Container direction="flex-col" justify="start" height="h-[425px]" position="relative" others="mt-20">
                    { testimonials ? (
                        <>
                            <div className="absolute z-10 flex flex-col items-center justify-center w-3/4 bottom-3/4">
                                <img src={testimonials[index].img} alt="Student testimonial"  className="w-full overflow-hidden rounded-md max-h-52"/>
                            </div>
                            <div className="relative flex flex-row flex-wrap items-end content-end self-end justify-center w-full h-full rounded-md bg-blue-950">
                                <p className="px-5 pb-8 text-white">{testimonials[index].testimonial}</p>
                                <div className="flex flex-row items-center self-end justify-between w-full px-5 pb-5">
                                    <ChevronLeftIcon className="h-12 text-white" onClick={previousTestimonial}></ChevronLeftIcon>
                                    <p className="px-2 text-lg font-bold text-center text-white">{testimonials[index].user} </p>
                                    <ChevronRightIcon className="h-12 text-white" onClick={nextTestimonail}></ChevronRightIcon>
                                </div>
                            </div>
                        </>
                    ) : <LoadingTestimonial/> }

            </Container>
        </>
    )
}
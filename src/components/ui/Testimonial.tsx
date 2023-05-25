"use client"

import Image from "next/image";
import { Suspense, useEffect, useState } from "react";
import LoadingTestimonial from "../loadingTestimonial";
import Container from "../Container";
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
                
                const data = await response.json()
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
                            <div className="flex flex-col justify-center items-center absolute z-10 bottom-3/4">
                                <img src={testimonials[index].img} alt="Student testimonial"  className="w-full rounded-md max-h-52 overflow-hidden"/>
                            </div>
                            <div className="flex flex-row flex-wrap justify-center items-end self-end bg-blue-950 w-full rounded-md relative h-full">
                                <p className="text-white px-5 mt-20">{testimonials[index].testimonial}</p>
                                <div className="flex flex-row self-end w-full justify-between px-5 pb-5 items-center">
                                    <ChevronLeftIcon className="text-white h-12" onClick={previousTestimonial}></ChevronLeftIcon>
                                    <p className="text-white text-lg font-bold px-2 text-center">{testimonials[index].user} </p>
                                    <ChevronRightIcon className="text-white h-12" onClick={nextTestimonail}></ChevronRightIcon>
                                </div>
                            </div>
                        </>
                    ) : <LoadingTestimonial/> }

            </Container>
        </>
    )
}
'use client'

import { useEffect, useState } from "react";
import IAlumni from "@/interfaces/IAlumni";
import LoadingAlumni from "./LoadingAlumni";

export default function Alumni() {
    const [alumni, setAlumni] = useState< IAlumni[] | null>()

    try {
        useEffect(() => {
            async function getAlumni() {
                const response = await fetch('https://my-json-server.typicode.com/arthurMancioSales/test-db/alumni', { next: { revalidate: 1000 } })
                
                if (!response.ok) {
                    throw new Error('Não foi possível buscar os dados')
                }
                
                const data: IAlumni[] = await response.json()
                console.log(data)

                setAlumni(data)
            }


            getAlumni()
        }, [])
    } catch (error) {
        
    }
    return (
        <>
            {alumni ? (
                <div className="flex flex-row flex-wrap justify-around object-contain w-full">
                    {alumni.map((student, index) => (
                        <div className="flex flex-col items-center py-3" key={student.id} >
                            <div className="relative w-24 h-24 overflow-hidden rounded-full">
                                <img src={student.img} alt="Alumni" className="absolute top-0 left-0 object-cover w-full h-full rounded-full"/>
                            </div>
                            <h4 className="pt-2 pb-1 font-bold">{student.name}</h4>
                            <p className="pb-1 font-light">{student.country}</p>
                            <p className="font-extralight">{student.approvals} aprovações</p>
                        </div>
                    ))}
                </div>
            ) : (
                <LoadingAlumni></LoadingAlumni>
            )}
        </>
    )
}
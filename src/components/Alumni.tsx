"use client";

import { useEffect, useState } from "react";
import IAlumni from "@/interfaces/IAlumni";
import LoadingAlumni from "./LoadingAlumni";

export default function Alumni() {
    const [alumni, setAlumni] = useState< IAlumni[] | null>();

    try {
        useEffect(() => {
            async function getAlumni() {
                const response = await fetch("/api/alumni", { next: { revalidate: 60 } });
                
                if (!response.ok) {
                    throw new Error("Não foi possível buscar os dados");
                }
                
                const responseBody = await response.json();

                const data: IAlumni[] = responseBody.data;

                setAlumni(data);
            }


            getAlumni();
        }, []);
    } catch (error) {
        console.log(error); 
    }
    return (
        <>
            {alumni ? (
                <div className="flex flex-row flex-wrap justify-around object-contain w-full lg:pt-3">
                    {alumni.map((student) => (
                        <div className="flex flex-col items-center py-3 min-w-[40%] lg:min-w-[20%] lg:py-5" key={student.id} >
                            <div className="relative w-24 h-24 overflow-hidden rounded-full">
                                <img src={student.upload.link} alt="Alumni" className="absolute top-0 left-0 object-cover w-full h-full rounded-full"/>
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
    );
}

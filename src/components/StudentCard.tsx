"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface ICardProps {
    name: string,
    approvals: string,
    img: string,
}

export default function StudentCard({name, approvals, img}: ICardProps) {
    return (
        <>
            <motion.div 
                className="flex flex-col items-center justify-center w-full my-1 bg-gray-100 py-2.5 rounded-2xl lg:w-1/4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                variants={{
                    visible: { opacity: 1, transform: "translateY(0)" },
                    hidden: { opacity: 0, transform: "translateY(50%)" }
                }}
            >
                <div className="flex items-center justify-center gap-4 pb-3">
                    <div className="relative flex-col w-20 h-20 overflow-hidden rounded-full">
                        <Image src={img} alt="Student case image" fill className="absolute top-0 left-0 object-cover w-full h-full rounded-full" ></Image>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-black uppercase">{name}</h3>
                        <p className="text-sm font-light capitalize">{approvals}</p>
                    </div>
                </div>
            </motion.div>
        </>
    );
}

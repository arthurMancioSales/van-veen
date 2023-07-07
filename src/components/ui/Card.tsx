"use client";

import { motion } from "framer-motion";

interface ICardProps {
    title: string,
    content: string
}

export default function Card({title, content}: ICardProps) {
    return (
        <>
            <motion.div 
                className="flex flex-col items-center justify-center w-full py-8 my-1 bg-gray-100 rounded-2xl lg:w-1/5"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                variants={{
                    visible: { opacity: 1, transform: "translateY(0)" },
                    hidden: { opacity: 0, transform: "translateY(50%)" }
                }}
            >
                <h3 className="text-xl font-bold text-black uppercase">{title}</h3>
                <p className="text-sm font-light capitalize">{content}</p>
            </motion.div>
        </>
    );
}

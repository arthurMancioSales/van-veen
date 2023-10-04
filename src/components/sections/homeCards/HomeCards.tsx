"use client";

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card/Card";
import Image from "next/image";
import gabi from "public/images/home/gabi.jpg";
import { motion } from "framer-motion";

export default function HomeCards() {
    return (
        <>
            <motion.div
                className="text-center grid gap-3 lg:grid-cols-4 justify-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                variants={{
                    visible: {
                        opacity: 1,
                        transform: "translateY(0)",
                    },
                    hidden: {
                        opacity: 0,
                        transform: "translateY(50%)",
                    },
                }}
            >
                <Card className="flex justify-center items-center p-6 pb-0">
                    <CardContent>
                        <p className="text-2xl font-semibold">+300</p>
                        <p>Aprovações internacionais</p>
                    </CardContent>
                </Card>
                <Card className="flex justify-center items-center p-6 pb-0">
                    <CardContent>
                        <p className="text-2xl font-semibold">
                            +30.000
                        </p>
                        <p>bolsas de estudo</p>
                    </CardContent>
                </Card>
                <Card className="flex justify-center items-center p-6 pb-0">
                    <CardContent>
                        <p className="text-2xl font-semibold">8</p>
                        <p>Países</p>
                    </CardContent>
                </Card>
                <Card className="flex justify-center items-center p-6 pb-0">
                    <CardContent className="px-0">
                        <div className="flex gap-2 items-center">
                            <div className="relative flex-col w-16 h-16 overflow-hidden rounded-full">
                                <Image
                                    src={gabi}
                                    alt="Student case image"
                                    fill
                                    className="absolute top-0 left-0 object-cover w-full h-full rounded-full"
                                ></Image>
                            </div>
                            <p className="text-2xl font-semibold">
                                Gabriele Mello
                            </p>
                        </div>
                        <p>29 aprovações</p>
                    </CardContent>
                </Card>
            </motion.div>
        </>
    );
}

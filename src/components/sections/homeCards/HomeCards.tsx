"use client";

import { Card, CardContent } from "@/components/ui/card/Card";
import { motion } from "framer-motion";

export default function HomeCards({
    content,
}: {
    content: { [key: string]: { [key: string]: string } };
}) {
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
                        <p className="text-2xl font-semibold">
                            {content.acceptances.title}
                        </p>
                        <p>{content.acceptances.description}</p>
                    </CardContent>
                </Card>
                <Card className="flex justify-center items-center p-6 pb-0">
                    <CardContent>
                        <p className="text-2xl font-semibold">
                            {content.scholarships.title}
                        </p>
                        <p>{content.scholarships.description}</p>
                    </CardContent>
                </Card>
                <Card className="flex justify-center items-center p-6 pb-0">
                    <CardContent>
                        <p className="text-2xl font-semibold">
                            {content.countries.title}
                        </p>
                        <p>{content.countries.description}</p>
                    </CardContent>
                </Card>
                <Card className="flex justify-center items-center p-6 pb-0">
                    <CardContent className="px-0">
                        <p className="text-2xl font-semibold">
                            {content.mostAcceptances.title}
                        </p>
                        <p>{content.mostAcceptances.description}</p>
                    </CardContent>
                </Card>
            </motion.div>
        </>
    );
}

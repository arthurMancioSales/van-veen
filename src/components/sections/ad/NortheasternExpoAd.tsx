import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button/Button";
import { Calendar, CheckCircleIcon, ExternalLink, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import northeastern from "public/images/home/northeastern.jpg";

export default function NortheasternExpoAd({
    content,
}: {
    content: { [area: string]: { [topic: string]: string } };
}) {
    return (
        <section className="py-16 px-4 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-[#c8102e]/10 blur-3xl" />
            <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[#c8102e]/5 blur-3xl" />

            <div className="max-w-7xl mx-auto relative">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="order-2 md:order-1">
                        <Badge className="bg-[#c8102e]/10 text-[#c8102e] hover:bg-[#c8102e]/20 mb-4">
                            {content.header.badge}
                        </Badge>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            {content.header.title}{" "}
                            <span className="text-[#c8102e]">
                                {content.header.span}
                            </span>{" "}
                            {content.header.title2}!
                        </h2>

                        <p className="text-gray-600 mb-6 text-lg">
                            {content.header.description}
                        </p>

                        <div className="bg-white shadow-lg rounded-xl p-6 mb-8 border border-gray-100">
                            <h3 className="font-semibold text-xl mb-4">
                                {content.card.title}
                            </h3>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <CheckCircleIcon className="text-[#c8102e] w-5 h-5"></CheckCircleIcon>
                                    <span className="w-fit">
                                        {content.card.first}
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircleIcon className="text-[#c8102e] w-5 h-5"></CheckCircleIcon>
                                    <span className="w-fit">
                                        {content.card.second}
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircleIcon className="text-[#c8102e] w-5 h-5"></CheckCircleIcon>
                                    <span className="w-fit">
                                        {content.card.third}
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircleIcon className="text-[#c8102e] w-5 h-5"></CheckCircleIcon>
                                    <span className="w-fit">
                                        {content.card.fourth}
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircleIcon className="text-[#c8102e] w-5 h-5"></CheckCircleIcon>
                                    <span className="w-fit">
                                        {content.card.fifth}
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircleIcon className="text-[#c8102e] w-5 h-5"></CheckCircleIcon>
                                    <span className="w-fit">
                                        {content.card.sixth}
                                    </span>
                                </li>
                            </ul>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 mt-6">
                            <Button className="bg-[#c8102e] hover:bg-[#a00d25] text-white px-6 py-6 rounded-lg text-lg font-semibold flex-1">
                                <Link
                                    href="https://connect.northeastern.edu/portal/latam_study_expo?utm_medium=affiliate&utm_source=channel-partnership_intentfarm&utm_campaign=em-cvn-evg-int-comp-net-all-def-ffe-2025_04_26-latam_study_expo&utm_content=latam_expo_google"
                                    target="_blank"
                                    className="flex items-center justify-center gap-2"
                                >
                                    {content.footer.register}{" "}
                                    <ExternalLink className="h-4 w-4" />
                                </Link>
                            </Button>
                            <Button
                                variant="outline"
                                className="border-[#c8102e] text-[#c8102e] hover:text-[#c8102e] hover:bg-[#c8102e]/10 px-6 py-6 rounded-lg text-lg font-semibold flex-1"
                            >
                                <Link
                                    href="https://issuu.com/nuiem/docs/global_study_expo_-_brazil_program_booklet?fr=sZWM3ODg0MjQwNTg"
                                    className="flex items-center justify-center gap-2"
                                >
                                    {content.footer.guide}{" "}
                                    <ExternalLink className="h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                    </div>

                    <div className="order-1 md:order-2 relative">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
                            <div className="aspect-[4/3] relative">
                                <Image
                                    src={northeastern}
                                    alt="Northeastern University Campus"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 h-40 pointer-events-none flex justify-end flex-col">
                                <div className="flex items-center gap-2 text-white mb-2 pointer-events-auto">
                                    <Calendar className="h-5 w-5" />
                                    <span className="font-medium">
                                        {content.image.date}
                                    </span>
                                </div>
                                <Link
                                    target="_blank"
                                    className="w-fit"
                                    href={
                                        "https://www.google.com/maps/place/Tivoli+Mofarrej+S%C3%A3o+Paulo+Hotel/@-23.5638747,-46.6584455,17z/data=!3m1!4b1!4m9!3m8!1s0x94ce59c8528ba967:0x778f091e32fe2c97!5m2!4m1!1i2!8m2!3d-23.5638747!4d-46.6558706!16s%2Fg%2F1tqtbt9_?entry=ttu&g_ep=EgoyMDI1MDUxMS4wIKXMDSoASAFQAw%3D%3D"
                                    }
                                >
                                    <div className="flex items-center gap-2 text-white pointer-events-auto">
                                        <MapPin className="h-5 w-5" />
                                        <span className="font-medium">
                                            {content.image.venue}
                                        </span>
                                    </div>
                                </Link>
                            </div>
                        </div>

                        {/* Decorative elements */}
                        <div className="absolute -z-10 -top-6 -right-6 w-32 h-32 bg-[#c8102e]/10 rounded-full" />
                        <div className="absolute -z-10 -bottom-6 -left-6 w-24 h-24 bg-[#c8102e]/20 rounded-full" />
                    </div>
                </div>
            </div>
        </section>
    );
}

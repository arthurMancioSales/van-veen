import Image from "next/image";
import woman from "public/images/home/woman.svg";
import studentGroup from "public/images/emerge/student_group.jpg";
import emerge from "public/images/home/emerge_horizontal.png";

import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/button/Button";
import Testimonial from "@/components/Testimonial";
import HomeAccordion from "@/components/HomeAccordion";
import InstagramPost from "@/components/InstagramPost";
import HomeCards from "@/components/sections/homeCards/HomeCards";
import { Calendar, FileCheck2, PenSquare } from "lucide-react";
import { availableLanguages } from "@/interfaces/languages";
import { getDictionary } from "@/app/[lang]/dictionaries";
import Link from "next/link";

export default async function Emerge({
    params,
}: {
    params: Promise<{ lang: `${availableLanguages}` }>;
}) {
    const lang = (await params).lang;
    const dict = await getDictionary(lang);

    return (
        <>
            <section className="min-h-screen">
                <Container className="flex flex-col items-center justify-center h-[calc(100vh-52px)]">
                    <h2 className="section-title capitalize text-center">
                        {dict.emerge.header}
                    </h2>
                </Container>
            </section>

            <section className="overflow-clip py-12">
                <Container className="grid gap-4 row-auto md:col-auto md:">
                    <div className="md:row-start-1 md:col-start-1 gap-4 flex flex-col">
                        <h2 className="section-title">
                            {dict.emerge.features.title}
                        </h2>
                        <p className="section-description indent-6">
                            {dict.emerge.features.paragraphs1}
                        </p>
                    </div>

                    <div className="relative rounded-lg left-16 h-60 aspect-square md:row-start-1 md:col-start-2 md:sticky md:top-20 md:left-20 md:h-96">
                        <Image
                            alt="student group"
                            fill
                            src={studentGroup}
                            className="object-cover rounded-lg"
                        ></Image>
                    </div>

                    <div className="md:row-start-2 md:col-start-1 gap-4 flex flex-col">
                        <h2 className="list-title">
                            {dict.emerge.features.topics.first.title}
                        </h2>
                        <p className="section-description indent-6">
                            {dict.emerge.features.topics.first.content}
                        </p>
                    </div>

                    <div className="md:row-start-3 md:col-start-1 gap-4 flex flex-col">
                        <h2 className="list-title">
                            {dict.emerge.features.topics.second.title}
                        </h2>
                        <p className="section-description indent-6">
                            {dict.emerge.features.topics.second.content}
                        </p>
                    </div>
                </Container>
            </section>

            <section className="py-12">
                <Container className="flex flex-col items-center justify-around gap-12">
                    <h2 className="section-title capitalize text-center">
                        {dict.emerge.sellingPoints.title}
                    </h2>
                    <ol className="flex flex-col gap-10 lg:flex-row">
                        <li className="gap-4 flex flex-col">
                            <h2 className="list-title capitalize">
                                {dict.emerge.sellingPoints.first.title}
                            </h2>
                            <p className="section-description indent-6">
                                {dict.emerge.sellingPoints.first.reason}
                            </p>
                        </li>
                        <li className="gap-4 flex flex-col">
                            <h2 className="list-title capitalize">
                                {dict.emerge.sellingPoints.second.title}
                            </h2>
                            <p className="section-description indent-6">
                                {dict.emerge.sellingPoints.second.reason}
                            </p>
                        </li>
                        <li className="gap-4 flex flex-col">
                            <h2 className="list-title capitalize">
                                {dict.emerge.sellingPoints.third.title}
                            </h2>
                            <p className="section-description indent-6">
                                {dict.emerge.sellingPoints.third.reason}
                            </p>
                        </li>
                    </ol>
                </Container>
            </section>

            <section className="overflow-clip py-12">
                <Container className="grid gap-4 row-auto md:col-auto md:">
                    <div className="md:row-start-1 md:col-start-1 gap-4 flex flex-col">
                        <h2 className="section-title">
                            {dict.emerge.experience.title}
                        </h2>
                        <p className="section-description indent-6">
                            {dict.emerge.experience.paragraph1}
                        </p>
                    </div>

                    <div className="md:row-start-2 md:col-start-1 gap-4 flex flex-col">
                        <h2 className="list-title">
                            {dict.emerge.experience.list.title}
                        </h2>
                        <ol className="list-decimal list-outside gap-2 flex flex-col">
                            <li>
                                <p className="section-description indent-6">
                                    {dict.emerge.experience.list.first}
                                </p>
                            </li>
                            <li>
                                <p className="section-description indent-6">
                                    {dict.emerge.experience.list.second}
                                </p>
                            </li>
                            <li>
                                <p className="section-description indent-6">
                                    {dict.emerge.experience.list.third}
                                </p>
                            </li>
                            <li>
                                <p className="section-description indent-6">
                                    {dict.emerge.experience.list.fourth}
                                </p>
                            </li>
                            <li>
                                <p className="section-description indent-6">
                                    {dict.emerge.experience.list.fifth}
                                </p>
                            </li>
                            <li>
                                <p className="section-description indent-6">
                                    {dict.emerge.experience.list.sixth}
                                </p>
                            </li>
                            <li>
                                <p className="section-description indent-6">
                                    {dict.emerge.experience.list.seventh}
                                </p>
                            </li>
                        </ol>
                    </div>
                </Container>
            </section>
        </>
    );
}

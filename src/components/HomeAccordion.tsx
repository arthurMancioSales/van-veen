"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion/Accordion";

export default function HomeAccordion({
    content,
}: {
    content: typeof import("../dictionaries/en.json");
}) {
    return (
        <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
                <AccordionTrigger className="text-left">
                    {content.home.faq.questions.first.question}
                </AccordionTrigger>
                <AccordionContent>
                    <p className="indent-6">
                        {content.home.faq.questions.first.answer1}
                    </p>
                    <p className="indent-6">
                        {content.home.faq.questions.first.answer2}
                    </p>
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
                <AccordionTrigger className="text-left">
                    {content.home.faq.questions.second.question}
                </AccordionTrigger>
                <AccordionContent>
                    <p className="indent-6">
                        {content.home.faq.questions.second.answer}
                    </p>
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
                <AccordionTrigger className="text-left">
                    {content.home.faq.questions.third.question}
                </AccordionTrigger>
                <AccordionContent>
                    <p className="indent-6">
                        {content.home.faq.questions.third.answer}
                    </p>
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
                <AccordionTrigger className="text-left">
                    {content.home.faq.questions.fourth.question}
                </AccordionTrigger>
                <AccordionContent>
                    <p className="indent-6">
                        {content.home.faq.questions.fourth.answer}
                    </p>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
}

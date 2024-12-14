import { prisma } from "@/db/db";
import ITestimonial from "@/interfaces/ITestimonial";

export async function getAllTestimonials() {
    try {
        const testimonials: ITestimonial[] = await prisma.testimonials.findMany({
            select: {
                testimonial: true,
                user: true,
                upload: {
                    select: {
                        link: true,
                    },
                },
            },
        });

        return testimonials;
    } catch (error) {
        console.error("getAllTestimonials:", error);
        throw error;
    }
}

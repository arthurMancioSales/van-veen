import { prisma } from "@/db/db";
import ITestimonial from "@/interfaces/ITestimonial";

export async function getAllTestimonials() {
    try {
        const testimonails: ITestimonial[] = await prisma.testimonials.findMany({
            select: { 
                testimonial: true,
                user: true,
                upload: { 
                    select: { 
                        link: true 
                    } 
                }
            }
        });
        
        return testimonails;
    } catch (error) {
        console.error("getAllTestimonials:", error);
        throw error;
    }
    
}

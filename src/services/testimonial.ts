import * as testimonialRepo from "../repositories/testimonial";

export async function getAllTestimonials() {
    try {
        const testimonials = await testimonialRepo.getAllTestimonials();

        if (!testimonials || testimonials === null || testimonials.length === 0) {
            throw new Error("No testimonial found, please try again");
        }

        return testimonials;
    } catch (error) {
        console.error("getAllTestimonialsService:", error);
        throw error;
    }
}

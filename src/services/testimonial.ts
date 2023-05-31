import * as testimonialRepo from "../repositories/testimonial";

export async function getAllTestimonials() {
    try {
        const testimonials = await testimonialRepo.getAllTestimonials();
        
        if (!testimonials || testimonials == null || testimonials.length == 0) {
            
            throw {
                error: "No testimonial found, please try again",
                status: 404
            };
        }

        return testimonials;
    } catch (error) {
        console.error("getAllTestimonialsService:", error);
        throw error;
    }
}

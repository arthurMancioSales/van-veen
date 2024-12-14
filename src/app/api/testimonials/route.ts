// import * as testimonialsService from "@/services/testimonial";
import testimonials from "@/db/testimonials";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        // const testimonials = await testimonialsService.getAllTestimonials();

        return NextResponse.json(
            {
                error: null,
                data: testimonials,
            },
            {
                status: 200,
            },
        );
    } catch (error) {
        console.log(error);

        if (
            error &&
            typeof error === "object" &&
            "error" in error &&
            "status" in error
        ) {
            return NextResponse.json(
                {
                    error: error.error as string,
                    data: null,
                },
                {
                    status: error.status as number,
                },
            );
        }

        return NextResponse.json(
            {
                error: "An unexpected error occurred, please try again",
                data: null,
            },
            {
                status: 500,
            },
        );
    }
}

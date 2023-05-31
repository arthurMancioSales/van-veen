import * as alumniService from "@/services/alumni";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const alumni = await alumniService.getAllAlumni();

        return NextResponse.json({
            error: null,
            data: alumni
        }, {
            status: 200
        });

    } catch (error) {
        if (error && typeof(error) === "object" && "error" in error && "status" in error) {
            return NextResponse.json({
                error: error.error as string,
                data: null
            }, {
                status: error.status as number
            });
        }
          
        return NextResponse.json({
            error: "An unexpected error occurred, please try again",
            data: null
        }, {
            status: 500
        });
    }
}

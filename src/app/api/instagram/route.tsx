import instagramPostService from "@/services/instagram";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const post = await instagramPostService();
        return NextResponse.json(post, {
            status: 200,
        });
    } catch (error) {
        return error;
    }
}

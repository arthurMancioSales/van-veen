import { IPost } from "@/interfaces/IPost";
import { Response } from "@/interfaces/Response";
import instagramPostService from "@/services/instagram";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const post: Response<IPost> = await instagramPostService();

        return NextResponse.json(post, {
            status: 200,
        });
    } catch (error) {
        return NextResponse.json(error, {
            status: 500,
        });
    }
}

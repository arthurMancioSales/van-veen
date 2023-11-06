import { IPost } from "@/interfaces/IPost";
import instagramPostService from "@/services/instagram";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const post: IPost = await instagramPostService();

        return NextResponse.json(post, {
            status: 200,
        });
    } catch (error) {
        return NextResponse.json(error, {
            status: 500,
        });
    }
}

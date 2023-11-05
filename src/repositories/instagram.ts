import { IInstaApi } from "@/interfaces/IPost";
import generalRequest from "@/lib/generalRequest";

const tag = "instagramPostRepo";

export default async function instagramPostRepo() {
    try {
        const request = await generalRequest<IInstaApi>(
            `https://graph.instagram.com/v17.0/me/media?fields=caption,media_url,permalink,username,media_type&access_token=${process.env.INSTAGRAM_TOKEN}`,
            "get",
        );

        const [response, error] = request;
        if (!response) {
            throw error;
        }

        return response.data[0];
    } catch (error) {
        console.log("error at ", tag);
        throw error;
    }
}

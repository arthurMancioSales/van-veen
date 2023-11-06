import { IPost } from "@/interfaces/IPost";
import instagramPostRepo from "@/repositories/instagram";

const tag = "instagramPostService";

export default async function instagramPostService() {
    try {
        const response: IPost = await instagramPostRepo();
        return response;
    } catch (error) {
        console.log(tag, error);
        throw error;
    }
}

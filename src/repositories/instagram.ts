import { IPost } from "@/interfaces/IPost";
import { Response } from "@/interfaces/Response";
import generalRequest from "@/lib/generalRequest";

const tag = "instagramPostRepo";

export default async function instagramPostRepo() {
    try {
        const request: { data: IPost[]; paging: object } = await generalRequest(
            `https://graph.instagram.com/v17.0/me/media?fields=caption,media_url,permalink,username,media_type&access_token=${process.env.INSTAGRAM_TOKEN}`,
            "get",
        );

        if (!request) {
            throw new Error("Erro ao buscar postagens do instagram");
        }
        console.log(request)
        const response: Response<IPost> = {
            payload: {
                data: request.data[0],
                message: "Postagens obtidas com sucesso",
            },
            error: false,
        };

        return response;
    } catch (error) {
        console.log("error at ", tag);
        throw error;
    }
}

import IPost from "@/interfaces/IPost";
import Container from "./ui/Container";
import Image from "next/image";

export default async function InstagramPost() {
    const request = await fetch(`https://graph.instagram.com/v17.0/me/media?fields=caption,media_url,permalink,username&access_token=${process.env.INSTAGRAM_TOKEN}`);

    if (!request.ok) {
        throw new Error("An unexpected error occurred while fetching the latest instagram post, please try again.");
    }

    const response = await request.json();
    const data: IPost = response.data[0];
    
    return(
        <Container direction="flex-col" items="items-center">
            <div className="flex flex-row items-center w-full gap-4 p-3 bg-white">
                <a href="https://www.instagram.com/instituto.vanveen/" target="_blank" className="flex items-center gap-4">
                    <img src="/vanVeenShield.svg" alt="Van Veen profile picture" className="inline-block w-10 h-10 bg-blue-900 rounded-full" />
                    <h3 className="text-lg font-semibold">
                        {data.username}
                    </h3>
                </a>
            </div>
            <div className="relative w-full overflow-hidden pb-[100%]">
                <a href={data.permalink} target="_blank">
                    <img alt="Institute's CEO" src={data.media_url} className="absolute top-0 left-0 w-full h-auto"></img>
                </a>
            </div>
            <div className="flex-col px-4 py-6 bg-white shadow-md">
                <h3>{data.caption}</h3>
            </div>
        </Container>
    );
}

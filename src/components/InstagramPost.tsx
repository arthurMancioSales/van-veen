/* eslint-disable @next/next/no-img-element */
import IPost from "@/interfaces/IPost";
import Image from "next/image";

export default async function InstagramPost() {
    const request = await fetch(
        `https://graph.instagram.com/v17.0/me/media?fields=caption,media_url,permalink,username,media_type&access_token=${process.env.INSTAGRAM_TOKEN}`,
        { next: { revalidate: 10 } },
    );

    if (!request.ok) {
        const tmp = await request.json();
        console.log(tmp);
        throw new Error(
            "An unexpected error occurred while fetching the latest instagram post, please try again.",
        );
    }

    const response = await request.json();
    const data: IPost[] = [];

    for (let i = 0; i < response.data.length; i++) {
        if (response.data[i].media_type !== "IMAGE") {
            continue;
        }
        data.push(response.data[i]);
        break;
    }

    return (
        <div className="grid items-center lg:grid-cols-2 w-full">
            <div className="lg:shadow-[0_0_60px_-15px_rgba(0,0,0,0.3)] w-full">
                <div className="flex flex-row items-center w-full gap-4 p-3 bg-white">
                    <a
                        href="https://www.instagram.com/instituto.vanveen/"
                        target="_blank"
                        className="flex items-center gap-4"
                    >
                        <div className="w-10 h-10 relative">
                            <Image
                                src="/images/vanVeenShield.svg"
                                alt="Van Veen profile picture"
                                fill
                                className="bg-blue-900 rounded-full"
                            />
                        </div>
                        <h3 className="text-lg font-semibold">
                            {data[0].username}
                        </h3>
                    </a>
                </div>
                <div className="relative w-full overflow-hidden pb-[100%]">
                    <a href={data[0].permalink} target="_blank">
                        <img
                            alt="Latest instagram post"
                            src={data[0].media_url}
                            className="absolute top-0 left-0 w-full h-auto"
                        ></img>
                    </a>
                </div>
            </div>
            <div className="flex-col px-4 py-6 bg-white shadow-md lg:self-stretch">
                <h3>{data[0].caption}</h3>
            </div>
        </div>
    );
}

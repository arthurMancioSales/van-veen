"use client";
import { IPost } from "@/interfaces/IPost";
import generalRequest from "@/lib/generalRequest";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useToast } from "./ui/toast/use-toast";
import { Button } from "./ui/button/Button";
import { Instagram } from "lucide-react";
import InstagramVideo from "./InstagramVideo";
import Link from "next/link";

export default function InstagramPost({ callToAction }: { callToAction: string }) {
    const { toast } = useToast();

    useEffect(() => {
        async function getInstagramPost() {
            const request = await generalRequest<IPost>("/api/instagram", "get");

            const [data, error] = request;

            if (error) {
                return toast({
                    title: "Um erro inesperado aconteceu.",
                    variant: "destructive",
                    description: "Não foi possível obter o conteúdo do instagram.",
                });
            }

            setLatestPost(data);
        }

        getInstagramPost();
    }, [toast]);

    const [latestPost, setLatestPost] = useState<IPost | null>(null);

    function renderLatestPost() {
        switch (latestPost?.media_type) {
            case "IMAGE":
                return (
                    <div className="aspect-square w-full relative lg:h-96 lg:w-auto">
                        <Image
                            alt="Latest instagram post"
                            src={latestPost.media_url}
                            fill
                            className="object-contain"
                        ></Image>
                    </div>
                );

            case "CAROUSEL_ALBUM":
                return (
                    <div className="aspect-square w-full relative lg:h-96 lg:w-auto">
                        <Image
                            alt="Latest instagram post"
                            src={latestPost.media_url}
                            fill
                            className="object-contain"
                        ></Image>
                    </div>
                );

            case "VIDEO":
                return (
                    <div className="w-full overflow-hidden lg:h-full lg:max-w-fit">
                        <InstagramVideo src={latestPost.media_url}></InstagramVideo>
                    </div>
                );
        }
    }

    return (
        <div className="flex flex-col lg:flex-row">
            <div className="w-full relative min-h-[100%] lg:self-stretch flex flex-col border-2 border-b-0 lg:border-r-0">
                <div className="flex flex-row items-center w-full gap-4 p-3 bg-white ">
                    <Link
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
                            {latestPost?.username}
                        </h3>
                    </Link>
                </div>
                {renderLatestPost()}
            </div>
            <div className="flex-col px-4 lg:px-12 py-6 bg-white border-2 lg:border-l-0 lg:self-stretch justify-between border-t-0 flex items-end gap-8">
                <h3>{latestPost?.caption}</h3>
                <Button className="flex gap-2 w-fit">
                    <Instagram></Instagram>
                    <Link href={latestPost?.permalink ?? ""} target="_blank">
                        {callToAction}
                    </Link>
                </Button>
            </div>
        </div>
    );
}

"use client";

import northeastern from "public/images/home/northeastern.jpg";
import { useState, useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "../ui/dialog";
import { Button } from "../ui/button/Button";

export function EventModal({
    content,
}: {
    content: { [area: string]: { [topic: string]: string } };
}) {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent className="sm:max-w-[600px] p-0 overflow-hidden bg-white rounded-xl">
                <div className="relative h-[200px] w-full">
                    <Image
                        src={northeastern}
                        alt="Northeastern University Global Study Expo"
                        fill
                        className="object-cover"
                    />
                    <button
                        onClick={() => setIsOpen(false)}
                        className="absolute top-2 right-2 bg-white/80 p-1 rounded-full"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>

                <div className="p-6">
                    <DialogHeader>
                        <DialogTitle className="text-2xl font-bold text-[#c8102e]">
                            {content.modal.title}
                        </DialogTitle>
                        <DialogDescription className="text-base pt-2">
                            {content.modal.description}
                        </DialogDescription>
                    </DialogHeader>

                    <div className="mt-4 space-y-4">
                        <div className="flex items-center gap-2">
                            <div className="h-10 w-10 rounded-full bg-[#c8102e] flex items-center justify-center text-white font-bold">
                                🎓
                            </div>
                            <p className="font-medium">{content.modal.first}</p>
                        </div>

                        <div className="flex items-center gap-2">
                            <div className="h-10 w-10 rounded-full bg-[#c8102e] flex items-center justify-center text-white font-bold">
                                💰
                            </div>
                            <p className="font-medium">{content.modal.second}</p>
                        </div>

                        <Button
                            className="w-full py-6 text-lg bg-[#c8102e] hover:bg-[#a00] text-white"
                            onClick={() =>
                                window.open(
                                    "https://connect.northeastern.edu/portal/latam_study_expo?utm_medium=affiliate&utm_source=channel-partnership_intentfarm&utm_campaign=em-cvn-evg-int-comp-net-all-def-ffe-2025_04_26-latam_study_expo&utm_content=latam_expo_google",
                                    "_blank",
                                )
                            }
                        >
                            {content.modal.button}
                        </Button>

                        <p className="text-sm text-center text-gray-500">
                            {content.modal.footer}
                        </p>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}

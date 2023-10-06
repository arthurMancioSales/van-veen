import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

interface IPropsContainer {
    className?: string;
}

export default function Container({
    children,
    className,
}: PropsWithChildren<IPropsContainer>) {
    return (
        <>
            <div
                className={cn(
                    `max-w-xs lg:max-w-6xl mx-auto w-full`,
                    className,
                )}
            >
                {children}
            </div>
        </>
    );
}

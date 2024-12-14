import { cn } from "@/lib/utils";

export default function Container({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <div
            className={cn(
                "lg:max-w-4xl xl:max-w-6xl md:max-w-xl max-w-xs mx-auto mobileS:max-w-[16rem] 2xl:max-w-[1900px] w-full",
                className,
            )}
        >
            {children}
        </div>
    );
}

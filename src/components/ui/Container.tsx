import { PropsWithChildren } from "react";

interface IPropsContainer {
    className: string;
}

export default function Container({
    children,
    className,
}: PropsWithChildren<IPropsContainer>) {
    return (
        <>
            <div
                className={`max-w-xs lg:max-w-6xl mx-auto ${className}`}
            >
                {children}
            </div>
        </>
    );
}

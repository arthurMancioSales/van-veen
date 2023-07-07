import { PropsWithChildren } from "react";

interface IPropsContainer {
    direction?: string;
    justify?: string;
    items?: string;
    width?: string;
    maxWidth?: string;
    height?: string;
    maxHeight?: string;
    position?: string;
    others?: string
}

export default function Container({
    children,
    direction = "flex-row",
    justify = "justify-center",
    items = "items-center",
    width = "w-full",
    height = "h-full",
    maxWidth = "",
    maxHeight = "",
    position = "static",
    others = ""
}: PropsWithChildren<IPropsContainer>) {
    const classes = `px-6 lg:px-20 flex ${direction} ${justify} ${items} ${width} ${height} ${maxHeight} ${maxWidth} ${position} ${others}`;

    return (
        <>
            <div className={classes}>
                {children}
            </div>
        </>
    );
}

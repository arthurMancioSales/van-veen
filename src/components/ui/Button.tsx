import { PropsWithChildren } from "react";

interface IPropsButton {
    text?: string;
    textColor?: string;
    link?: string;
    color?: string;
    borderWidth?: string;
    borderColor?: string;
    roundCorner?: string;
    px?: string;
    py?: string;
    hover?: string;
    hoverContent?: string;
    focusRing?: string;
    focusColor?: string;
    active?: string;
    onClick?: () => void;
    disabled?: boolean;
}

export default function Button({
    children,
    text,
    textColor = "text-black",
    link,
    color = "bg-transparent",
    borderWidth = "border-0",
    borderColor = "border-transparent",
    roundCorner = "rounded-full",
    px = "px-6",
    py = "py-3",
    hover = "",
    hoverContent = "",
    focusRing = "focus:ring",
    focusColor = "",
    active = "",
    onClick,
    disabled = false
}: PropsWithChildren<IPropsButton>) {
    const classes = `${color} ${borderWidth} ${borderColor} ${roundCorner} ${py} ${px} ${hover} ${hoverContent} ${focusRing} ${focusColor} ${active} flex justify-center items-center gap-2 text-sm ${textColor} font-bold uppercase`;
    const textClasses = `text-sm text-${text} font-bold uppercase`
    return (
        <>
            <button disabled={disabled} onClick={onClick} className={classes}>
                {children}
                {link ? <a href={link} className={textClasses}>{text}</a> : text}
            </button>
        </>
    );
};
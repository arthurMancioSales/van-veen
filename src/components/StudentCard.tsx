import Image from "next/image";
import student from "/public/woman.svg";

interface ICardProps {
    title: string,
    content: string,
    img: string,
}

export default function StudentCard({title, content, img}: ICardProps) {
    return (
        <>
            <div className="flex flex-col items-center justify-center w-full py-8 my-1 rounded-2xl bg-gray-50">
                <div className="flex items-center justify-center gap-4 pb-3">
                    <Image src={student} alt="Student case image" className="rounded-full max-w-8 max-h-10" ></Image>
                    <h3 className="text-xl font-bold text-black uppercase">{title}</h3>
                </div>
                <p className="text-sm font-light capitalize">{content}</p>
            </div>
        </>
    );
}

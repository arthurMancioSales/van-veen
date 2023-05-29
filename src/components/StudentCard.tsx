import Image from "next/image";
import student from "/public/woman.svg"

interface ICardProps {
    title: string,
    content: string,
    img: string,
}

export default function StudentCard({title, content, img}: ICardProps) {
    return (
        <>
            <div className="flex flex-col justify-center items-center py-8 w-full rounded-2xl bg-gray-50 my-1">
                <div className="flex justify-center items-center gap-4 pb-3">
                    <Image src={student} alt="Student case image" className="max-w-8 max-h-10 rounded-full" ></Image>
                    <h3 className="text-black font-bold text-xl uppercase">{title}</h3>
                </div>
                <p className="text-sm capitalize font-light">{content}</p>
            </div>
        </>
    )
}
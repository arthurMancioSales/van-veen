interface ICardProps {
    title: string,
    content: string
}

export default function Card({title, content}: ICardProps) {
    return (
        <>
            <div className="flex flex-col justify-center items-center py-8 w-full rounded-2xl bg-gray-50 my-1">
                <h3 className="text-black font-bold text-xl uppercase">{title}</h3>
                <p className="text-sm capitalize font-light">{content}</p>
            </div>
        </>
    )
}
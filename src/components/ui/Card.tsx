interface ICardProps {
    title: string,
    content: string
}

export default function Card({title, content}: ICardProps) {
    return (
        <>
            <div className="flex flex-col items-center justify-center w-full py-8 my-1 rounded-2xl bg-gray-50">
                <h3 className="text-xl font-bold text-black uppercase">{title}</h3>
                <p className="text-sm font-light capitalize">{content}</p>
            </div>
        </>
    );
}

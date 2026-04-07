interface CardInfoProps {
    image: string;
    altImage: string;
    cardTitle: string;
    cardContent: string;
}

export const CardInfo = ({ image, altImage, cardContent, cardTitle }: CardInfoProps) => {
    return (
        <article className="flex gap-4 border-b border-zinc-300 pb-4">
            <img
                src={image}
                alt={altImage}
                className="h-16 w-16 rounded-lg object-cover"
            />

            <div>
                <h3 className="text-2xl font-bold">{cardTitle}</h3>
                <p className="mt-1 text-base text-zinc-700">
                    {cardContent}
                </p>
            </div>
        </article>

    )
}
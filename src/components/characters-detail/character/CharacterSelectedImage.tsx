interface CharacterSelectedImageProps {
    image: string;
    altImage: string;
}

export const CharacterSelectedImage = ({image, altImage}: CharacterSelectedImageProps) => {
    return (
        <div className="mb-4 overflow-hidden rounded-lg border border-zinc-700  flex justify-center">
            <img
                src={image}
                alt={altImage}
                className="h-56  object-cover"
            />
        </div>
    )
}
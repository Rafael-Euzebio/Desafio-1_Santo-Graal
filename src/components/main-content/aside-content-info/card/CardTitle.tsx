interface CardTitleProps {
    title: string
}

export const CardTitle = ({ title }: CardTitleProps) => {
    return (

        <div className="mb-4 flex items-center gap-2 border-b border-zinc-300 pb-3">
            <span className="text-sm font-semibold text-zinc-600">
                {title}
            </span>
        </div>

    )
}
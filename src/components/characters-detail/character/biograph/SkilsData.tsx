
interface SkilsDataProps {
    title: string;
    discription: string;
}

export const SkilsData = ({ title, discription }: SkilsDataProps) => {
    return (
        <div className="border-b border-zinc-700 pb-3">
            <h3 className="mb-1 text-lg font-semibold ">
                {title}
            </h3>
            <p className="text-sm leading-6 ">
                {discription}
            </p>
        </div>

    )
}
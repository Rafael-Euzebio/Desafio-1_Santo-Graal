
interface PersonalDataProps {
    name: string;
    birthDate: number;
}

export const PersonalData = ({ name, birthDate }: PersonalDataProps) => {
    return (
        <div className="space-y-4">
            <div className="border-b border-zinc-700 pb-3">
                <h2 className="text-3xl font-bold ">{name}</h2>
            </div>

            <div className="border-b border-zinc-700 pb-3">
                <p className="text-base font-semibold ">
                    Ano: <span className="font-normal ">{birthDate}</span>
                </p>
            </div>
        </div>
    )
}
import type { asideInfo } from "../../../../data/asideContentInfo";
import { CardInfo } from "./CardInfo"
import { CardTitle } from "./CardTitle"

interface aditionalInfoCardProps {
    title: string;
    aditionalInfocontent: asideInfo[];
}

export const AditionalInfoCard = ({ title, aditionalInfocontent }: aditionalInfoCardProps) => {
    return (
        <aside className="rounded-2xl border   border-zinc-400/20 bg-zinc-100/95 p-5 text-zinc-900 shadow-lg w-full">
            <CardTitle title={title || ""} />
            {aditionalInfocontent.map((aditionalInfo) => {
                return (
                    <CardInfo altImage={aditionalInfo.altImage} image={aditionalInfo.image} cardTitle={aditionalInfo.title} cardContent={aditionalInfo.cardContent} />
                )
            })}
        </aside>

    )
}
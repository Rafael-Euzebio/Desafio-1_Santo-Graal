import { lastInfosAside, nextSeasonAside } from "../../../data/asideContentInfo"
import { AditionalInfoCard } from "./card/AditionalInfoCard"

export const MoreInfoAditional = () => {
    return (
        <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
            <AditionalInfoCard title="Últimas Informações" aditionalInfocontent={lastInfosAside} />
            <AditionalInfoCard title="Próxima temporada" aditionalInfocontent={nextSeasonAside} />
        </div>
    )
}
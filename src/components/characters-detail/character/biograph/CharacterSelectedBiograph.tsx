import type { CharactersDetailProps } from "../../../../data/charactersDetail";
import { PersonalData } from "./PersonalData";
import { RankingData } from "./RankingData";
import { SkilsData } from "./SkilsData";

interface CharacterSelectedBiographProps {
    character: CharactersDetailProps;
}

export const CharacterSelectedBiograph = ({ character }: CharacterSelectedBiographProps) => {
    return (
        <div className="space-y-4">
            <PersonalData name={character.name} birthDate={character.year} />
            <RankingData ranking={character.ranking} />
            <SkilsData title="Expansão de Domínio" discription={character.domainExpansion} />
            <SkilsData title="Habilidade mais forte" discription={character.strongestAbility} />
            <SkilsData title="Estilo de luta" discription={character.fightingStyle} />
            <SkilsData title="Técnicas amaldiçoadas" discription={character.cursedTechniques} />
            <SkilsData title="Classificação de força" discription={character.forceClassification} />

        </div>
    )
}
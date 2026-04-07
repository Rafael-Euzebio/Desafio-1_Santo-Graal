import type { CharactersDetailProps } from "../../data/charactersDetail";
import { CharacterSelectedBiograph } from "./character/biograph/CharacterSelectedBiograph";
import { CharacterSelectedImage } from "./character/CharacterSelectedImage";



type CharacterDetailsProps = {
    character: CharactersDetailProps | undefined;
};

export function CharacterDetails({
    character,
}: CharacterDetailsProps) {
    if (!character) {
        return (
            <aside className="rounded-xl border border-zinc-800  p-4 ">
                <p className="text-sm ">
                    Nenhum personagem selecionado.
                </p>
            </aside>
        );
    }

    return (
        <aside
        style={{height: '95%'}}
            className="rounded-xl  bg-zinc-100/95 border flex flex-col  border-zinc-800  p-2 ">
            <CharacterSelectedImage image={character.image} altImage={character.name} />
            <CharacterSelectedBiograph character={character} />

        </aside>
    );
}
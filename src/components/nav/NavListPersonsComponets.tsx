import type { Character } from "../../data/characters";



type NavListProps = {
    characters: Character[];
    selectedCharacterId: number;
    exibeTitle?: boolean;
    onSelectCharacter: (id: number) => void;
};

export function NavListPersons({
    characters,
    selectedCharacterId,
    exibeTitle = true,
    onSelectCharacter,
}: NavListProps) {
    return (
        <nav className="bg-zinc-950 p-4 rounded-lg border h-full  border-zinc-800">
            {exibeTitle && (
                <h2 className="text-white text-lg font-bold mb-4">Personagens</h2>

            )}

            <ul className="flex flex-col gap-3">
                {characters.map((character) => {
                    const isActive = character.id === selectedCharacterId;

                    return (
                        <li key={character.id}>
                            <button
                                type="button"
                                onClick={() => onSelectCharacter(character.id)}
                                className={`w-full flex items-center gap-3 p-3 rounded-lg border transition text-left cursor-pointer ${isActive
                                    ? 'bg-red-700 border-red-500 text-white'
                                    : 'bg-zinc-900 border-zinc-800 text-zinc-200 hover:bg-zinc-800'
                                    }`}
                            >
                                <img
                                    src={character.image}
                                    alt={character.name}
                                    className="w-12 h-12 rounded-md object-cover"
                                />

                                <span className="font-medium">{character.name}</span>
                            </button>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}
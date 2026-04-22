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
    <nav className="flex h-full flex-col rounded-lg border border-zinc-800 bg-zinc-950 p-4" style={{maxHeight: '650px', height: '100%'}}>
      {exibeTitle && (
        <h2 className="mb-4 shrink-0 text-lg font-bold text-white">
          Personagens
        </h2>
      )}

      <ul className="flex flex-1 flex-col gap-3 overflow-y-auto" >
        {characters.map((character) => {
          const isActive = character.id === selectedCharacterId;

          return (
            <li key={character.id}>
              <button
                type="button"
                onClick={() => onSelectCharacter(character.id)}
                className={`w-full cursor-pointer rounded-lg border p-3 text-left transition flex items-center gap-3 ${
                  isActive
                    ? 'border-red-500 bg-red-700 text-white'
                    : 'border-zinc-800 bg-zinc-900 text-zinc-200 hover:bg-zinc-800'
                }`}
              >
                <img
                  src={character.image}
                  alt={character.name}
                  className="h-12 w-12 rounded-md object-cover"
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
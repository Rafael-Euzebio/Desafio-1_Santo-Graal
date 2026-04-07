import type { Character } from "../../data/characters";
import { NavListPersons } from "../nav/NavListPersonsComponets";

type MobileSidebarProps = {
    isOpen: boolean;
    onClose: () => void;
    characterSelectedId: number;
    characters: Character[];
    handleSelectCharacter: (id: number) => void;
};

export function MobileSidebar({
    isOpen,
    onClose,
    characterSelectedId,
    handleSelectCharacter,
    characters,
}: MobileSidebarProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[60] lg:hidden">
            <div
                className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                onClick={onClose}
            />

            <aside className="absolute left-0 top-0 h-full w-[280px] max-w-[85vw] border-r border-zinc-800 bg-black p-4 shadow-2xl">
                <div className="mb-4 flex items-center justify-between border-b border-zinc-800 pb-4">
                    <h2 className="text-lg font-bold text-white">Personagens</h2>

                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Fechar menu"
                        className="flex h-10 w-10 items-center justify-center rounded-md border border-zinc-700 bg-zinc-900 text-white transition hover:bg-zinc-800"
                    >
                        ✕
                    </button>
                </div>

                <NavListPersons
                    exibeTitle={false}
                    characters={characters}
                    selectedCharacterId={characterSelectedId}
                    onSelectCharacter={(id) => {
                        handleSelectCharacter(id);
                        onClose();
                    }}
                />
            </aside>
        </div>
    );
}
import { useState } from "react";
import Header from "./components/header/HeaderComponent";
import { MainContent } from "./components/main-content/SeasonContentComponent";

import { NavListPersons } from "./components/nav/NavListPersonsComponets";
import { characters } from "./data/characters";
import { charactersDetail } from "./data/charactersDetail";
import { CharacterDetails } from "./components/characters-detail/CharacterDetails";
import { MobileSidebar } from "./components/mobile-sidebar/MobileSidebar";

export default function App() {
  const [characterSelectedId, setCharacterSelectedId] = useState(1);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const handleSelectCharacter = (id: number) => {
    setCharacterSelectedId(id)
  }
  const selected = charactersDetail.find((char) => {
    return char.id === characterSelectedId;
  });

  const handleControlSidebarMobile = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen)
  }
  return (
    <div className="min-h-screen">
      <Header handleFunction={handleControlSidebarMobile} />
      <MobileSidebar
        characterSelectedId={characterSelectedId}
        handleSelectCharacter={handleSelectCharacter}
        characters={characters} isOpen={isMobileSidebarOpen} onClose={handleControlSidebarMobile} />

      <div className="grid pt-20 gap-4 p-4 
              grid-cols-1
              md:grid-cols-1
              lg:grid-cols-[260px_minmax(0,1fr)_320px]"
      >
        <div className="hidden lg:block">
          <NavListPersons
            characters={characters}
            selectedCharacterId={characterSelectedId}
            onSelectCharacter={handleSelectCharacter}
          />
        </div>
        <MainContent />
        <CharacterDetails character={selected} />
      </div>

    </div>
  )
}

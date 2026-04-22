import { useState } from "react";
import Header from "./components/header/HeaderComponent";
import { MainContent } from "./components/main-content/SeasonContentComponent";
import { NavListPersons } from "./components/nav/NavListPersonsComponets";
import { characters } from "./data/characters";
import { charactersDetail } from "./data/charactersDetail";
import { CharacterDetails } from "./components/characters-detail/CharacterDetails";
import { MobileSidebar } from "./components/mobile-sidebar/MobileSidebar";
import Footer from "./components/footer/FooterComponent";

export default function App() {
  const [characterSelectedId, setCharacterSelectedId] = useState(1);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const handleSelectCharacter = (id: number) => {
    setCharacterSelectedId(id);
  };

  const selected = charactersDetail.find((char) => {
    return char.id === characterSelectedId;
  });

  const handleControlSidebarMobile = () => {
    setIsMobileSidebarOpen((prev) => !prev);
  };

  return (
    <div className="min-h-screen flex flex-col ">
      <Header handleFunction={handleControlSidebarMobile} />

      <MobileSidebar
        characterSelectedId={characterSelectedId}
        handleSelectCharacter={handleSelectCharacter}
        characters={characters}
        isOpen={isMobileSidebarOpen}
        onClose={handleControlSidebarMobile}
      />

      <main className="flex-1 pt-20 b-20 p-4 min-h-0">
        <div
          className="
            grid h-full min-h-0 gap-4
            grid-cols-1
            md:grid-cols-1
            lg:grid-cols-[260px_minmax(0,1fr)_320px]
            xl:grid-cols-[260px_minmax(0,1fr)_320px]
          "
        >
          <div className="hidden lg:block h-full" >
            <NavListPersons
              characters={characters}
              selectedCharacterId={characterSelectedId}
              onSelectCharacter={handleSelectCharacter}
            />
          </div>
          <MainContent />

          <CharacterDetails character={selected} />

        </div>
      </main>

      <Footer message="Desenvolvido por Claudio Inácio" />
    </div>
  );
}
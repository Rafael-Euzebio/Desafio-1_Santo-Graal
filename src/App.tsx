import { CharactersDetailComponent } from "./components/characters-detail/CharactersDetailComponent";
import Header from "./components/header/HeaderComponent";
import { MainContent } from "./components/main-content/SeasonContentComponent";

import { NavListPersons } from "./components/nav/NavListPersonsComponets";
import { characters } from "./data/characters";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-16">
        <div className="grid gap-4 p-4 
      grid-cols-1
      md:grid-cols-1
      lg:grid-cols-[260px_minmax(0,1fr)_320px]"
        >
          <NavListPersons
            characters={characters}
            selectedCharacterId={1}
            onSelectCharacter={() => { }}
          />
          <MainContent />
          <CharactersDetailComponent />
        </div>
      </div>
    </div>
  )
}

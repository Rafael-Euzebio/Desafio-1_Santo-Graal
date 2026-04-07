import Header from "./components/header/HeaderComponent";
import { MainContent } from "./components/main-content/SeasonContentComponent";

import { NavListPersons } from "./components/nav/NavListPersonsComponets";
import { characters } from "./data/characters";

export default function App() {
  return (
    <div>
      <Header />
      <NavListPersons characters={characters} selectedCharacterId={1} onSelectCharacter={() => { }} />
        <MainContent />
    </div>
  )
}

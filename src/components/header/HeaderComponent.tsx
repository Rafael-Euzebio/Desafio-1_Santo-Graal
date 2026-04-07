
import logo1 from "../../images/logo-jujutsu-removebg.png"
import ImageLogo from "./ImageLogo"
import MenuButton from "./MenuButton"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 z-50 flex h-16 w-full items-center justify-between border-b border-zinc-800 bg-black px-4">
      <MenuButton />
      <ImageLogo logo={logo1} />
    </header>
  )
}

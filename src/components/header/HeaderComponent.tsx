
import logo1 from "../../images/logo-jujutsu-removebg.png"
import ImageLogo from "./ImageLogo"
import MenuButton from "./MenuButton"

interface HeaderProps {
  handleFunction: () => void;
}

export default function Header({ handleFunction }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 z-50 flex h-16 w-full items-center lg:justify-center justify-between border-b border-zinc-800 bg-black px-4">
      <MenuButton onClickFunction={handleFunction} />
      <ImageLogo logo={logo1} />
    </header>
  )
}

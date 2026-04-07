export function Header({ onMenuClick}: { onMenuClick: () => void }) {
  return (
    <header className="bg-blue-600 text-white p-4 sticky top-0 z-50 shadow-md justify-between items-center">
      <div className="font-bold text-lg">Desafio AgileDev</div>
      {/*Botão para abrir menu lateral no mobile*/}
      <button
        onClick={onMenuClick}
        className="md:hidden p-2 bg-blue-700 rounded hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-white transition-colors"
      >
        Menu
      </button>
    </header>
  )
}
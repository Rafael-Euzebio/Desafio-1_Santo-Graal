import { useState } from 'react';

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <header className="lg:col-span-full bg-white font-bold mb-4 text-gray-950 p-9 shadow-lg rounded-lg justify-between items-center">
      <nav className="relative bg-white self-start">
        <button 
          onClick={() => setMenuAberto(!menuAberto)}
          className="lg:hidden p-2 border rounded-md hover:bg-gray-100 transition-all"
        >
          <div className="space-y-1">
            <span className="block w-6 h-1.5 bg-gray-600"></span>
            <span className="block w-6 h-1.5 bg-gray-600"></span>
            <span className="block w-6 h-0.5 bg-gray-600"></span>
          </div>
        </button>
        <ul className={`
          ${menuAberto ? 'flex' : 'hidden'} 
          lg:flex flex-col lg:flex-row justify-center gap-4 mt-4 lg:mt-0 
          bg-gray-50 lg:bg-transparent p-4 lg:p-0 rounded-lg
        `}>
          <li className="hover:text-indigo-600 cursor-pointer p-2">Início</li>
          <li className="hover:text-indigo-600 cursor-pointer p-2">Dashboard</li>
          <li className="hover:text-indigo-600 cursor-pointer p-2">Introdução</li>
          <li className="hover:text-indigo-600 cursor-pointer p-2">Ferramentas</li>
          <li className="hover:text-indigo-600 cursor-pointer p-2">Configuração</li>
          <li className="hover:text-indigo-600 cursor-pointer p-2">Informações</li>
        </ul>
      </nav>
    </header>
  );
}
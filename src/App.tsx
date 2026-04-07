import { useState } from 'react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Sidebar } from './components/SideBar'
import { MainContent } from './components/MainContent'

export function App() {
  // Estado para controlar o menu no celular
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-800">
      
      <Header onMenuClick={() => setIsMenuOpen(!isMenuOpen)} />

      <div className="flex flex-1 flex-col md:flex-row max-w-7xl w-full mx-auto p-4 gap-4">
        
        {/* Barra Lateral da Esquerda - Colapsável no Mobile */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:block transition-all`}>
          <Sidebar title="Navegação">
            <ul className="space-y-3">
              <li><a href="#" className="flex items-center px-2 py-1 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors font-medium">Home</a></li>
              <li><a href="#" className="flex items-center px-2 py-1 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors font-medium">Documentação</a></li>
              <li><a href="#" className="flex items-center px-2 py-1 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors font-medium">Configurações</a></li>
            </ul>
          </Sidebar>
        </div>

        <MainContent />

        <Sidebar title="Informações do Sistema">
          <div className="bg-blue-50 p-3 rounded-md border border-blue-100 mb-4">
            <h3 className="font-semibold text-blue-800 text-sm">Texto Informativo</h3>
            <p className="text-sm text-blue-600 mt-1">Informações da página.</p>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed">
            Informações do sistema<br/>
            Informações de status gerais<br/>
          </p>
        </Sidebar>
        
      </div>

      <Footer />
    </div>
  )
}

export default App





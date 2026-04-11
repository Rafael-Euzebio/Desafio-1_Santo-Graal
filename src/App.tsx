import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="h-screen overflow-hidden grid grid-cols-1 lg:grid-cols-[250px_1fr_250px] lg:grid-rows-[auto_1fr_auto] gap-2 p-2 bg-white">
      
      <Header />

      <Sidebar />
      
      <div className='h-full overflow-y-auto no-scrollbar'>
        <MainContent />
      </div>

      <aside className="bg-white p-4 rounded-lg shadow border-r-4 border-gray-900 self-start text-left">
        <h3 className="font-bold border-b pb-5 mb-4">Atualizações</h3>
        <ul className="space-y-4 text-sm">
          <li className="border-l-2 border-green-500 pl-2">
            <p className="font-semibold text-gray-800">Servidor Online</p>
            <span className="text-xs text-gray-400">há 5 min</span>
          </li>
          <li className="border-l-2 border-blue-500 pl-2">
            <p className="font-semibold text-gray-800">Novo comentário</p>
            <span className="text-xs text-gray-400">há 1 hora</span>
          </li>
        </ul>
      </aside>

      <Footer />
      
    </div>
  );
}
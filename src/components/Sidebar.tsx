export default function Sidebar() {
  return (
    <nav className="hidden lg:block bg-white p-10 rounded-lg shadow border-l-4 self-start text-center">
      <h1 className="text-3xl font-extrabold text-gray-500 mb-4 p-2">Agile RiseUp</h1> 
      <p className="text-sm text-gray-400 mb-4">Desafio 1 - Santo Graal</p>
      <ul className="space-y-2 justify-center p-6">
        <li className="hover:text-indigo-600 cursor-pointer p-2">Notificações</li>
        <li className="hover:text-indigo-600 cursor-pointer p-2">Explore</li>
        <li className="hover:text-indigo-600 cursor-pointer p-2">Novidades</li>
        <li className="hover:text-indigo-600 cursor-pointer p-2">Blog</li>
        <li className="hover:text-indigo-600 cursor-pointer p-2">Comunidade</li>
        <li className="hover:text-indigo-600 cursor-pointer p-2">Help</li>
      </ul>
    </nav>
  );
}
export default function Footer() {
  const anoAtual = new Date().getFullYear();

  return (
    <footer className="lg:col-span-full bg-gray-900 text-gray-400 p-4 text-center text-sm rounded-lg mt-4">
      <div className="flex flex-col md:flex-row justify-center items-center gap-2">
        <span>&copy; {anoAtual} Agile RiseUp</span>
        <span className="hidden md:inline">|</span>
        <span>Projeto Santo Graal - Todos os direitos reservados.</span>
      </div>
    </footer>
  );
}
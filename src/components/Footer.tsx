export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-[1800px] flex-col gap-3 px-3 py-4 text-sm text-slate-500 sm:px-4 md:flex-row md:items-center md:justify-between md:px-6 2xl:px-8">
        <p>
          © 2026 Holy Grail App. Interface feita com React, TypeScript e Tailwind CSS.
        </p>

        <div className="flex items-center gap-4">
          <a
            href="#"
            className="rounded-md transition hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-200"
          >
            Documentação
          </a>
          <a
            href="#"
            className="rounded-md transition hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-200"
          >
            Suporte
          </a>
        </div>
      </div>
    </footer>
  )
}
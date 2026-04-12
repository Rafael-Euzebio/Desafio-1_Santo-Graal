import { Bell, LayoutDashboard, Menu, Search, Settings, User } from 'lucide-react'

type HeaderProps = {
  onOpenMobileMenu: () => void
}

export function Header({ onOpenMobileMenu }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/60 bg-white/75 backdrop-blur-2xl">
      <div className="mx-auto flex h-16 w-full max-w-[1800px] items-center justify-between gap-3 px-3 sm:px-4 md:h-20 md:px-6 2xl:px-8">
        <div className="flex min-w-0 items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={onOpenMobileMenu}
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-sky-200 xl:hidden"
            aria-label="Abrir menu"
          >
            <Menu className="h-5 w-5" />
          </button>

          <div className="flex min-w-0 items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-sky-700 text-white shadow-lg shadow-sky-100">
              <LayoutDashboard className="h-5 w-5" />
            </div>

            <div className="min-w-0">
              <p className="truncate text-[10px] font-bold uppercase tracking-[0.28em] text-sky-600 sm:text-xs">
                Holy Grail Layout
              </p>
              <h1 className="truncate text-sm font-semibold text-slate-900 sm:text-base md:text-xl">
                Painel Moderno Responsivo
              </h1>
            </div>
          </div>
        </div>

        <div className="hidden min-w-0 flex-1 items-center justify-center px-4 lg:flex xl:px-8">
          <label className="flex w-full max-w-2xl items-center gap-3 rounded-2xl border border-slate-200/80 bg-white/80 px-4 py-3 shadow-inner shadow-slate-100 transition focus-within:border-sky-200 focus-within:ring-4 focus-within:ring-sky-100">
            <Search className="h-4 w-4 shrink-0 text-slate-400" />
            <input
              type="text"
              placeholder="Buscar projetos, tarefas, clientes ou relatórios"
              className="w-full min-w-0 bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
            />
          </label>
        </div>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <button className="relative inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-sky-200">
            <Bell className="h-5 w-5" />
            <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-rose-500 ring-2 ring-white" />
          </button>

          <button className="hidden sm:inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-sky-200">
            <Settings className="h-5 w-5" />
          </button>

          <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-2.5 py-2 shadow-sm sm:px-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-100 via-white to-slate-100 text-slate-700">
              <User className="h-4 w-4" />
            </div>

            <div className="hidden lg:block">
              <p className="text-sm font-semibold text-slate-900">Hugo Alexandre</p>
              <p className="text-xs text-slate-500">Administrador</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
import {
  Bell,
  FolderKanban,
  LayoutDashboard,
  Settings,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react'
import { MenuItem } from './MenuItem'

type LeftSidebarProps = {
  collapsed?: boolean
}

export function LeftSidebar({ collapsed = false }: LeftSidebarProps) {
  return (
    <nav
      aria-label="Navegação principal"
      className={[
        'h-full min-w-0 border-r border-slate-200/70 bg-white/90 backdrop-blur-xl',
        collapsed ? 'w-[92px]' : 'w-full',
      ].join(' ')}
    >
      <div className="flex h-full flex-col gap-6 p-4 xl:p-5">
        <section className="overflow-hidden rounded-[28px] border border-slate-200/60 bg-gradient-to-br from-slate-950 via-slate-900 to-sky-700 p-4 text-white shadow-lg shadow-sky-100">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/10 backdrop-blur">
              <Sparkles className="h-5 w-5" />
            </div>

            {!collapsed && (
              <div className="min-w-0">
                <p className="truncate text-[11px] uppercase tracking-[0.24em] text-sky-100">
                  Workspace
                </p>
                <h2 className="truncate text-sm font-semibold">Equipe de Produto</h2>
              </div>
            )}
          </div>
        </section>

        <div>
          {!collapsed && (
            <p className="px-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
              Principal
            </p>
          )}

          <div className="mt-3 space-y-2">
            <MenuItem
              icon={<LayoutDashboard className="h-4 w-4" />}
              label="Dashboard"
              active
              collapsed={collapsed}
            />
            <MenuItem
              icon={<FolderKanban className="h-4 w-4" />}
              label="Projetos"
              badge="12"
              collapsed={collapsed}
            />
            <MenuItem
              icon={<Users className="h-4 w-4" />}
              label="Equipe"
              badge="08"
              collapsed={collapsed}
            />
            <MenuItem
              icon={<Bell className="h-4 w-4" />}
              label="Alertas"
              badge="04"
              collapsed={collapsed}
            />
            <MenuItem
              icon={<ShieldCheck className="h-4 w-4" />}
              label="Segurança"
              collapsed={collapsed}
            />
            <MenuItem
              icon={<Settings className="h-4 w-4" />}
              label="Configurações"
              collapsed={collapsed}
            />
          </div>
        </div>

        <section className="rounded-[28px] border border-slate-200 bg-slate-50 p-4 shadow-sm">
          <p className="text-sm font-semibold text-slate-900">Resumo rápido</p>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            12 tarefas em aberto, 4 revisões pendentes e 3 reuniões hoje.
          </p>

          {!collapsed && (
            <button className="mt-4 inline-flex rounded-2xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-200">
              Ver detalhes
            </button>
          )}
        </section>
      </div>
    </nav>
  )
}
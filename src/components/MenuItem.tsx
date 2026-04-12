import type { ReactNode } from 'react'

type MenuItemProps = {
  icon: ReactNode
  label: string
  active?: boolean
  collapsed?: boolean
  badge?: string
}

export function MenuItem({
  icon,
  label,
  active = false,
  collapsed = false,
  badge,
}: MenuItemProps) {
  return (
    <button
      className={[
        'group flex w-full items-center gap-3 rounded-2xl px-3.5 py-3 text-left text-sm font-medium transition duration-200 focus:outline-none focus:ring-2 focus:ring-sky-200',
        active
          ? 'bg-gradient-to-r from-slate-950 via-slate-900 to-sky-700 text-white shadow-lg shadow-sky-100'
          : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900',
      ].join(' ')}
    >
      <span className="shrink-0">{icon}</span>

      {!collapsed && <span className="truncate">{label}</span>}

      {!collapsed && badge && (
        <span
          className={[
            'ml-auto rounded-full px-2 py-0.5 text-[11px] font-semibold',
            active ? 'bg-white/15 text-white' : 'bg-slate-200 text-slate-700',
          ].join(' ')}
        >
          {badge}
        </span>
      )}
    </button>
  )
}
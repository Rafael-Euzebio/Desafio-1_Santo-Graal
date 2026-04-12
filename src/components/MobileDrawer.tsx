import { X } from 'lucide-react'
import { LeftSidebar } from './LeftSidebar'

type MobileDrawerProps = {
  open: boolean
  onClose: () => void
}

export function MobileDrawer({ open, onClose }: MobileDrawerProps) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-[60] xl:hidden" role="dialog" aria-modal="true">
      <button
        className="absolute inset-0 bg-slate-950/50 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Fechar menu"
      />

      <div className="absolute left-0 top-0 h-full w-[90%] max-w-sm bg-white shadow-2xl sm:w-[78%]">
        <div className="flex items-center justify-between border-b border-slate-200 p-4">
          <div>
            <p className="text-sm font-medium text-slate-500">Menu</p>
            <h2 className="text-lg font-semibold text-slate-900">Navegação</h2>
          </div>

          <button
            onClick={onClose}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 text-slate-700 transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-sky-200"
            aria-label="Fechar"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="h-[calc(100%-76px)] overflow-y-auto">
          <LeftSidebar />
        </div>
      </div>
    </div>
  )
}
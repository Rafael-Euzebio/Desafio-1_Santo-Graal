import { Clock3, ShieldCheck, Sparkles } from 'lucide-react'

export function RightSidebar() {
  return (
    <aside className="h-full min-w-0 border-l border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="flex h-full flex-col gap-6 p-4 2xl:p-5">
        <section className="rounded-[28px] border border-slate-200 bg-gradient-to-br from-slate-900 via-slate-800 to-sky-700 p-5 text-white shadow-lg shadow-sky-100">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-sky-100">
                Status do sistema
              </p>
              <h3 className="text-base font-semibold">Painel operacional</h3>
            </div>
          </div>

          <p className="mt-4 text-sm leading-6 text-slate-200">
            Tudo funcionando normalmente. Atualizações recentes aplicadas com sucesso.
          </p>
        </section>

        <section className="rounded-[28px] border border-slate-200 bg-slate-50 p-4">
          <p className="text-sm font-medium text-slate-500">Notificações</p>

          <div className="mt-4 space-y-3">
            <div className="rounded-2xl bg-white p-3 shadow-sm">
              <p className="text-sm font-semibold text-slate-900">Nova mensagem</p>
              <p className="mt-1 text-sm text-slate-600">
                Você recebeu feedback sobre a interface mobile.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-3 shadow-sm">
              <p className="text-sm font-semibold text-slate-900">Build concluído</p>
              <p className="mt-1 text-sm text-slate-600">
                A aplicação compilou em ambiente local sem erros.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-[28px] border border-slate-200 bg-white p-4 shadow-sm">
          <p className="text-sm font-medium text-slate-500">Agenda</p>

          <div className="mt-4 space-y-3 text-sm text-slate-600">
            <div className="flex items-start gap-3 rounded-2xl bg-slate-50 p-3">
              <div className="mt-0.5 text-sky-600">
                <Clock3 className="h-4 w-4" />
              </div>
              <div>
                <p className="font-semibold text-slate-900">Revisão de UI</p>
                <p>10:30 • Sala principal</p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-2xl bg-slate-50 p-3">
              <div className="mt-0.5 text-emerald-600">
                <ShieldCheck className="h-4 w-4" />
              </div>
              <div>
                <p className="font-semibold text-slate-900">Deploy de teste</p>
                <p>15:00 • Ambiente staging</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </aside>
  )
}
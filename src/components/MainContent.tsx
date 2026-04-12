import { ArrowRight, BarChart3, Activity, Wallet, CheckCircle2 } from 'lucide-react'
import { MetricCard } from './MetricCard'
import { TaskItem } from './TaskItem'

const metrics = [
  {
    title: 'Receita mensal',
    value: 'R$ 18.450',
    description: '+12% em relação ao mês anterior',
    trend: 'Alta de 12%',
  },
  {
    title: 'Projetos ativos',
    value: '08',
    description: '2 em fase final de entrega',
    trend: '2 entregas próximas',
  },
  {
    title: 'Tickets abertos',
    value: '27',
    description: '5 com prioridade alta',
    trend: 'Atenção imediata',
  },
]

const progressItems = [
  { label: 'Holy Grail Layout', value: 100 },
  { label: 'Responsividade', value: 96 },
  { label: 'Componentização', value: 90 },
  { label: 'Experiência visual', value: 88 },
]

const chartData = [35, 52, 40, 68, 57, 73, 88]

export function MainContent() {
  const maxValue = Math.max(...chartData)

  return (
    <main className="min-w-0 bg-[radial-gradient(circle_at_top,#dbeafe_0%,#f8fafc_22%,#f8fafc_100%)]">
      <div className="flex h-full flex-col gap-5 px-3 py-4 sm:px-4 md:gap-6 md:p-6 2xl:px-8">
        <section className="relative overflow-hidden rounded-[32px] border border-slate-200/70 bg-gradient-to-br from-slate-950 via-slate-900 to-sky-800 p-5 text-white shadow-xl shadow-sky-100/60 sm:p-6 lg:p-8">
          <div className="absolute -right-16 top-0 h-44 w-44 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute bottom-0 left-1/3 h-24 w-24 rounded-full bg-sky-300/10 blur-2xl" />

          <div className="relative z-10 max-w-3xl">
            <p className="inline-flex rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-sky-100 sm:text-xs">
              Visão geral da aplicação
            </p>

            <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl 2xl:text-5xl">
              Interface moderna inspirada em aplicações reais
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
              O conteúdo principal recebe prioridade total no mobile, enquanto o desktop
              mantém a experiência completa do Holy Grail Layout com header, navegação
              lateral dupla e rodapé estruturado.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <button className="inline-flex items-center justify-center rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-200">
                Ver relatório completo
              </button>

              <button className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-sky-200">
                Compartilhar painel
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 gap-4 md:grid-cols-2 2xl:grid-cols-3">
          {metrics.map((metric) => (
            <MetricCard key={metric.title} {...metric} />
          ))}
        </section>

        <section className="grid grid-cols-1 gap-5 xl:grid-cols-[1.1fr_0.9fr] 2xl:grid-cols-[1.15fr_0.85fr]">
          <article className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm md:p-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">Resumo analítico</p>
                <h3 className="text-lg font-semibold text-slate-900">
                  Performance semanal
                </h3>
              </div>

              <div className="inline-flex w-fit items-center gap-2 rounded-2xl bg-sky-50 px-3 py-2 text-sm font-medium text-sky-700">
                <BarChart3 className="h-4 w-4" />
                Atualizado hoje
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
              <div className="rounded-2xl bg-slate-50 p-4">
                <div className="flex items-center gap-2 text-slate-700">
                  <Wallet className="h-4 w-4" />
                  <span className="text-sm font-medium">Receita</span>
                </div>
                <p className="mt-3 text-2xl font-bold text-slate-900">R$ 7.820</p>
                <p className="mt-1 text-sm text-slate-500">Últimos 7 dias</p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4">
                <div className="flex items-center gap-2 text-slate-700">
                  <Activity className="h-4 w-4" />
                  <span className="text-sm font-medium">Atividade</span>
                </div>
                <p className="mt-3 text-2xl font-bold text-slate-900">84%</p>
                <p className="mt-1 text-sm text-slate-500">Produtividade média</p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4">
                <div className="flex items-center gap-2 text-slate-700">
                  <CheckCircle2 className="h-4 w-4" />
                  <span className="text-sm font-medium">Entregas</span>
                </div>
                <p className="mt-3 text-2xl font-bold text-slate-900">19</p>
                <p className="mt-1 text-sm text-slate-500">Concluídas no período</p>
              </div>
            </div>

            <div className="mt-6 rounded-[24px] border border-slate-200 bg-slate-50 p-4">
              <div className="mb-4 flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-medium text-slate-700">Fluxo de crescimento</p>
                  <p className="text-sm text-slate-500">Indicador visual responsivo</p>
                </div>
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                  +18%
                </span>
              </div>

              <div className="flex h-52 items-end gap-2 sm:gap-3">
                {chartData.map((value, index) => (
                  <div key={index} className="flex flex-1 flex-col items-center justify-end gap-2">
                    <div
                      className="w-full rounded-t-2xl bg-gradient-to-t from-slate-900 via-sky-700 to-sky-400 transition hover:opacity-90"
                      style={{ height: `${(value / maxValue) * 100}%` }}
                    />
                    <span className="text-[11px] font-medium text-slate-500">
                      {['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'][index]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </article>

          <article className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm md:p-6">
            <p className="text-sm font-medium text-slate-500">Progresso</p>
            <h3 className="text-lg font-semibold text-slate-900">Entrega do desafio</h3>

            <div className="mt-5 space-y-4">
              {progressItems.map((item) => (
                <div key={item.label}>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="font-medium text-slate-700">{item.label}</span>
                    <span className="text-slate-500">{item.value}%</span>
                  </div>

                  <div className="h-2.5 rounded-full bg-slate-100">
                    <div
                      className="h-2.5 rounded-full bg-gradient-to-r from-slate-900 to-sky-600"
                      style={{ width: `${item.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-[24px] bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">Checklist técnico</p>

              <div className="mt-4 space-y-3">
                {[
                  'Layout Holy Grail implementado',
                  'Responsividade em múltiplos breakpoints',
                  'Componentização com React + TypeScript',
                  'Tailwind CSS aplicado',
                  'Sem scroll horizontal indevido',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                      <CheckCircle2 className="h-4 w-4" />
                    </span>
                    <span className="text-sm text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </article>
        </section>

        <section className="grid grid-cols-1 gap-5 2xl:grid-cols-[1.35fr_0.65fr]">
          <article className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm md:p-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">Tarefas recentes</p>
                <h3 className="text-lg font-semibold text-slate-900">
                  Atividade da equipe
                </h3>
              </div>

              <button className="rounded-2xl border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-sky-200">
                Ver todas
              </button>
            </div>

            <div className="mt-5 space-y-3">
              <TaskItem
                title="Ajustar layout mobile da dashboard"
                status="Em andamento"
                owner="Hugo"
              />
              <TaskItem
                title="Criar drawer para navegação lateral"
                status="Revisão"
                owner="Ana"
              />
              <TaskItem
                title="Refinar componentes reutilizáveis"
                status="Concluído"
                owner="Carlos"
              />
              <TaskItem
                title="Testar build de produção com Vite"
                status="Pendente"
                owner="Equipe"
              />
            </div>
          </article>

          <article className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm md:p-6">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm font-medium text-slate-500">Visão rápida</p>
                <h3 className="text-lg font-semibold text-slate-900">Próximas ações</h3>
              </div>
              <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">
                3 pendências
              </span>
            </div>

            <div className="mt-5 space-y-3">
              {[
                'Aprovar layout final para entrega',
                'Executar testes em tablet e ultrawide',
                'Validar npm run build',
              ].map((item) => (
                <div key={item} className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-sm font-medium text-slate-800">{item}</p>
                </div>
              ))}
            </div>
          </article>
        </section>

        <section className="grid grid-cols-1 gap-5 lg:grid-cols-2 xl:hidden">
          <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-medium text-slate-500">Notificações</p>
            <div className="mt-4 space-y-3">
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">Nova mensagem</p>
                <p className="mt-1 text-sm text-slate-600">
                  Você recebeu feedback sobre a interface mobile.
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">Build concluído</p>
                <p className="mt-1 text-sm text-slate-600">
                  A aplicação compilou em ambiente local sem erros.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-medium text-slate-500">Agenda</p>
            <div className="mt-4 space-y-3">
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="font-semibold text-slate-900">Revisão de UI</p>
                <p className="mt-1 text-sm text-slate-600">10:30 • Sala principal</p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="font-semibold text-slate-900">Deploy de teste</p>
                <p className="mt-1 text-sm text-slate-600">15:00 • Ambiente staging</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
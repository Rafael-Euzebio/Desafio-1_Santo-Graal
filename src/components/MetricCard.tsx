import { TrendingUp } from 'lucide-react'

type MetricCardProps = {
  title: string
  value: string
  description: string
  trend: string
}

export function MetricCard({
  title,
  value,
  description,
  trend,
}: MetricCardProps) {
  return (
    <article className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/60 md:p-6">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-medium text-slate-500">{title}</p>
          <p className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-[2rem]">
            {value}
          </p>
        </div>

        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
          <TrendingUp className="h-5 w-5" />
        </div>
      </div>

      <p className="mt-2 text-sm text-slate-600">{description}</p>

      <p className="mt-4 inline-flex rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
        {trend}
      </p>
    </article>
  )
}
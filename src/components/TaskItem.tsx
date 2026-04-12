type TaskItemProps = {
  title: string
  status: string
  owner: string
}

export function TaskItem({ title, status, owner }: TaskItemProps) {
  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-4 transition duration-200 hover:border-sky-200 hover:shadow-md sm:flex-row sm:items-center sm:justify-between">
      <div className="min-w-0">
        <h3 className="truncate text-sm font-semibold text-slate-900">{title}</h3>
        <p className="mt-1 text-sm text-slate-500">Responsável: {owner}</p>
      </div>

      <span className="inline-flex w-fit rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
        {status}
      </span>
    </div>
  )
}
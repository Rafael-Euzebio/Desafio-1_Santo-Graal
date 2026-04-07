import type { ReactNode } from 'react';

interface SidebarProps {
  title: string;
  children: ReactNode;
}

export function Sidebar({ title, children }: SidebarProps) {
  return (
    <aside className="bg-blue-100 p-5 w-full md:w-64 flex-shrink-0 rounded-lg shadow-sm border border-slate-200">
      <h2 className="font-bold text-lg mb-4 text-slate-800">{title}</h2>
      {children}
    </aside>
  )
}


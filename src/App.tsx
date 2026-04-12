import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Header } from './components/Header'
import { LeftSidebar } from './components/LeftSidebar'
import { MainContent } from './components/MainContent'
import { RightSidebar } from './components/RightSidebar'
import { Footer } from './components/Footer'
import { MobileDrawer } from './components/MobileDrawer'

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-100 text-slate-900">
      <MobileDrawer
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />

      <div className="grid min-h-screen grid-rows-[auto_1fr_auto]">
        <Header onOpenMobileMenu={() => setMobileMenuOpen(true)} />

        <div className="mx-auto grid min-h-0 w-full max-w-[1800px] grid-cols-1 xl:grid-cols-[auto_minmax(0,1fr)_22rem] 2xl:grid-cols-[auto_minmax(0,1fr)_24rem]">
          <div className="hidden xl:block">
            <div className="relative h-full">
              <LeftSidebar collapsed={sidebarCollapsed} />

              <button
                type="button"
                onClick={() => setSidebarCollapsed((prev) => !prev)}
                className="absolute -right-4 top-6 inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-lg transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-sky-200"
                aria-label={sidebarCollapsed ? 'Expandir sidebar' : 'Recolher sidebar'}
              >
                {sidebarCollapsed ? (
                  <ChevronRight className="h-4 w-4" />
                ) : (
                  <ChevronLeft className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>

          <MainContent />

          <div className="hidden xl:block">
            <RightSidebar />
          </div>
        </div>

        <Footer />
      </div>
    </div>
  )
}
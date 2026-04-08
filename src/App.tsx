import { useState } from 'react'
import { Menu } from 'lucide-react'
import logoWithText from './assets/logo_with_text.svg'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard.tsx'

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-20 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar — drawer */}
      <div
        className={`fixed inset-y-0 left-0 z-30 transition-all duration-300 md:relative md:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } ${collapsed ? 'md:w-16' : 'md:w-52'}`}
      >
        <Sidebar
          collapsed={collapsed}
          onToggleCollapse={() => setCollapsed(prevState => !prevState)}
          onClose={() => setSidebarOpen(false)}
        />
      </div>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto min-w-0">
        {/* Mobile top bar */}
        <div className="flex items-center gap-3 px-4 py-3 bg-white border-b border-(--gray-7) md:hidden">
          <button
            onClick={() => setSidebarOpen(true)}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <Menu size={20} />
          </button>
          <div className="flex items-center gap-2">
            <img src={logoWithText} alt="Logo" className="w-32 h-8" />
          </div>
        </div>

        <div className="p-4 md:p-6 space-y-6 h-full">
          <Dashboard />
        </div>
      </main>
    </div>
  )
}

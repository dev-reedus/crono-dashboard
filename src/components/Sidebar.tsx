import { useState } from 'react'
import logoWithText from '../assets/logo_with_text.svg'
import avatarPlaceholder from '../assets/avatar_placeholder.svg'
import trialBg from '../assets/trial_bg.png'
import {
  BarChart2,
  ChartNoAxesCombined,
  ChevronDown,
  ChevronsLeft,
  ChevronsRight,
  Coins,
  FilePlusCorner,
  GiftIcon,
  ListTodo,
  MailboxIcon,
  PanelsTopLeftIcon,
  Search,
} from 'lucide-react'

const NAV_ITEMS = [
  { icon: PanelsTopLeftIcon, label: 'Dashboard', active: true },
  { icon: Search, label: 'Find New', active: false },
  { icon: PanelsTopLeftIcon, label: 'Lists', active: false },
  { icon: FilePlusCorner, label: 'Templates', active: false },
  { icon: ChartNoAxesCombined, label: 'Sequences', active: false },
  { icon: ListTodo, label: 'Tasks', active: false },
  { icon: MailboxIcon, label: 'Inbox', active: false, badge: 24 },
  { icon: Coins, label: 'Deals', active: false },
  {
    icon: BarChart2,
    label: 'Analytics',
    active: false,
    submenu: [
      {
        icon: BarChart2,
        label: 'Analytics Sub1',
        active: false,
      },
      { icon: BarChart2, label: 'Analytics Sub2', active: false },
    ],
  },
]

export default function Sidebar({
  collapsed,
  onToggleCollapse,
  onClose,
}: {
  collapsed?: boolean
  onToggleCollapse?: () => void
  onClose?: () => void
}) {
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)

  function toggleSubmenu(label: string) {
    setOpenSubmenu(prev => (prev === label ? null : label))
  }

  return (
    <aside
      className={`shrink-0 bg-white flex flex-col h-screen border-r border-(--gray-4) transition-all duration-300 ${collapsed ? 'w-16' : 'w-52'}`}
    >
      {/* Logo */}
      <div
        className={`py-5 flex items-center border-b border-(--gray-4) ${collapsed ? 'justify-center px-3' : 'justify-between px-3'}`}
      >
        {!collapsed && <img src={logoWithText} alt="Logo" className="w-32 h-8" />}
        {/* Mobile: close sidebar */}
        <button
          onClick={onClose}
          className="md:hidden flex w-6 h-6 rounded-full bg-(--gray-7) items-center justify-center text-(--gray-1) transition-colors shrink-0 cursor-pointer"
        >
          <ChevronsLeft size={16} />
        </button>
        {/* Desktop: collapse/expand */}
        <button
          onClick={onToggleCollapse}
          className="hidden md:flex w-6 h-6 rounded-full bg-(--gray-7) items-center justify-center text-(--gray-1) transition-colors shrink-0 cursor-pointer"
        >
          {collapsed ? <ChevronsRight size={16} /> : <ChevronsLeft size={16} />}
        </button>
      </div>

      {/* Nav */}
      <nav className="flex-1 py-2 space-y-4">
        {NAV_ITEMS.map(({ icon: Icon, label, active, badge, submenu }) => (
          <div key={label}>
            <button
              title={collapsed ? label : undefined}
              onClick={submenu ? () => toggleSubmenu(label) : undefined}
              className={`w-full flex items-center gap-3 px-4 cursor-pointer py-1 box-border text-sm leading-5 transition-colors relative ${
                collapsed ? 'justify-center' : ''
              } ${
                active
                  ? 'text-(--main-color) font-medium'
                  : 'text-(--gray-1) hover:text-(--main-color)'
              }`}
            >
              {active && (
                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-full rounded-br-md rounded-tr-md bg-(--main-color)" />
              )}
              <div className="relative">
                <Icon size={24} />
                {badge && collapsed && (
                  <span
                    className="absolute -top-0.5 -left-0.5 w-3 h-3 rounded-full border-2 border-white"
                    style={{ backgroundColor: 'var(--yellow-secondary)' }}
                  />
                )}
              </div>
              <span
                className={`min-w-0 flex flex-col transition-opacity whitespace-nowrap overflow-hidden ${collapsed ? 'opacity-0 duration-0' : 'opacity-100 duration-150 delay-200'}`}
              >
                {!collapsed && label}{' '}
              </span>
              {badge && !collapsed && (
                <span
                  className="text-xs ml-auto bg-(--yellow-secondary) text-white font-semibold px-2 py-0.5 rounded-full"
                  style={{
                    backgroundColor: `var(${badge > 6 ? '--yellow-secondary' : '--green-main'})`,
                  }}
                >
                  {badge}
                </span>
              )}
              {submenu && !collapsed && (
                <ChevronDown
                  size={18}
                  className={`ml-auto mr-1.5 shrink-0 transition-transform duration-200 ${openSubmenu === label ? 'rotate-180' : ''}`}
                />
              )}
            </button>

            {submenu && !collapsed && (
              <div
                className={`grid transition-[grid-template-rows] duration-200 ease-in-out ${openSubmenu === label ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
              >
                <div className="overflow-hidden">
                  <div className="mt-1 space-y-1">
                    {submenu.map(({ icon: SubIcon, label: subLabel }) => (
                      <button
                        key={subLabel}
                        className="w-full flex items-center gap-3 pl-10 pr-4 py-1 text-sm text-(--gray-1) hover:text-(--main-color) transition-colors cursor-pointer"
                      >
                        <SubIcon size={18} />
                        <span className="whitespace-nowrap overflow-hidden">{subLabel}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* Trial badge */}
      {!collapsed && (
        <div
          className="mx-2 mb-3 rounded-xl p-2 py-3 flex flex-col gap-2 overflow-hidden whitespace-nowrap relative"
          style={{
            backgroundColor: 'var(--yellow-light)',
            backgroundImage: `url(${trialBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <p className="relative text-(--main-dark) text-sm  font-semibold leading-tight">
            Trial ends in 2 days
          </p>
          <button
            className="relative w-4/6 rounded-md py-1 text-xs cursor-pointer!"
            style={{ backgroundColor: 'var(--yellow-secondary)', color: 'white' }}
          >
            Upgrade Plan <GiftIcon size={16} className="inline-block ml-1" />
          </button>
        </div>
      )}

      {/* Bottom */}
      <div className="px-0.5 py-3 border-t border-(--gray-4)">
        <div className={`flex items-center gap-3 px-3 py-2 ${collapsed ? 'justify-center' : ''}`}>
          <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0">
            <img
              src={avatarPlaceholder}
              alt="User avatar"
              className="rounded-full"
            />
          </div>
          {!collapsed && (
            <div className="min-w-0 flex-1 flex flex-col text-sm truncate">
              <p className="text-(--main-dark)">William Robertson</p>
              <p className="text-(--gray-1)">Sales</p>
            </div>
          )}
        </div>
      </div>
    </aside>
  )
}

import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { CheckCircle, Trash2 } from 'lucide-react'
import amazonImg from '../../assets/amazon.png'
import type { Signal, SignalType } from '../../data/signals'

const TYPE_LABELS: Record<SignalType, { label: string; color: string }> = {
  role_change: { label: 'Role change', color: 'purple-main' },
  company_change: { label: 'Company change', color: 'blue-main' },
  website_view: { label: 'Website view', color: 'pink-main' },
  news: { label: 'News', color: 'green-main' },
}

function formatDate(isoString: string): string {
  const date = new Date(isoString)

  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

function ActionMenu({
  anchorRect,
  onDelete,
  onComplete,
  onClose,
}: {
  anchorRect: DOMRect
  onDelete: () => void
  onComplete: () => void
  onClose: () => void
}) {
  const menuHeight = 110
  const top = anchorRect.top - menuHeight - 8
  const right = window.innerWidth - anchorRect.right

  return createPortal(
    <>
      <div className="fixed inset-0 z-40" onClick={onClose} />
      <div
        className="fixed z-50 w-48 bg-white rounded-xl shadow-xl border border-gray-100 p-2 overflow-hidden"
        style={{ top, right }}
      >
        <button
          onClick={onComplete}
          className="hover:bg-(--main-light) rounded-md w-full flex items-center justify-between px-1 py-2.5 text-sm text-(--main-color-dark) transition-colors"
        >
          <span>Complete</span>
          <CheckCircle size={20} className="text-(--main-color-dark) shrink-0" />
        </button>
        <button
          onClick={onDelete}
          className="w-full flex items-center rounded-md justify-between px-1 py-2.5 text-sm text-(--red-main) hover:bg-red-50 transition-colors"
        >
          <span>Delete</span>
          <Trash2 size={20} className="shrink-0" />
        </button>
      </div>
    </>,
    document.body
  )
}

export default function SignalItem({
  signal,
  onDelete,
  onComplete,
}: {
  signal: Signal
  onDelete?: (id: string) => void
  onComplete?: (id: string) => void
}) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [anchorRect, setAnchorRect] = useState<DOMRect | null>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const openMenu = () => {
    if (buttonRef.current) {
      setAnchorRect(buttonRef.current.getBoundingClientRect())
      setMenuOpen(true)
    }
  }

  useEffect(() => {
    if (!menuOpen) return
    const update = () => {
      if (buttonRef.current) setAnchorRect(buttonRef.current.getBoundingClientRect())
    }
    window.addEventListener('scroll', update, true)
    return () => window.removeEventListener('scroll', update, true)
  }, [menuOpen])

  const handleDelete = () => {
    setMenuOpen(false)
    onDelete?.(signal.id)
  }

  const handleComplete = () => {
    setMenuOpen(false)
    onComplete?.(signal.id)
  }

  return (
    <div className="relative flex items-center gap-2 md:gap-5 px-0.5 py-4.5 md:px-4 bg-white hover:bg-gray-50 transition-colors">
      <div className="relative shrink-0">
        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
          <img className="rounded-full" src={amazonImg} alt={`brand icon`} />
        </div>
        <span
          className="absolute -top-0.5 -left-0.5 w-3 h-3 rounded-full border-2 border-white"
          style={{ backgroundColor: 'var(--yellow-secondary)' }}
        />
      </div>

      {/* Main content */}
      <div className="flex-1w min-w-0">
        <div
          className="font-semibold text-gray-900 text-sm leading-snug truncate"
          dangerouslySetInnerHTML={{ __html: signal.title }}
        ></div>
        <div className="flex items-start md:items-center flex-col md:flex-row gap-2 mt-0.5">
          <p className="text-xs" style={{ color: `var(--${TYPE_LABELS[signal.type].color})` }}>
            {TYPE_LABELS[signal.type].label}
          </p>
          {signal.inSequence && (
            <span className="text-[8px] md:text-[10px] font-semibold px-2 py-0.5 rounded-full bg-(--main-light) text-(--main-color-dark) leading-tight">
              In Sequence
            </span>
          )}
        </div>
      </div>

      {/* Action */}
      <div className="flex ml-auto items-center gap-2 shrink-0">
        <span className="text-xs text-(--gray-1)">{formatDate(signal.date)}</span>

        <button
          ref={buttonRef}
          onClick={openMenu}
          className="px-6 py-1.5 rounded-full bg-(--main-color) text-sm text-white font-normal transition-colors cursor-pointer hover:bg-(--main-color-dark)"
        >
          Action
        </button>

        {menuOpen && anchorRect && (
          <ActionMenu
            anchorRect={anchorRect}
            onDelete={handleDelete}
            onComplete={handleComplete}
            onClose={() => setMenuOpen(false)}
          />
        )}
      </div>
    </div>
  )
}

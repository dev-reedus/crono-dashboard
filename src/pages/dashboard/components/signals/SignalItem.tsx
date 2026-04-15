import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { CheckCircle, Trash2 } from 'lucide-react'
import amazonImg from '../../assets/amazon.png'
import type { Signal, SignalType } from '../../data/signals'

const TYPE_LABELS: Record<SignalType, { label: string; color: string }> = {
  role_change: { label: 'Role change', color: 'purple-main' },
  company_change: { label: 'Company change', color: 'blue-hover' },
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
  // box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.1);

  return createPortal(
    <>
      <div className="fixed inset-0 z-40" onClick={onClose} />
      <div
        className="fixed z-50 w-54 bg-white rounded-xl shadow-[0px_4px_8px_0px_rgba(0,0,0,0.1)] border border-(--gray-4) p-1.75 overflow-hidden"
        style={{ top, right }}
      >
        <button
          onClick={onComplete}
          className="hover:bg-(--main-light) rounded-md w-full flex items-center justify-between px-2 py-2.5 text-sm text-(--main-color-dark) transition-colors"
        >
          <span>Complete</span>
          <CheckCircle size={20} className="text-(--main-color-dark) shrink-0" />
        </button>
        <button
          onClick={onDelete}
          className="w-full flex items-center rounded-md justify-between px-2 py-2.5 text-sm text-(--main-dark) hover:text-(--red-main) hover:bg-red-50 transition-colors"
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
    <div className=" px-4.25 first:pt-0 relative flex items-center gap-2 md:gap-5 py-4 md:px-4 bg-white hover:bg-(--gray-6) transition-colors">
      <div className="relative shrink-0">
        <div className="w-8 h-8 rounded-full border border-(--gray-5) flex items-center justify-center">
          <img className="rounded-full" src={amazonImg} alt={`brand icon`} />
        </div>
        <span
          className="absolute -top-0.5 -left-0.5 w-2.5 h-2.5 rounded-full border-2 border-white"
          style={{ backgroundColor: 'var(--yellow-secondary)' }}
        />
      </div>

      {/* Main content */}
      <div className="flex-1 min-w-0">
        <div className="text-sm leading-5.5 text-(--main-dark) truncate">
          <span className=" font-semibold ">{signal.customer} </span>
          <span dangerouslySetInnerHTML={{ __html: signal.event }}></span>
        </div>
        <div className="flex items-start md:items-center flex-col md:flex-row gap-2 mt-0.5">
          <p className="text-xs" style={{ color: `var(--${TYPE_LABELS[signal.type].color})` }}>
            {TYPE_LABELS[signal.type].label}
          </p>
          {signal.inSequence && (
            <span className="text-[8px] md:text-[10px] leading-3 font-medium px-1 py-0.5 rounded-full bg-(--main-light) text-(--main-color-dark)">
              In Sequence
            </span>
          )}
        </div>
      </div>

      {/* Action */}
      <div className="flex ml-auto flex-col md:flex-row items-center gap-2 md:gap-4 shrink-0">
        <span className="text-[11px] leading-3.5 font-medium text-(--gray-1)">
          {formatDate(signal.date)}
        </span>

        <button
          ref={buttonRef}
          onClick={openMenu}
          className="px-5.75 py-1.75 rounded-full bg-(--main-crono) leading-4.5 text-sm text-white font-medium transition-colors cursor-pointer hover:bg-(--main-color-dark)"
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

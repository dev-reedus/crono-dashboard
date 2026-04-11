import { ChevronRight, TriangleAlertIcon } from 'lucide-react'

export type StatCardData = {
  label: string
  value: number
  color: string
  errors: number | null
}

export default function StatCard({ label, value, color, errors }: StatCardData) {
  return (
    <button
      className={`flex-1 rounded-2xl p-4 relative text-left ${label === 'Completed' ? 'cursor-default!' : ''}`}
      style={{ backgroundColor: `var(--${color}-light)` }}
    >
      {errors != null && (
        <div className="absolute top-2 flex flex-row right-2.5 bg-white text-(--red-main) text-xs px-2 py-1 rounded-full">
          <span className="hidden lg:block mr-1">
            {errors} error{errors > 1 ? 's' : ''}
          </span>
          <TriangleAlertIcon size={16} className="inline-block" />
        </div>
      )}
      <p className="text-2xl leading-7.5 mb-2" style={{ color: `var(--${color})` }}>
        {value}
      </p>
      <div className="flex items-center justify-between">
        <p className="text-sm leading-4 text-(--gray-hover)">{label}</p>
        {label !== 'Completed' && <ChevronRight className="text-(--gray-1)" size={16} />}
      </div>
    </button>
  )
}

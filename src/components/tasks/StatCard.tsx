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
      style={{ backgroundColor: `color-mix(in srgb, var(--${color}) 15%, transparent)` }}
    >
      {errors != null && (
        <div className="absolute top-3 flex flex-row right-3 bg-white text-(--red-main) text-xs px-2 py-1 rounded-full">
          <span className="hidden lg:block mr-1">
            {errors} error{errors > 1 ? 's' : ''}
          </span>
          <TriangleAlertIcon size={16} className="inline-block leading-4" />
        </div>
      )}
      <p className="text-2xl mb-1" style={{ color: `var(--${color})` }}>
        {value}
      </p>
      <div className="flex items-center justify-between">
        <p className="text-sm text-(--gray-hover)">{label}</p>
        {label !== 'Completed' && <ChevronRight size={16} />}
      </div>
    </button>
  )
}

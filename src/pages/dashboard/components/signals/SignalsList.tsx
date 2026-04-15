import SignalItem from './SignalItem'
import type { Signal } from '@/data/signals'

type Props = {
  signals: Signal[]
  loading: boolean
  onDelete: (id: string) => void
  onComplete: (id: string) => void
}

export default function SignalsList({ signals, loading, onDelete, onComplete }: Props) {
  return (
    <div className="flex flex-col gap-3 flex-1 min-h-0">
      {/* Section header */}
      <div className=" p-3.75 pb-0 flex flex-col gap-1 justify-between">
        <div className="flex items-center gap-2">
          <h2 className="text-sm leading-6 font-semibold text-main-dark">Signals</h2>
          {!loading && (
            <span
              className="text-xs text-white font-semibold px-2 py-1 rounded-xl"
              style={{
                backgroundColor: `var(${signals.length > 6 ? '--color-yellow-secondary' : '--color-green-main'})`,
              }}
            >
              {signals.length}
            </span>
          )}
        </div>
        <h3 className="text-gray-1 leading-6 text-sm font-normal">
          Never miss a single opportunity: check out your top signals from your 1st-degree LinkedIn
          connections.
        </h3>
      </div>

      {/* List */}
      <div className="divide-y divide-gray-4 overflow-y-auto flex-1 min-h-0">
        {loading ? (
          Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-16 px-4 py-3 animate-pulse bg-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-100 shrink-0" />
                <div className="flex-1 space-y-2">
                  <div className="h-3 bg-gray-100 rounded w-1/3" />
                  <div className="h-2 bg-gray-100 rounded w-1/4" />
                </div>
              </div>
            </div>
          ))
        ) : signals.length === 0 ? (
          <div className="text-center py-16 text-gray-4 text-sm">No signals found.</div>
        ) : (
          signals.map(signal => (
            <SignalItem
              key={signal.id}
              signal={signal}
              onDelete={onDelete}
              onComplete={onComplete}
            />
          ))
        )}
      </div>
    </div>
  )
}

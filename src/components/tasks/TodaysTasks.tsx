import StatCard, { type StatCardData } from './StatCard'
import { Fragment } from 'react'

const TASKS_CARDS: StatCardData[] = [
  { label: 'Overdue', value: 3, color: 'red-main', errors: null },
  { label: 'Pending Manual', value: 10, color: 'dark-yellow-main', errors: null },
  { label: 'Pending Auto', value: 20, color: 'blue-hover', errors: 1 },
  { label: 'Completed', value: 8, color: 'green-main', errors: null },
]

export default function TodaysTasks() {
  return (
    <div className="bg-white rounded-2xl p-3.75 flex flex-col gap-2 border border-(--gray-4)">
      <div className="flex items-center justify-between">
        <p className="text-sm leading-5.5 font-semibold text-(--main-dark)">Today's tasks</p>
      </div>
      <div className="grid grid-cols-2 md:flex md:flex-row md:items-stretch gap-2">
        {TASKS_CARDS.map((card, i) => (
          <Fragment key={card.label}>
            {(i === 1 || i === 3) && (
              <div key={`divider-${i}`} className="w-px hidden md:block bg-(--gray-4) shrink-0" />
            )}
            <StatCard {...card} />
          </Fragment>
        ))}
      </div>
    </div>
  )
}

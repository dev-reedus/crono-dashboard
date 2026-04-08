import StatCard, { type StatCardData } from './StatCard'

const TASKS_CARDS: StatCardData[] = [
  { label: 'Overdue', value: 3, color: 'red-main', errors: null },
  { label: 'Pending Manual', value: 10, color: 'dark-yellow-main', errors: null },
  { label: 'Pending Auto', value: 20, color: 'blue-hover', errors: 1 },
  { label: 'Completed', value: 8, color: 'green-main', errors: null },
]

export default function TodaysTasks() {
  return (
    <div className="bg-white rounded-2xl p-4 flex flex-col gap-1 shadow-sm border border-(--gray-4)">
      <div className="flex items-center justify-between">
        <p className="text-sm leading-6 font-semibold text-(--main-dark) tracking-wide">
          Today's tasks
        </p>
      </div>
      <div className="grid grid-cols-2 md:flex md:flex-row md:items-stretch gap-4">
        {TASKS_CARDS.map((card, i) => (
          <>
            {(i === 1 || i === 3) && (
              <div key={`divider-${i}`} className="w-px hidden md:block bg-(--gray-4) shrink-0" />
            )}
            <StatCard key={card.label} {...card} />
          </>
        ))}
      </div>
    </div>
  )
}

import StatCard, { type StatCardData } from './StatCard'
import { Fragment } from 'react'
import Card from '@/components/card/Card.tsx'

export default function TodaysTasks({ tasks }: { tasks: StatCardData[] }) {
  return (
    <Card className="p-3.75 flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <p className="text-sm leading-5.5 font-semibold text-main-dark">Today's tasks</p>
      </div>
      <div className="grid grid-cols-2 md:flex md:flex-row md:items-stretch gap-2">
        {tasks.map((card, i) => (
          <Fragment key={card.label}>
            {(i === 1 || i === 3) && (
              <div key={`divider-${i}`} className="w-px hidden md:block bg-gray-4 shrink-0" />
            )}
            <StatCard {...card} />
          </Fragment>
        ))}
      </div>
    </Card>
  )
}

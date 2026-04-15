import { Activity, BriefcaseBusiness, Info, ListTodo, Pencil, UserRound, Video } from 'lucide-react'

type KpiCardData = {
  title: string
  tooltip: string | null
  progress: number
  icon: typeof Activity | null
  color: string
  total: number
  unit: string | null
}

const KPI_CARDS: KpiCardData[] = [
  {
    title: 'Contacts engaged',
    tooltip: 'Contacts who have at least one logged activity within the current month',
    progress: 0,
    icon: UserRound,
    color: 'blue-hover',
    total: 500,
    unit: null,
  },
  {
    title: 'Companies engaged',
    tooltip: null,
    progress: 0,
    icon: BriefcaseBusiness,
    color: 'blue-main',
    total: 500,
    unit: null,
  },
  {
    title: 'Activities',
    tooltip: null,
    progress: 1000,
    icon: ListTodo,
    color: 'purple-main',
    total: 2000,
    unit: null,
  },
  {
    title: 'Meetings',
    tooltip: null,
    progress: 20,
    icon: Video,
    color: 'yellow-main',
    total: 30,
    unit: null,
  },
  {
    title: 'Deals',
    tooltip: null,
    progress: 100,
    icon: ListTodo,
    color: 'pink-main',
    total: 200,
    unit: null,
  },
  {
    title: 'Pipeline',
    tooltip: null,
    progress: 50,
    icon: null,
    color: 'green-main',
    total: 100,
    unit: '€',
  },
]

export default function KpiCard() {
  return (
    <div className="bg-white rounded-2xl p-4 border border-(--gray-4) flex flex-col gap-3.75">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold leading-5.5 text-(--main-dark)">May's performance</p>
        <a href="#" className="text-sm font-medium leading-4.5  text-(--main-color-dark)">
          <span>Edit KPIs</span>
          <Pencil size={16} className="inline-block ml-1.25" />
        </a>
      </div>
      <div className="grid grid-cols-2 gap-1.75">
        {KPI_CARDS.map(({ title, tooltip, progress, icon: Icon, color, total, unit }) => (
          <div
            key={title}
            className="flex flex-col gap-1.5 p-1.75 rounded-xl border border-(--gray-4)"
          >
            <div className="flex items-center justify-between">
              <p className="text-xs font-medium text-(--gray-hover) truncate">{title}</p>
              {tooltip && (
                <div className="relative group shrink-0 ml-auto -mt-px">
                  <Info size={13} className="text-(--main-dark) cursor-pointer" />
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max max-w-55 bg-(--main-dark) text-white text-center font-medium text-xs rounded-sm px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                    {tooltip}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-(--main-dark)" />
                  </div>
                </div>
              )}
            </div>
            <div
              className="flex items-center gap-0.5 text-base font-medium"
              style={{ color: `var(--${color})` }}
            >
              {Icon && <Icon size={16} />}
              {unit && <span>{unit}</span>}
              <p>{progress}</p>
              <p className="text-(--gray-2)">/{total}</p>
            </div>
            <div
              className="h-0.75 rounded-full overflow-hidden"
              style={{
                backgroundColor: `var(--${color}-light)`,
              }}
            >
              <div
                className="h-full rounded-full"
                style={{
                  width: `${(progress / total) * 100}%`,
                  backgroundColor: `var(--${color})`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

import { BriefcaseBusiness, ListTodo, UserRound, Video, type LucideIcon } from 'lucide-react'

export type KpiCardData = {
  title: string
  tooltip: string | null
  progress: number
  icon: LucideIcon | null
  color: string
  total: number
  unit: string | null
}

export const KPI_CARDS: KpiCardData[] = [
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

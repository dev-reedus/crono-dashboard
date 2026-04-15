import type { StatCardData } from '@/pages/dashboard/components/tasks/StatCard'

export const TASKS_CARDS: StatCardData[] = [
  { label: 'Overdue', value: 3, color: 'red-main', errors: null },
  { label: 'Pending Manual', value: 10, color: 'dark-yellow-main', errors: null },
  { label: 'Pending Auto', value: 20, color: 'blue-hover', errors: 1 },
  { label: 'Completed', value: 8, color: 'green-main', errors: null },
]

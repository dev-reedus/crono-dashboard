import { useEffect, useState } from 'react'
import KpiCard from './components/kpi/KpiCard'
import OnboardingCard from './components/onboarding/OnboardingCard'
import RepliesCard from './components/replies/RepliesCard'
import SignalsList from './components/signals/SignalsList'
import TodaysTasks from './components/tasks/TodaysTasks'
import WelcomeCard from './components/welcome/WelcomeCard'
import { TASKS_CARDS } from '@/data/tasks'
import { KPI_CARDS } from '@/data/kpi'
import { ONBOARDING_STEPS } from '@/data/onboarding'
import { REPLY_AVATARS } from '@/data/replies'
import { fetchSignals, type Signal } from '@/data/signals'

export default function Dashboard() {
  const [signals, setSignals] = useState<Signal[]>([])
  const [signalsLoading, setSignalsLoading] = useState(true)

  useEffect(() => {
    fetchSignals().then(data => {
      setSignals(data)
      setSignalsLoading(false)
    })
  }, [])

  const handleSignalDelete = (id: string) => setSignals(prev => prev.filter(s => s.id !== id))
  const handleSignalComplete = (id: string) => setSignals(prev => prev.filter(s => s.id !== id))

  return (
    <div className="flex flex-col xl:flex-row gap-2 items-stretch h-full">
      {/* Left column — 2/3 */}
      <div className="flex flex-col gap-2 w-full xl:flex-2 min-w-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <WelcomeCard />
          <RepliesCard avatars={REPLY_AVATARS} />
        </div>

        <TodaysTasks tasks={TASKS_CARDS} />

        {/* Signals card */}
        <div className="bg-white rounded-2xl border border-gray-4 overflow-y-hidden flex flex-col flex-1 min-h-0">
          <SignalsList
            signals={signals}
            loading={signalsLoading}
            onDelete={handleSignalDelete}
            onComplete={handleSignalComplete}
          />
        </div>
      </div>

      {/* Right column — 1/3 */}
      <div className="w-full xl:flex-1 min-w-0 flex flex-col gap-2">
        <KpiCard kpis={KPI_CARDS} />
        <OnboardingCard steps={ONBOARDING_STEPS} />
      </div>
    </div>
  )
}

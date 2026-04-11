import KpiCard from '../components/kpi/KpiCard'
import OnboardingCard from '../components/onboarding/OnboardingCard'
import RepliesCard from '../components/replies/RepliesCard'
import SignalsList from '../components/signals/SignalsList'
import TodaysTasks from '../components/tasks/TodaysTasks'
import WelcomeCard from '../components/welcome/WelcomeCard'

export default function Dashboard() {
  return (
    <div className="flex flex-col xl:flex-row gap-2 items-stretch h-full">
      {/* Left column — 2/3 */}
      <div className="flex flex-col gap-2 w-full xl:flex-2 min-w-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <WelcomeCard />
          <RepliesCard />
        </div>

        <TodaysTasks />

        {/* Signals card */}
        <div className="bg-white rounded-2xl border border-(--gray-4) overflow-y-hidden flex flex-col flex-1 min-h-0">
          <SignalsList />
        </div>
      </div>

      {/* Right column — 1/3 */}
      <div className="w-full xl:flex-1 min-w-0 flex flex-col gap-2">
        <KpiCard />
        <OnboardingCard />
      </div>
    </div>
  )
}

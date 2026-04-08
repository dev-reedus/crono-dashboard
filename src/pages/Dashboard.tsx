import KpiCard from '../components/kpi/KpiCard'
import OnboardingCard from '../components/onboarding/OnboardingCard'
import RepliesCard from '../components/replies/RepliesCard'
import SignalsList from '../components/signals/SignalsList'
import TodaysTasks from '../components/tasks/TodaysTasks'
import WelcomeCard from '../components/welcome/WelcomeCard'

export default function Dashboard() {
  return (
    <div className="flex flex-col xl:flex-row gap-5 items-stretch h-full">
      {/* Left column — 2/3 */}
      <div className="flex flex-col gap-5 w-full xl:flex-2 min-w-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <WelcomeCard />
          <RepliesCard />
        </div>

        <TodaysTasks />

        {/* Signals card */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-(--gray-4) flex flex-col flex-1 min-h-0">
          <SignalsList />
        </div>
      </div>

      {/* Right column — 1/3 */}
      <div className="w-full xl:flex-1 min-w-0 flex flex-col gap-5">
        <KpiCard />
        <OnboardingCard />
      </div>
    </div>
  )
}

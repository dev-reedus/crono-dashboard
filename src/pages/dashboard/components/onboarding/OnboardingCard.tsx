import extensionImg from '../../assets/extension.svg'
import newContractsImg from '../../assets/new_contracts.svg'
import targetGoalImg from '../../assets/target_goal.svg'
import toStrategyImg from '../../assets/to_strategy.svg'
import taskImg from '../../assets/task.svg'
import { Fragment } from 'react'

const ONBOARDING_STEPS = [
  { icon: extensionImg, label: 'Integrations Setup', duration: 5 },
  { icon: newContractsImg, label: 'Add new Contract', duration: 5 },
  { icon: targetGoalImg, label: 'Create your first sequence', duration: 10 },
  { icon: toStrategyImg, label: 'Add contracts to sequence', duration: 5 },
  { icon: taskImg, label: 'Run your first task', duration: 10 },
]

export default function OnboardingCard() {
  return (
    <div className="bg-white rounded-2xl py-3.75 px-4.5 border border-(--gray-4) flex flex-col gap-3 flex-1">
      <p className="text-sm font-semibold leading-5.5 text-(--main-dark)">Onboarding</p>
      <div className="flex flex-col gap-4 justify-items-center">
        {ONBOARDING_STEPS.map(({ icon, label, duration }, i) => (
          <Fragment key={label}>
            {i > 0 && <div className="h-px bg-(--gray-4)" />}
            <div>
              <div className="text-sm flex flex-row items-center justify-center gap-4">
                <img src={icon} alt={label} className="w-10 h-10 object-contain" />
                <p className=" leading-5.5 font-semibold text-(--main-dark) flex-1">{label}</p>
                <span className="leading-6 text-(--gray-1) font-normal shrink-0">
                  {duration} min
                </span>
              </div>
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  )
}

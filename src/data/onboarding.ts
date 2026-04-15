import extensionImg from '@/assets/extension.svg'
import newContractsImg from '@/assets/new_contracts.svg'
import targetGoalImg from '@/assets/target_goal.svg'
import toStrategyImg from '@/assets/to_strategy.svg'
import taskImg from '@/assets/task.svg'

export type OnboardingStep = {
  icon: string
  label: string
  duration: number
}

export const ONBOARDING_STEPS: OnboardingStep[] = [
  { icon: extensionImg, label: 'Integrations Setup', duration: 5 },
  { icon: newContractsImg, label: 'Add new Contract', duration: 5 },
  { icon: targetGoalImg, label: 'Create your first sequence', duration: 10 },
  { icon: toStrategyImg, label: 'Add contracts to sequence', duration: 5 },
  { icon: taskImg, label: 'Run your first task', duration: 10 },
]

const ONBOARDING_STEPS = [
  { icon: 'src/assets/extension.svg', label: 'Integrations Setup', duration: 5 },
  { icon: 'src/assets/new_contracts.svg', label: 'Add new Contract', duration: 5 },
  { icon: 'src/assets/target_goal.svg', label: 'Create your first sequence', duration: 10 },
  { icon: 'src/assets/to_strategy.svg', label: 'Add contracts to sequence', duration: 5 },
  { icon: 'src/assets/task.svg', label: 'Run your first task', duration: 10 },
]

export default function OnboardingCard() {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm border border-(--gray-4) flex flex-col gap-3 flex-1">
      <p className="text-sm font-semibold leading-6 text-(--main-dark) tracking-wide">Onboarding</p>
      <div className="flex flex-col gap-2.5 justify-items-center">
        {ONBOARDING_STEPS.map(({ icon, label, duration }, i) => (
          <div key={label}>
            {i > 0 && <div className="h-px bg-(--gray-4)" />}
            <div
              className={`flex flex-row items-center justify-center gap-4 ${i > 0 ? 'mt-2' : ''}`}
            >
              <img src={icon} alt={label} className="w-10 h-10 object-contain" />
              <p className="text-sm font-semibold text-(--main-dark) flex-1">{label}</p>
              <span className="text-sm text-(--gray-1) shrink-0">{duration} min</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

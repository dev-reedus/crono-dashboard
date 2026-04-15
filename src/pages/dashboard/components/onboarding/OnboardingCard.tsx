import { Fragment } from 'react'
import Card from '@/components/card/Card.tsx'
import type { OnboardingStep } from '@/data/onboarding'

export default function OnboardingCard({ steps }: { steps: OnboardingStep[] }) {
  return (
    <Card className="py-3.75 px-4.5 flex flex-col gap-3 flex-1">
      <p className="text-sm font-semibold leading-5.5 text-main-dark">Onboarding</p>
      <div className="flex flex-col gap-4 justify-items-center">
        {steps.map(({ icon, label, duration }, i) => (
          <Fragment key={label}>
            {i > 0 && <div className="h-px bg-gray-4" />}
            <div>
              <div className="text-sm flex flex-row items-center justify-center gap-4">
                <img src={icon} alt={label} className="w-10 h-10 object-contain" />
                <p className=" leading-5.5 font-semibold text-main-dark flex-1">{label}</p>
                <span className="leading-6 text-gray-1 font-normal shrink-0">
                  {duration} min
                </span>
              </div>
            </div>
          </Fragment>
        ))}
      </div>
    </Card>
  )
}

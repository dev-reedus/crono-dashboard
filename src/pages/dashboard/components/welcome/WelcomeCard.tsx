import Card from '@/components/card/Card.tsx'

export default function WelcomeCard() {
  return (
    <Card className="py-7.75 px-5.75 flex flex-col justify-between gap-4">
      <div>
        <h1 className="text-2xl leading-7.5 font-bold text-gray-900">Welcome Alex,</h1>
        <p className="text-sm text-gray-1 font-normal mt-2">
          Here's your performance overview where you can track your daily and monthly KPIs
        </p>
      </div>
    </Card>
  )
}

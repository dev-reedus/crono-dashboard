export default function WelcomeCard() {
  return (
    <div className="bg-white rounded-2xl p-5 flex flex-col justify-between gap-4 shadow-sm border border-(--gray-4)">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Welcome Alex,</h1>
        <p className="text-sm text-gray-500 mt-0.5">
          Here's your performance overview where you can track your daily and monthly KPIs
        </p>
      </div>
    </div>
  )
}

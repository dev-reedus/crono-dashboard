import { Info, Pencil } from 'lucide-react'
import Card from '@/components/card/Card.tsx'
import type { KpiCardData } from '@/data/kpi'
import { COLOR_VARS, COLOR_LIGHT_VARS } from '@/data/colors'

export default function KpiCard({ kpis }: { kpis: KpiCardData[] }) {
  return (
    <Card className="p-4 flex flex-col gap-3.75">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold leading-5.5 text-main-dark">May's performance</p>
        <a href="#" className="text-sm font-medium leading-4.5  text-main-dark-teal">
          <span>Edit KPIs</span>
          <Pencil size={16} className="inline-block ml-1.25" />
        </a>
      </div>
      <div className="grid grid-cols-2 gap-1.75">
        {kpis.map(({ title, tooltip, progress, icon: Icon, color, total, unit }) => (
          <div key={title} className="flex flex-col gap-1.5 p-1.75 rounded-xl border border-gray-4">
            <div className="flex items-center justify-between">
              <p className="text-xs font-medium text-gray-hover truncate">{title}</p>
              {tooltip && (
                <div className="relative group shrink-0 ml-auto -mt-px">
                  <Info size={13} className="text-main-dark cursor-pointer" />
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max max-w-55 bg-main-dark text-white text-center font-medium text-xs rounded-sm px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                    {tooltip}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-main-dark" />
                  </div>
                </div>
              )}
            </div>
            <div
              className="flex items-center gap-0.5 text-base font-medium"
              style={{ color: COLOR_VARS[color] }}
            >
              {Icon && <Icon size={16} />}
              {unit && <span>{unit}</span>}
              <p>{progress}</p>
              <p className="text-gray-2">/{total}</p>
            </div>
            <div
              className="h-0.75 rounded-full overflow-hidden"
              style={{
                backgroundColor: COLOR_LIGHT_VARS[color],
              }}
            >
              <div
                className="h-full rounded-full"
                style={{
                  width: `${(progress / total) * 100}%`,
                  backgroundColor: COLOR_VARS[color],
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}

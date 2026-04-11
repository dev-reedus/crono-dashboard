export type SignalType = 'role_change' | 'company_change' | 'website_view' | 'news'

export interface Signal {
  id: string
  customer: string
  event: string
  type: SignalType
  date: string
  inSequence?: boolean
}

const SIGNALS: Signal[] = [
  {
    id: '1',
    customer: 'Robert Smith',
    event: 'changed role from SDR to Senior SDR at WeRoad',
    type: 'role_change',
    date: '2026-04-07T10:00:00.000Z',
    inSequence: true,
  },
  {
    id: '2',
    customer: 'Robert Smith',
    event: 'changed role from SDR to Senior SDR at WeRoad',
    type: 'company_change',
    date: '2026-04-05T14:30:00.000Z',
    inSequence: false,
  },
  {
    id: '3',
    customer: 'Robert Smith',
    event: 'changed role from SDR to Senior SDR at WeRoad',
    type: 'role_change',
    date: '2026-04-01T09:00:00.000Z',
    inSequence: true,
  },
  {
    id: '4',
    customer: 'Amazon',
    event:
      'viewed <a href="#" style="color: var(--main-color-dark)">2 pages</a> of your website for 55sec',
    type: 'website_view',
    date: '2026-03-25T16:00:00.000Z',
    inSequence: false,
  },
  {
    id: '5',
    customer: 'Amazon',
    event:
      'viewed <a href="#" style="color: var(--main-color-dark)">2 pages</a> of your website for 55sec',
    type: 'website_view',
    date: '2026-03-25T16:00:00.000Z',
    inSequence: false,
  },
  {
    id: '6',
    customer: 'Robert Smith',
    event: 'changed company from AWS to WeRoad',
    type: 'company_change',
    date: '2026-03-01T09:00:00.000Z',
    inSequence: true,
  },
  {
    id: '7',
    customer: 'Robert Smith',
    event: 'changed role from SDR to Senior SDR at AWS',
    type: 'role_change',
    date: '2026-03-01T09:00:00.000Z',
    inSequence: true,
  },
  {
    id: '8',
    customer: 'Amazon',
    event:
      'viewed <a href="#" style="color: var(--main-color-dark)">2 pages</a> of your website for 55sec',
    type: 'website_view',
    date: '2026-02-25T16:00:00.000Z',
    inSequence: false,
  },
  {
    id: '9',
    customer: 'Amazon',
    event:
      'viewed <a href="#" style="color: var(--main-color-dark)">2 pages</a> of your website for 55sec',
    type: 'website_view',
    date: '2026-02-20T16:00:00.000Z',
    inSequence: false,
  },
  {
    id: '10',
    customer: 'Robert Smith',
    event: 'changed company from AWS to WeRoad',
    type: 'company_change',
    date: '2026-02-15T09:00:00.000Z',
    inSequence: true,
  },
  {
    id: '11',
    customer: 'Robert Smith',
    event: 'changed role from SDR to Senior SDR at AWS',
    type: 'role_change',
    date: '2026-02-05T09:00:00.000Z',
    inSequence: true,
  },
]

export const fetchSignals = async (): Promise<Signal[]> => {
  await new Promise(resolve => setTimeout(resolve, 600))
  return SIGNALS
}

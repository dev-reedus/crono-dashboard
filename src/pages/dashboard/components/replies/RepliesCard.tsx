import { ChevronRight, MailboxIcon } from 'lucide-react'
import Card from '@/components/card/Card.tsx'
import type { ReplyAvatar } from '@/data/replies'

export default function RepliesCard({ avatars }: { avatars: ReplyAvatar[] }) {
  return (
    <Card className="p-3.75 flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold leading-5.5 text-main-dark">Replies</p>
        <a href="#" className="text-sm leading-4.5 text-main-dark-teal">
          <span>Open inbox</span>
          <ChevronRight size={16} className="leading-4.5 inline-block ml-1.25" />
        </a>
      </div>
      <div className="bg-main-light flex flex-row items-center justify-between rounded-2xl p-4 pr-6 text-main-dark">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-main-hover rounded-3xl flex items-center justify-center">
            <MailboxIcon size={24} className="text-main-dark-teal" />
          </div>
          <p className="text-4xl font-medium leading-11 text-gray-hover">24</p>
        </div>
        <div className="flex flex-row">
          {avatars.map(({ src, alt }, i) => (
            <img
              key={i}
              src={src}
              alt={alt}
              className="w-8 h-8 rounded-full border border-gray-5 object-contain bg-white -ml-2 first:ml-0"
            />
          ))}
        </div>
      </div>
    </Card>
  )
}

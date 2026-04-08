import { ChevronRight, MailboxIcon } from 'lucide-react'
import redditImg from '../../assets/reddit.png'
import amazonImg from '../../assets/amazon.png'
import mcImg from '../../assets/mc.png'
import mediumImg from '../../assets/medium.png'

const REPLY_AVATARS = [
  { src: redditImg, alt: 'Reddit' },
  { src: amazonImg, alt: 'Amazon' },
  { src: mcImg, alt: "McDonald's" },
  { src: mediumImg, alt: 'Medium' },
]

export default function RepliesCard() {
  return (
    <div className="bg-white rounded-2xl p-4 flex flex-col gap-1 shadow-sm border border-(--gray-4)">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold leading-6 text-(--main-dark) tracking-wide">Replies</p>
        <a href="#" className="text-sm text-(--main-color-dark)">
          <span>Open inbox</span>
          <ChevronRight size={18} className="inline-block ml-1" />
        </a>
      </div>
      <div className="bg-(--main-light) flex flex-row items-center justify-between rounded-2xl p-4 text-(--main-dark)">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-(--main-hover) rounded-3xl flex items-center justify-center">
            <MailboxIcon size={24} className="text-(--main-color)" />
          </div>
          <p className="text-4xl font-semibold leading-11 text-(--gray-hover)">24</p>
        </div>
        <div className="flex flex-row">
          {REPLY_AVATARS.map(({ src, alt }, i) => (
            <img
              key={i}
              src={src}
              alt={alt}
              className="w-8 h-8 rounded-full border-2 border-(--gray-5) object-contain bg-white -ml-2 first:ml-0"
            />
          ))}
        </div>
      </div>
    </div>
  )
}

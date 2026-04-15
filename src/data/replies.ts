import redditImg from '@/assets/reddit.png'
import amazonImg from '@/assets/amazon.png'
import mcImg from '@/assets/mc.png'
import mediumImg from '@/assets/medium.png'

export type ReplyAvatar = {
  src: string
  alt: string
}

export const REPLY_AVATARS: ReplyAvatar[] = [
  { src: redditImg, alt: 'Reddit' },
  { src: amazonImg, alt: 'Amazon' },
  { src: mcImg, alt: "McDonald's" },
  { src: mediumImg, alt: 'Medium' },
]

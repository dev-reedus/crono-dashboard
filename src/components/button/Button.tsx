import type { ButtonHTMLAttributes } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary'
}

export default function Button({ variant = 'primary', className = '', ...props }: ButtonProps) {
  const base =
    'px-5.75 py-1.75 rounded-full leading-4.5 text-sm font-medium transition-colors cursor-pointer'
  const variants = {
    primary: 'bg-main-crono text-white hover:bg-main-dark-teal',
  }

  return <button className={`${base} ${variants[variant]} ${className}`} {...props} />
}

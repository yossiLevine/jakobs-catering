import { cn } from '@/lib/utils'
import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
  asChild?: boolean
}

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center gap-2 font-heebo font-semibold rounded-sm transition-all duration-200 cursor-pointer',
        {
          'bg-gold text-navy hover:bg-gold-dark shadow-md hover:shadow-lg hover:-translate-y-0.5':
            variant === 'primary',
          'bg-transparent text-white border-2 border-white/60 hover:border-white hover:bg-white/10':
            variant === 'ghost',
          'bg-transparent text-gold border-2 border-gold hover:bg-gold hover:text-navy':
            variant === 'outline',
        },
        {
          'px-4 py-2 text-sm': size === 'sm',
          'px-6 py-3 text-base': size === 'md',
          'px-8 py-4 text-lg': size === 'lg',
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

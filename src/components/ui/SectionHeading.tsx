import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  label?: string
  title: string
  subtitle?: string
  center?: boolean
  light?: boolean
  className?: string
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  center = true,
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn('mb-14', center && 'text-center', className)}>
      {label && (
        <p
          className={cn(
            'text-sm font-assistant font-semibold tracking-[0.2em] uppercase mb-3',
            light ? 'text-gold-light' : 'text-gold'
          )}
        >
          {label}
        </p>
      )}
      <h2
        className={cn(
          'font-heebo font-bold text-4xl md:text-5xl mb-4 relative inline-block',
          light ? 'text-white' : 'text-navy'
        )}
      >
        {title}
      </h2>
      {/* Gold ornamental divider */}
      <div className={cn('flex items-center gap-3 mb-4', center && 'justify-center')}>
        <div className="w-8 h-px bg-gold/40" />
        <div className="w-3 h-3 border-2 border-gold rotate-45 flex-shrink-0" />
        <div className="w-16 h-0.5 bg-gold" />
        <div className="w-3 h-3 border-2 border-gold rotate-45 flex-shrink-0" />
        <div className="w-8 h-px bg-gold/40" />
      </div>
      {subtitle && (
        <p
          className={cn(
            'font-assistant text-lg max-w-2xl',
            center && 'mx-auto',
            light ? 'text-cream-dark/80' : 'text-gray-600'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}

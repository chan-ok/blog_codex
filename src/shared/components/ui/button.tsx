import type { ButtonHTMLAttributes } from 'react'
import { cn } from '../../libs/utils'

export function Button({ className, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-700 disabled:opacity-50',
        className,
      )}
      {...props}
    />
  )
}

import type { HTMLAttributes } from 'react'
import { cn } from '../../libs/utils'

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('rounded-lg border bg-white p-4 shadow-sm dark:bg-gray-800', className)}
      {...props}
    />
  )
}

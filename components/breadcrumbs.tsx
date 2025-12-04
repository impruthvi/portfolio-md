import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label='Breadcrumb' className='mb-8'>
      <ol className='flex items-center space-x-2 text-sm text-muted-foreground'>
        <li>
          <Link
            href='/'
            className='inline-flex items-center transition-colors hover:text-foreground'
            aria-label='Home'
          >
            <Home className='h-4 w-4' />
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className='flex items-center space-x-2'>
            <ChevronRight className='h-4 w-4' aria-hidden='true' />
            {item.href && index < items.length - 1 ? (
              <Link
                href={item.href}
                className='transition-colors hover:text-foreground'
              >
                {item.label}
              </Link>
            ) : (
              <span className='text-foreground' aria-current='page'>
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

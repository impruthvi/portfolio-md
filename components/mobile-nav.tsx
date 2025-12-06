'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

const navigation = [
  { name: 'Posts', href: '/posts' },
  { name: 'Projects', href: '/projects' },
  { name: 'Resume', href: '/resume' },
  { name: 'Contact', href: '/contact' }
]

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return (
    <div className='sm:hidden'>
      <Button
        variant='ghost'
        size='icon'
        onClick={toggleMenu}
        aria-label='Toggle menu'
        aria-expanded={isOpen}
        className='h-9 w-9'
      >
        {isOpen ? <X className='h-5 w-5' /> : <Menu className='h-5 w-5' />}
      </Button>

      {/* Mobile menu overlay */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className='fixed inset-0 top-[72px] z-40 bg-background/80 backdrop-blur-sm'
            onClick={closeMenu}
            aria-hidden='true'
          />

          {/* Menu panel */}
          <div className='fixed inset-x-0 top-[72px] z-50 border-b bg-background p-6 shadow-lg'>
            <nav
              className='flex flex-col space-y-4'
              aria-label='Mobile navigation'
            >
              {navigation.map(item => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={closeMenu}
                  className={`text-lg font-light transition-colors hover:text-foreground ${
                    pathname === item.href
                      ? 'text-foreground'
                      : 'text-muted-foreground'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </>
      )}
    </div>
  )
}

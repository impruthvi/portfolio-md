import Link from 'next/link'
import { ThemeToggle } from './theme-toggle'
import MobileNav from './mobile-nav'

const Header = () => {
  return (
    <header className='bg-background/75 fixed inset-x-0 top-0 z-50 py-6 backdrop-blur-sm'>
      <nav className='container flex max-w-3xl items-center justify-between' aria-label='Main navigation'>
        <div>
          <Link href='/' className='font-serif text-2xl font-bold'>
            IMPRUTHVI
          </Link>
        </div>

        {/* Desktop navigation */}
        <ul className='text-muted-foreground hidden items-center gap-6 text-sm font-light sm:flex sm:gap-10'>
          <li className='hover:text-foreground transition-colors'>
            <Link href='/posts'>Posts</Link>
          </li>
          <li className='hover:text-foreground transition-colors'>
            <Link href='/projects'>Projects</Link>
          </li>
          <li className='hover:text-foreground transition-colors'>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>

        <div className='flex items-center gap-2'>
          <ThemeToggle />
          <MobileNav />
        </div>
      </nav>
    </header>
  )
}

export default Header

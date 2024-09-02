'use client'

import { ThemeProvider } from './theme-provider'
import { ToasterProvider } from './toaster-provider'

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ThemeProvider
        attribute='class'
        defaultTheme='system'
        enableSystem
        disableTransitionOnChange
      >
        {children}
        <ToasterProvider />
      </ThemeProvider>
    </>
  )
}

export default Providers

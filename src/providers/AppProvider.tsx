import type { ReactNode } from 'react'
import { Toaster } from 'sonner'
import { QueryProvider } from './QueryProvider'
import { ErrorBoundaryProvider } from './ErrorBoundaryProvider'

interface AppProviderProps {
  children: ReactNode
}

export function AppProvider({ children }: AppProviderProps) {
  return (
    <ErrorBoundaryProvider>
      <QueryProvider>
        {children}
        <Toaster
          position="top-right"
          richColors
          closeButton
          theme="system"
        />
      </QueryProvider>
    </ErrorBoundaryProvider>
  )
}

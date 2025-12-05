import { ErrorBoundary } from 'react-error-boundary'
import type { ReactNode } from 'react'
import { toast } from 'sonner'

interface ErrorBoundaryProviderProps {
  children: ReactNode
}

function ErrorFallback({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="max-w-md w-full p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-red-600 dark:text-red-400 mb-4">
          오류가 발생했습니다
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          {error.message}
        </p>
        <button
          onClick={resetErrorBoundary}
          className="w-full px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
        >
          다시 시도
        </button>
      </div>
    </div>
  )
}

export function ErrorBoundaryProvider({ children }: ErrorBoundaryProviderProps) {
  const handleError = (error: Error) => {
    console.error('ErrorBoundary caught an error:', error)
    toast.error(`오류 발생: ${error.message}`)
  }

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onError={handleError}>
      {children}
    </ErrorBoundary>
  )
}

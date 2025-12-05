import { useState } from 'react'
import { toast } from 'sonner'

function App() {
  const [count, setCount] = useState(0)

  const handleSuccess = () => {
    toast.success('성공 메시지입니다!')
  }

  const handleError = () => {
    toast.error('에러 메시지입니다!')
  }

  const handleInfo = () => {
    toast.info('정보 메시지입니다!')
  }

  const handleWarning = () => {
    toast.warning('경고 메시지입니다!')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto p-8 text-center">
        <h1 className="text-5xl font-bold mb-8 text-gray-900 dark:text-white">
          Vite + React + TypeScript + Tailwind
        </h1>
        <div className="p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              Counter Example
            </h2>
            <button
              type="button"
              onClick={() => setCount((count) => count + 1)}
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              count is {count}
            </button>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              Toast Examples
            </h2>
            <div className="flex flex-wrap gap-3 justify-center">
              <button
                type="button"
                onClick={handleSuccess}
                className="px-4 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
              >
                Success Toast
              </button>
              <button
                type="button"
                onClick={handleError}
                className="px-4 py-2 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors"
              >
                Error Toast
              </button>
              <button
                type="button"
                onClick={handleInfo}
                className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                Info Toast
              </button>
              <button
                type="button"
                onClick={handleWarning}
                className="px-4 py-2 bg-yellow-600 text-white font-medium rounded-lg hover:bg-yellow-700 transition-colors"
              >
                Warning Toast
              </button>
            </div>
          </div>

          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Edit <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="mt-8 text-gray-500 dark:text-gray-500">
          TanStack Query, ErrorBoundary, Sonner Toast가 설정되었습니다
        </p>
      </div>
    </div>
  )
}

export default App

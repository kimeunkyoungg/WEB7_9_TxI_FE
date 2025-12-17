import { useAuthStore } from '@/stores/authStore'
import { redirect } from '@tanstack/react-router'

export function requireAuth(location: { pathname: string }) {
  const isAuthenticated = useAuthStore.getState().isAuthenticated

  if (!isAuthenticated) {
    const shouldLogin = window.confirm('로그인이 필요한 페이지입니다. 로그인 하시겠습니까?')

    if (shouldLogin) {
      window.dispatchEvent(
        new CustomEvent('openLoginModal', {
          detail: { redirectPath: location.pathname },
        }),
      )
    }

    throw redirect({ to: '/' })
  }
}

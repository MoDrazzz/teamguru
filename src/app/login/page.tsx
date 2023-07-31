import { AuthWrapper, LoginForm, Logo } from '@/components'
import Link from 'next/link'

export default function Login() {
  return (
    <div className="grid place-items-center h-full">
      <AuthWrapper>
        <div className="px-8 py-4 sm:px-12 sm:py-8 grid gap-6 sm:gap-8">
          <Logo />
          <div className="grid sm:gap-3 gap-2">
            <h1 className="text-2xl sm:text-3xl font-semibold">Welcome back</h1>
            <h2 className="text-sm sm:text-base">
              Are you new?{' '}
              <Link href="/signup" className="text-primary-500 font-semibold">
                Sign Up
              </Link>
            </h2>
          </div>
          <LoginForm />
        </div>
      </AuthWrapper>
    </div>
  )
}

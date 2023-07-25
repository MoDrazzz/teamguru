import AuthWrapper from '@/components/AuthWrapper'
import Logo from '@/components/Logo'

export default function Home() {
  return (
    <div className="grid place-items-center h-full">
      <AuthWrapper>
        <div className="px-12 py-8 grid gap-8">
          <Logo />
          <div className="grid gap-3">
            <h1 className="text-3xl font-semibold">Welcome back</h1>
            <h2>
              Are you new?{' '}
              <span className="text-primary-500 font-semibold">Sign Up</span>
            </h2>
          </div>
        </div>
      </AuthWrapper>
    </div>
  )
}

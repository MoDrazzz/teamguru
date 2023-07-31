import { AuthWrapper, LoginForm, Logo } from '@/components'
import AuthFormTitle from '@/components/AuthFormTitle'

export default function Login() {
  return (
    <div className="grid place-items-center h-full">
      <AuthWrapper>
        <div className="px-8 py-4 sm:px-12 sm:py-8 grid gap-6 sm:gap-8">
          <Logo />
          <AuthFormTitle variant="login" />
          <LoginForm />
        </div>
      </AuthWrapper>
    </div>
  )
}

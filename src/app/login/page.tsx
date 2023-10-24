import { AuthWrapper, AuthFormTitle, LoginForm, Logo } from '@/components'

export default function Login() {
  return (
    <div className="grid h-full place-items-center">
      <AuthWrapper>
        <div className="grid gap-6 px-8 py-4 sm:gap-8 sm:px-12 sm:py-8">
          <Logo />
          <AuthFormTitle variant="login" />
          <LoginForm />
        </div>
      </AuthWrapper>
    </div>
  )
}

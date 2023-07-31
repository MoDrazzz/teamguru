import {
  AuthFormTitle,
  AuthWrapper,
  SignupForm,
  SignupHero,
} from '@/components'

export default function SignUp() {
  return (
    <div className="grid place-items-center h-full">
      <AuthWrapper>
        <div className="flex">
          <SignupHero />
          <div className="px-12 flex flex-col gap-8 py-8">
            <AuthFormTitle variant="signup" />
            <SignupForm />
          </div>
        </div>
      </AuthWrapper>
    </div>
  )
}

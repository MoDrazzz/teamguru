import {
  AuthFormTitle,
  AuthWrapper,
  SignupForm,
  SignupHero,
} from '@/components'

export default function SignUp() {
  return (
    <div className="grid h-full place-items-center">
      <AuthWrapper>
        <div className="flex">
          <SignupHero />
          <section className="flex flex-col gap-8 px-12 py-8">
            <AuthFormTitle variant="signup" />
            <SignupForm />
          </section>
        </div>
      </AuthWrapper>
    </div>
  )
}

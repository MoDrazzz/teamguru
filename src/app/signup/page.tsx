import { AuthWrapper, SignupHero } from '@/components'

export default function SignUp() {
  return (
    <div className="grid place-items-center h-full">
      <AuthWrapper>
        <div className="flex">
          <SignupHero />
        </div>
      </AuthWrapper>
    </div>
  )
}

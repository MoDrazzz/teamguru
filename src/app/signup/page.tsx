import { AuthWrapper } from '@/components'
import SignupHero from '@/components/SignupHero'

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

import { AuthWrapper, LoginSkeleton } from '@/components'

export default function SignupLoading() {
  return (
    <div className="grid h-full place-items-center">
      <AuthWrapper>
        <LoginSkeleton />
      </AuthWrapper>
    </div>
  )
}

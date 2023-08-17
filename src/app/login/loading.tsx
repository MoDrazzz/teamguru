import { AuthWrapper, LoginSkeleton } from '@/components'

export default function SignupLoading() {
  return (
    <div className="grid place-items-center h-full">
      <AuthWrapper>
        <LoginSkeleton />
      </AuthWrapper>
    </div>
  )
}

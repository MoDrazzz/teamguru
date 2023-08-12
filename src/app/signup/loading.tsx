import { AuthWrapper, SignupSkeleton } from '@/components'

export default function SignupLoading() {
  return (
    <div className="grid place-items-center h-full">
      <AuthWrapper>
        <SignupSkeleton />
      </AuthWrapper>
    </div>
  )
}

import { AuthWrapper, SignupSkeleton } from '@/components'

export default function SignupLoading() {
  return (
    <div className="grid h-full place-items-center">
      <AuthWrapper>
        <SignupSkeleton />
      </AuthWrapper>
    </div>
  )
}

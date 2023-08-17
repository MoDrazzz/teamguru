import { AuthFormTitleSkeleton, FormFieldSkeleton, LogoSkeleton } from '@/components'

const LoginSkeleton = () => {
  return (
    <div className="px-8 animate-pulse py-4 sm:px-12 sm:py-8 grid gap-6 sm:gap-8">
      <LogoSkeleton />
      <AuthFormTitleSkeleton variant="login" />
      <form className="grid gap-6 w-56 sm:w-80 justify-items-start">
        <FormFieldSkeleton />
        <FormFieldSkeleton />
        <div className="w-24 h-10 bg-slate-200 animate-pulse rounded-lg" />
      </form>
    </div>
  )
}

export default LoginSkeleton

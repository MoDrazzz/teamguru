import {
  AuthFormTitleSkeleton,
  FormFieldSkeleton,
  LogoSkeleton,
} from '@/components'

const LoginSkeleton = () => {
  return (
    <div className="grid gap-6 px-8 py-4 sm:gap-8 sm:px-12 sm:py-8">
      <LogoSkeleton />
      <AuthFormTitleSkeleton variant="login" />
      <form className="grid w-56 justify-items-start gap-6 sm:w-80">
        <FormFieldSkeleton />
        <FormFieldSkeleton />
        <div className="skeleton h-10 w-24 rounded-lg" />
      </form>
    </div>
  )
}

export default LoginSkeleton

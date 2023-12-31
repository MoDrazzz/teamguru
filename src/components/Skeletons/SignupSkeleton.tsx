import {
  AuthFormTitleSkeleton,
  FormFieldSkeleton,
  ReviewsSkeleton,
} from '@/components'

const SignupSkeleton = () => {
  return (
    <div className="flex">
      <section className="flex w-96 flex-col justify-between rounded-lg bg-primary-500 p-8">
        <div className="grid gap-16">
          <div className="h-6 w-1/3 animate-pulse rounded-full bg-primary-600" />
          <div>
            <div className="h-8 w-[90%] animate-pulse rounded-full bg-primary-600" />
            <div className="mt-1 h-8 w-2/5 animate-pulse rounded-full bg-primary-600" />
            <div className="mt-3 h-5 w-full animate-pulse rounded-full bg-primary-600" />
            <div className="mt-1 h-5 w-3/5 animate-pulse rounded-full bg-primary-600" />
          </div>
        </div>
        <ReviewsSkeleton />
      </section>
      <section className="flex flex-col gap-8 px-12 py-8">
        <AuthFormTitleSkeleton variant="signup" />
        <form className="grid w-96 justify-items-start gap-6">
          <div className="flex w-full gap-4">
            <FormFieldSkeleton />
            <FormFieldSkeleton />
          </div>
          <FormFieldSkeleton />
          <FormFieldSkeleton />
          <FormFieldSkeleton />
          <div className="skeleton h-10 w-24 rounded-lg" />
        </form>
      </section>
    </div>
  )
}

export default SignupSkeleton

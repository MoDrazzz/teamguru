import {
  AuthFormTitleSkeleton,
  FormFieldSkeleton,
  ReviewsSkeleton,
} from '@/components'

const SignupSkeleton = () => {
  return (
    <div className="flex">
      <section className="w-96 rounded-lg flex flex-col justify-between bg-primary-500 p-8">
        <div className="grid gap-16 animate-pulse">
          <div className="rounded-full w-1/3 h-6 bg-primary-600" />
          <div>
            <div className="rounded-full w-[90%] h-8 bg-primary-600" />
            <div className="rounded-full w-2/5 mt-1 h-8 bg-primary-600" />
            <div className="rounded-full mt-3 w-full h-5 bg-primary-600" />
            <div className="rounded-full mt-1 w-3/5 h-5 bg-primary-600" />
          </div>
        </div>
        <ReviewsSkeleton />
      </section>
      <section className="px-12 flex flex-col gap-8 py-8">
        <AuthFormTitleSkeleton variant="signup" />
        <form className="grid gap-6 justify-items-start w-96">
          <div className="flex gap-4 w-full">
            <FormFieldSkeleton />
            <FormFieldSkeleton />
          </div>
          <FormFieldSkeleton />
          <FormFieldSkeleton />
          <FormFieldSkeleton />
          <div className="w-24 h-10 bg-slate-200 animate-pulse rounded-lg" />
        </form>
      </section>
    </div>
  )
}

export default SignupSkeleton

import { FormFieldAltSkeleton } from '@/components'

const PersonalInformationSkeleton = () => {
  return (
    <form className="grid animate-pulse grid-cols-[12rem_12rem] gap-3">
      <div className="col-span-2 flex gap-4">
        <div className="h-7 w-48 rounded-full bg-slate-200 dark:bg-zinc-700" />
        <div className="h-7 w-16 rounded-full bg-slate-200 dark:bg-zinc-700" />
      </div>
      <FormFieldAltSkeleton />
      <FormFieldAltSkeleton />
      <FormFieldAltSkeleton />
    </form>
  )
}

export default PersonalInformationSkeleton

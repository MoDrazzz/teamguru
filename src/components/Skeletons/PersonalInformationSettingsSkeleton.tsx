import { FormFieldAltSkeleton } from '@/components'

const PersonalInformationSkeleton = () => {
  return (
    <form className="grid grid-cols-[12rem_12rem] gap-3">
      <div className="col-span-2 flex gap-4">
        <div className="skeleton h-7 w-48 rounded-full" />
        <div className="skeleton h-7 w-16 rounded-full" />
      </div>
      <FormFieldAltSkeleton />
      <FormFieldAltSkeleton />
      <FormFieldAltSkeleton />
    </form>
  )
}

export default PersonalInformationSkeleton

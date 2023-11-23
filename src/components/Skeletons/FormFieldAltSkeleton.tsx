import { InputAltSkeleton } from '@/components'

const FormFieldAltSkeleton = () => {
  return (
    <div className="grid w-full gap-1">
      <div className="skeleton h-5 w-2/5 rounded-full" />
      <InputAltSkeleton />
    </div>
  )
}

export default FormFieldAltSkeleton

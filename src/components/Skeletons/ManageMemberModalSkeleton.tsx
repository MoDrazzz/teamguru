import { FormFieldSkeleton, ModalFooterSkeleton, ProfileSkeleton } from '@/components'

const ManageMemberModalSkeleton = () => {
  return (
    <div className="flex w-80 flex-col gap-6">
      <div className="skeleton h-7 w-32 rounded-full" />
      <ProfileSkeleton />
      <FormFieldSkeleton />
      <FormFieldSkeleton />
      <ModalFooterSkeleton />
    </div>
  )
}

export default ManageMemberModalSkeleton

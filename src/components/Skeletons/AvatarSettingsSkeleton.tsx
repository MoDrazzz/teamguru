import { AvatarSkeleton } from '@/components'

const AvatarSettingsSkeleton = () => {
  return (
    <div className="grid gap-3">
      <div className="flex gap-4">
        <div className="skeleton h-7 w-20 rounded-full" />
        <div className="skeleton h-7 w-16 rounded-full" />
      </div>
      <AvatarSkeleton size="lg" />
    </div>
  )
}

export default AvatarSettingsSkeleton

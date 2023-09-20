import { AvatarSkeleton } from '@/components'

const AvatarSettingsSkeleton = () => {
  return (
    <div className="grid animate-pulse gap-3">
      <div className="flex gap-4">
        <div className="h-7 w-20 rounded-full bg-slate-200 dark:bg-zinc-700" />
        <div className="h-7 w-16 rounded-full bg-slate-200 dark:bg-zinc-700" />
      </div>
      <AvatarSkeleton size="lg" />
    </div>
  )
}

export default AvatarSettingsSkeleton

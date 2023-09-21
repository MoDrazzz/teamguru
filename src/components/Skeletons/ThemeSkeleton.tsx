import { ImageSkeleton } from '@/components'

const ThemeSkeleton = () => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="h-[136px] w-64">
        <ImageSkeleton />
      </div>
      <div className="h-5 w-16 animate-pulse rounded-full bg-slate-200 dark:bg-zinc-700" />
    </div>
  )
}

export default ThemeSkeleton

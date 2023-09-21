import { ImageSkeleton } from '@/components'

const ThemeSkeleton = () => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="h-[136px] w-64">
        <ImageSkeleton />
      </div>
      <div className="skeleton h-5 w-16 rounded-full" />
    </div>
  )
}

export default ThemeSkeleton

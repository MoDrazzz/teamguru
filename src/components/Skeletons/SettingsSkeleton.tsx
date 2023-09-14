import { ProfileSettingsSkeleton, SettingsSidebarSkeleton } from '@/components'

const SettingsSkeleton = () => {
  return (
    <div className="grid w-full grid-cols-[12rem_1fr]">
      <SettingsSidebarSkeleton />
      <ProfileSettingsSkeleton />
    </div>
  )
}

export default SettingsSkeleton

import {
  AvatarSettingsSkeleton,
  PageHeadingSkeleton,
  PersonalInformationSettingsSkeleton,
  ProfileSkeleton,
} from '@/components'

const ProfileSettingsSkeleton = () => {
  return (
    <main className="flex w-full flex-col gap-8 p-16">
      <PageHeadingSkeleton />
      <div className="grid gap-3">
        <div className="h-7 w-24 rounded-full animate-pulse bg-slate-200 dark:bg-zinc-700" />
        <ProfileSkeleton />
      </div>
      <PersonalInformationSettingsSkeleton />
      <AvatarSettingsSkeleton />
    </main>
  )
}

export default ProfileSettingsSkeleton

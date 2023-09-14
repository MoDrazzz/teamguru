import {
  AvatarSettingsSkeleton,
  PageHeadingSkeleton,
  PersonalInformationSettingsSkeleton,
  ProfileSkeleton,
} from '@/components'

const ProfileSettingsSkeleton = () => {
  return (
    <main className="flex w-full flex-col gap-8 bg-slate-50 p-16">
      <PageHeadingSkeleton />
      <div className="grid animate-pulse gap-3">
        <div className="h-7 w-24 rounded-full bg-slate-200" />
        <ProfileSkeleton />
      </div>
      <PersonalInformationSettingsSkeleton />
      <AvatarSettingsSkeleton />
    </main>
  )
}

export default ProfileSettingsSkeleton
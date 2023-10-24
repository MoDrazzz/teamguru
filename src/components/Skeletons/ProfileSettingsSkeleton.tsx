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
        <div className="skeleton h-7 w-24 rounded-full" />
        <ProfileSkeleton />
      </div>
      <PersonalInformationSettingsSkeleton />
      <AvatarSettingsSkeleton />
    </main>
  )
}

export default ProfileSettingsSkeleton

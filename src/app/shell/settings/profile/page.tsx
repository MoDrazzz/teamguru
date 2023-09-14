'use client'

import {
  AvatarSettings,
  PageHeading,
  PersonalInformationSettings,
  Profile,
  ProfileSettingsSkeleton,
  Title,
} from '@/components'
import { useAuth } from '@/contexts'

export default function ProfileSettings() {
  const { userProfile } = useAuth()

  if (!userProfile) return <ProfileSettingsSkeleton />

  return (
    <main className="flex w-full flex-col gap-8 bg-slate-50 p-16">
      <PageHeading
        title="Profile"
        subtitle="Manage your data or change your avatar."
      />
      <div className="grid gap-3">
        <Title>Preview</Title>
        <Profile userProfile={userProfile} />
      </div>
      <PersonalInformationSettings />
      <AvatarSettings />
    </main>
  )
}

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
    <main className="flex w-full flex-col gap-8 p-16">
      <PageHeading
        title="Profile"
        subtitle="Manage your data or change your avatar."
      />
      <section className="grid gap-3">
        <Title>Preview</Title>
        <Profile userProfile={userProfile} />
      </section>
      <PersonalInformationSettings />
      <AvatarSettings />
    </main>
  )
}

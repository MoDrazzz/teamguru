'use client'

import { Button, PageHeading, Team } from '@/components'
import { UserProfile } from '@/types'

const userProfiles: UserProfile[] = [
  {
    avatar_id: null,
    bio: 'Team Leader',
    created_at: '2021-08-18T18:00:00.000Z',
    first_name: 'John',
    id: '1',
    last_name: 'Doe',
    user_id: '1234',
  },
  {
    avatar_id: null,
    bio: 'Team Leader',
    created_at: '2021-08-18T18:00:00.000Z',
    first_name: 'John',
    id: '1',
    last_name: 'Doe',
    user_id: '1234',
  },
  {
    avatar_id: null,
    bio: 'Team Leader',
    created_at: '2021-08-18T18:00:00.000Z',
    first_name: 'John',
    id: '1',
    last_name: 'Doe',
    user_id: '1234',
  },
  {
    avatar_id: null,
    bio: 'Team Leader',
    created_at: '2021-08-18T18:00:00.000Z',
    first_name: 'John',
    id: '1',
    last_name: 'Doe',
    user_id: '1234',
  },
]

export default function Teams() {
  return (
    <div className="flex h-screen w-full flex-col items-start gap-6 bg-slate-200 p-16">
      <PageHeading
        title="Teams"
        subtitle="Manage your teams, members, and team roles."
      />
      <Button onClick={() => {}}>Create new team</Button>
      <Team members={userProfiles} name="California Team" />
      <Team members={[]} name="Los Angeles Team" />
    </div>
  )
}

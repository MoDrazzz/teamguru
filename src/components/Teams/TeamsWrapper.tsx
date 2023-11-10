import { Team } from '@/components'
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

const TeamsWrapper = () => {
  return (
    <>
      <Team members={userProfiles} name="California Team" />
      <Team members={[]} name="Los Angeles Team" />
    </>
  )
}

export default TeamsWrapper

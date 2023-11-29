import { Avatar } from '@/components'
import { UserProfileType } from '@/types'

interface Props {
  userProfile: UserProfileType
}

const Profile = ({ userProfile }: Props) => {
  const userFullName = `${userProfile.first_name} ${userProfile.last_name}`

  return (
    <figure className="flex gap-3">
      <Avatar profile={userProfile} />
      <div className="grid">
        <figcaption className="font-medium">{userFullName}</figcaption>
        <figcaption className="text-xs">{userProfile.bio}</figcaption>
      </div>
    </figure>
  )
}

export default Profile

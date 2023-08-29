import { Avatar } from '@/components'
import { Reviewer, UserProfile } from '@/types'

interface Props {
  userProfile: UserProfile | Reviewer
}

const Profile = ({ userProfile }: Props) => {
  const userFullName = `${userProfile.first_name} ${userProfile.last_name}`

  return (
    <figure className="flex gap-3">
      <Avatar name={userFullName} url={userProfile.avatar_url} />
      <div className="grid">
        <figcaption className="font-medium">{userFullName}</figcaption>
        <figcaption className="text-xs">{userProfile.bio}</figcaption>
      </div>
    </figure>
  )
}

export default Profile

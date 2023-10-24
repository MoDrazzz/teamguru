import { Profile } from '@/components'
import { Review as ReviewType } from '@/types'

interface Props {
  review: ReviewType
}

const Review = ({ review: { content, reviewer } }: Props) => {
  return (
    <figure className="grid gap-4 rounded-lg bg-primary-800 p-4 text-sm text-primary-50">
      <p>{content}</p>
      <Profile userProfile={reviewer} />
    </figure>
  )
}

export default Review

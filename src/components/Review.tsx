import { Profile } from '@/components'
import { Reviewer } from '@/types'

interface Props {
  review: string
  reviewer: Reviewer
}

const Review = ({ review, reviewer }: Props) => {
  return (
    <figure className="grid gap-4 rounded-lg bg-primary-800 p-4 text-sm text-primary-50">
      <p>{review}</p>
      <Profile userProfile={reviewer} />
    </figure>
  )
}

export default Review

import { Avatar } from '@/components'
import { Reviewer } from '@/types'

interface Props {
  review: string
  reviewer: Reviewer
}

const Review = ({ review, reviewer }: Props) => {
  return (
    <figure className="rounded-lg bg-primary-800 text-primary-50 grid p-4 gap-4 text-sm">
      <p>{review}</p>
      <div className="flex gap-3">
        <Avatar name={reviewer.name} url={reviewer.avatar_url} />
        <div className="grid">
          <figcaption className="font-medium">{reviewer.name}</figcaption>
          <figcaption className="text-xs">{reviewer.position}</figcaption>
        </div>
      </div>
    </figure>
  )
}

export default Review

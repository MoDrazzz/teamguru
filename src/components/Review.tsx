import Image from 'next/image'

interface Props {
  review: string
  avatarUrl: string
  name: string
  title: string
}

const Review = ({ review, avatarUrl, name, title }: Props) => {
  return (
    <div className="rounded-lg bg-primary-800 text-primary-50 grid p-4 gap-4 text-sm">
      <p>{review}</p>
      <div className="flex gap-3">
        <Image
          src={avatarUrl}
          alt={`${name}'s Avatar`}
          className="rounded-lg w-10 h-10"
          width={40}
          height={40}
        />
        <div className="grid">
          <p className="font-medium">{name}</p>
          <p className="text-xs">{title}</p>
        </div>
      </div>
    </div>
  )
}

export default Review

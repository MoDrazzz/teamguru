import { TeamSkeleton } from '@/components'

const TeamsWrapperSkeleton = () => {
  return Array.from({ length: 5 }).map((_, index) => (
    <TeamSkeleton key={index} />
  ))
}

export default TeamsWrapperSkeleton

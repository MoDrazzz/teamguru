import { Team } from '@/types'
import { TeamMember } from '@/types'

export interface TeamData extends Team {
  members: TeamMember[]
}

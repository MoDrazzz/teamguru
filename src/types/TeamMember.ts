import { Role, UserProfile } from '@/types'

export interface TeamMember extends UserProfile {
  role: Role | null
}

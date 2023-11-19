import { RoleType, TeamType, UserProfileType } from '@/types'

export interface TeamMemberType extends UserProfileType {
  role: RoleType | null
}

export interface TeamDataType extends TeamType {
  members: TeamMemberType[]
}

export interface SelectedMemberType {
  profile: TeamMemberType
  role: RoleType | null
}
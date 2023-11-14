import { UserProfileType } from '@/types'

export interface ReviewType {
  id: string
  content: string
  reviewer: UserProfileType
}

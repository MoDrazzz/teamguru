import { UserProfile } from '@/types'

export interface Review {
  id: string
  content: string
  reviewer: UserProfile
}

/* eslint-disable no-unused-vars */
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          avatar_url: string
          created_at: string
          first_name: string
          id: string
          last_name: string
          user_id: string
        }
        Insert: {
          avatar_url?: string
          created_at?: string
          first_name: string
          id?: string
          last_name: string
          user_id: string
        }
        Update: {
          avatar_url?: string
          created_at?: string
          first_name?: string
          id?: string
          last_name?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'profiles_user_id_fkey'
            columns: ['user_id']
            referencedRelation: 'users'
            referencedColumns: ['id']
          },
        ]
      }
      reviews: {
        Row: {
          content: string
          created_at: string | null
          id: string
          profile_id: string
          reviewer_position: string
        }
        Insert: {
          content: string
          created_at?: string | null
          id?: string
          profile_id: string
          reviewer_position: string
        }
        Update: {
          content?: string
          created_at?: string | null
          id?: string
          profile_id?: string
          reviewer_position?: string
        }
        Relationships: [
          {
            foreignKeyName: 'reviews_profile_id_fkey'
            columns: ['profile_id']
            referencedRelation: 'profiles'
            referencedColumns: ['id']
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

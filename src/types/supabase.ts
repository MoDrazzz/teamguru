/* eslint-disable no-unused-vars */
export interface DatabaseType {
  public: {
    Tables: {
      organisations: {
        Row: {
          created_at: string
          id: string
          name: string
        }
        Insert: {
          created_at?: string
          id?: string
          name: string
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_id: string | null
          bio: string
          created_at: string
          first_name: string
          id: string
          last_name: string
          organisation_id: string
          role_id: string | null
          team_id: string | null
          type: 'team_member' | 'team_leader' | 'organisation' | 'admin'
          user_id: string
        }
        Insert: {
          avatar_id?: string | null
          bio?: string
          created_at?: string
          first_name: string
          id?: string
          last_name: string
          organisation_id: string
          role_id?: string | null
          team_id?: string | null
          type?: string | null
          user_id: string
        }
        Update: {
          avatar_id?: string | null
          bio?: string
          created_at?: string
          first_name?: string
          id?: string
          last_name?: string
          organisation_id?: string
          role_id?: string | null
          team_id?: string | null
          type?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'profiles_organisation_id_fkey'
            columns: ['organisation_id']
            isOneToOne: false
            referencedRelation: 'organisations'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'profiles_role_id_fkey'
            columns: ['role_id']
            isOneToOne: false
            referencedRelation: 'roles'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'profiles_team_id_fkey'
            columns: ['team_id']
            isOneToOne: false
            referencedRelation: 'teams'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'profiles_user_id_fkey'
            columns: ['user_id']
            isOneToOne: false
            referencedRelation: 'users'
            referencedColumns: ['id']
          },
        ]
      }
      reviews: {
        Row: {
          content: string
          created_at: string
          id: string
          profile_id: string
        }
        Insert: {
          content: string
          created_at?: string
          id?: string
          profile_id: string
        }
        Update: {
          content?: string
          created_at?: string
          id?: string
          profile_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'reviews_profile_id_fkey'
            columns: ['profile_id']
            isOneToOne: false
            referencedRelation: 'profiles'
            referencedColumns: ['id']
          },
        ]
      }
      roles: {
        Row: {
          created_at: string
          id: string
          name: string
          organisation_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          name: string
          organisation_id: string
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
          organisation_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'roles_organisation_id_fkey'
            columns: ['organisation_id']
            isOneToOne: false
            referencedRelation: 'organisations'
            referencedColumns: ['id']
          },
        ]
      }
      teams: {
        Row: {
          created_at: string
          id: string
          name: string
          organisation_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          name: string
          organisation_id: string
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
          organisation_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'teams_organisation_id_fkey'
            columns: ['organisation_id']
            isOneToOne: false
            referencedRelation: 'organisations'
            referencedColumns: ['id']
          },
        ]
      }
    }
    Views: {
      random_three_reviews: {
        Row: {
          content: string
          id: string
          profile_id: string
        }
        Relationships: [
          {
            foreignKeyName: 'reviews_profile_id_fkey'
            columns: ['profile_id']
            isOneToOne: false
            referencedRelation: 'profiles'
            referencedColumns: ['id']
          },
        ]
      }
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

type Tables<T extends keyof DatabaseType['public']['Tables']> =
  DatabaseType['public']['Tables'][T]['Row']

export type UserProfileType = Tables<'profiles'>
export type TeamType = Tables<'teams'>
export type RoleType = Tables<'roles'>

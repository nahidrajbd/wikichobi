
export interface TeamMember {
  id: string;
  name: string;
  designation: string;
  category: 'Core Team' | 'Key Volunteers';
  bio: string;
  avatar_url: string;
  created_at: string;
  updated_at: string;
  sort_order?: number;
}

export interface Event {
  id: string;
  title: string;
  caption: string;
  category_link: string | null;
  thumbnail_url: string | null;
  event_date: string | null;
  created_at: string;
  updated_at: string;
}

// Add Database type augmentation for Supabase
declare module '@supabase/supabase-js' {
  interface Database {
    public: {
      Tables: {
        team_members: {
          Row: TeamMember
          Insert: Omit<TeamMember, 'id' | 'created_at' | 'updated_at'>
          Update: Partial<Omit<TeamMember, 'id' | 'created_at'>>
        }
        events: {
          Row: Event
          Insert: Omit<Event, 'id' | 'created_at' | 'updated_at'>
          Update: Partial<Omit<Event, 'id' | 'created_at'>>
        }
      }
    }
  }
}

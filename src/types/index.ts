
export interface TeamMember {
  id: string;
  name: string;
  designation: string;
  category: 'Core Team' | 'Key Volunteers';
  bio: string;
  avatar_url: string;
  created_at: string;
  updated_at: string;
}

export interface Event {
  id: string;
  title: string;
  caption: string;
  category_link: string | null;
  thumbnail_url: string | null;
  created_at: string;
  updated_at: string;
}

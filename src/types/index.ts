export interface TeamMember {
  id: string;
  name: string;
  designation: string;
  category: 'Core Team' | 'Key Volunteers';
  bio: string | null;
  avatar_url: string | null;
  created_at: string;
  updated_at: string;
  sort_order?: number | null;
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

// Add dummy data helper functions
export const getDummyTeamMembers = (): TeamMember[] => [
  {
    id: '1',
    name: 'Nahid Hossain',
    designation: 'Co-Founder',
    category: 'Core Team',
    bio: 'Professional photographer with over 10 years of experience documenting cultural events in Bangladesh.',
    avatar_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Nahid_Hossain_taking_photos_at_Dhaka_Photo_Walk_for_WLM_2018_%2811%29.jpg/960px-Nahid_Hossain_taking_photos_at_Dhaka_Photo_Walk_for_WLM_2018_%2811%29.jpg?20180927081300',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    sort_order: 1
  },
  {
    id: '2',
    name: 'Delwar Hossain',
    designation: 'Co-Founder',
    category: 'Core Team',
    bio: 'Specialized in portrait photography with focus on capturing authentic expressions.',
    avatar_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/DelwarHossain_Hosting_Bangla_WikiConference_2024_%289%29.jpg/500px-DelwarHossain_Hosting_Bangla_WikiConference_2024_%289%29.jpg?20241129124552',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    sort_order: 2
  },
  {
    id: '3',
    name: 'Saied Mahi',
    designation: 'Event Communication',
    category: 'Core Team',
    bio: 'Handles image processing, metadata, and uploads to Wikimedia Commons.',
    avatar_url: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    sort_order: 3
  },
  {
    id: '4',
    name: 'Fahima Begum',
    designation: 'Event Coordinator',
    category: 'Key Volunteers',
    bio: 'Organizes photography sessions at various events and manages volunteer schedules.',
    avatar_url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    sort_order: 1
  },
  {
    id: '5',
    name: 'Sanjay Das',
    designation: 'Photographer',
    category: 'Key Volunteers',
    bio: 'Weekend volunteer specializing in event photography.',
    avatar_url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    sort_order: 2
  }
];

export const getDummyEvents = (): Event[] => [
  {
    id: '1',
    title: 'Nagorik Coalition Event 2025',
    caption: 'Captured notable political leaders portraits',
    category_link: 'https://commons.wikimedia.org/w/index.php?title=Special:ListFiles/NahidHossain',
    thumbnail_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Dr._Ali_Riaz_giving_speech_at_Nagorik_Coalition_Event_%282%29.jpg/960px-Dr._Ali_Riaz_giving_speech_at_Nagorik_Coalition_Event_%282%29.jpg',
    event_date: '2025-05-11',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: '2',
    title: 'July Shaheed Smrity Foundation Program at Rajshahi',
    caption: 'Photographs of young leaders',
    category_link: 'https://commons.wikimedia.org/wiki/Category:Photographs_by_Nahid_Hossain',
    thumbnail_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Sarjis_Alam_at_Rajshahi_%282%29.jpg/960px-Sarjis_Alam_at_Rajshahi_%282%29.jpg',
    event_date: '2024-12-14',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: '3',
    title: 'Forum for Bangladesh Studies event',
    caption: 'Portraits of writers and leaders from Forum for Bangladesh Studies event',
    category_link: 'https://commons.wikimedia.org/wiki/Category:Photographs_by_Nahid_Hossain',
    thumbnail_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Mia_Golam_Parwar.jpg/960px-Mia_Golam_Parwar.jpg',
    event_date: '2024-12-27',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: '4',
    title: 'BNP Workshop',
    caption: 'Documentation of leading researchers in various fields',
    category_link: 'https://commons.wikimedia.org/wiki/Category:Politicians_of_the_Bangladesh_Nationalist_Party',
    thumbnail_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Abu_Sayed_Chad_BNP_Politician_from_Rajshahi.jpg/960px-Abu_Sayed_Chad_BNP_Politician_from_Rajshahi.jpg',
    event_date: '2024-11-05',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
];

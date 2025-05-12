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
    title: 'Bangladesh Book Fair 2025',
    caption: 'Captured notable authors and artists at the annual book fair',
    category_link: 'https://commons.wikimedia.org/wiki/Category:Bangladesh_Book_Fair_2025',
    thumbnail_url: 'https://images.unsplash.com/photo-1526721940322-10fb6e3ae94a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    event_date: '2025-02-15',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: '2',
    title: 'Digital Bangladesh Conference',
    caption: 'Photographs of tech leaders and innovators',
    category_link: 'https://commons.wikimedia.org/wiki/Category:Digital_Bangladesh_Conference_2025',
    thumbnail_url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    event_date: '2025-01-20',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: '3',
    title: 'Literary Festival Dhaka',
    caption: 'Portraits of writers and poets from across South Asia',
    category_link: 'https://commons.wikimedia.org/wiki/Category:Literary_Festival_Dhaka_2024',
    thumbnail_url: 'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80',
    event_date: '2024-12-10',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: '4',
    title: 'Bengali Scientists Symposium',
    caption: 'Documentation of leading researchers in various fields',
    category_link: 'https://commons.wikimedia.org/wiki/Category:Bengali_Scientists_Symposium_2024',
    thumbnail_url: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    event_date: '2024-11-05',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: '5',
    title: 'Women in Tech Bangladesh',
    caption: 'Featuring prominent women leaders in technology',
    category_link: 'https://commons.wikimedia.org/wiki/Category:Women_in_Tech_Bangladesh_2024',
    thumbnail_url: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80',
    event_date: '2024-10-15',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: '6',
    title: 'Bangladesh Music Awards',
    caption: 'Portraits of musicians and performers',
    category_link: 'https://commons.wikimedia.org/wiki/Category:Bangladesh_Music_Awards_2024',
    thumbnail_url: 'https://images.unsplash.com/photo-1501612780327-45045538702b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    event_date: '2024-09-20',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  }
];


import React from 'react';
import Layout from '@/components/layout/Layout';
import PageHeader from '@/components/ui/PageHeader';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  imageSrc?: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, bio, imageSrc }) => {
  return (
    <div className="bg-white border rounded p-6">
      <div className="flex justify-center mb-4">
        <Avatar className="w-24 h-24">
          {imageSrc ? (
            <AvatarImage src={imageSrc} alt={name} className="object-cover" />
          ) : (
            <AvatarFallback className="bg-wikichobi-light-gray text-wikichobi-medium-gray text-xs">
              {name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          )}
        </Avatar>
      </div>
      <h3 className="text-lg font-medium text-center">{name}</h3>
      <p className="text-wikichobi-medium-gray text-sm text-center mb-4">{role}</p>
      <p className="text-sm">{bio}</p>
    </div>
  );
};

const Team = () => {
  const coreTeam = [
    {
      name: "Nahid Hossain",
      role: "Co-Founder",
      bio: "Nahid is a wikipedian who has been volunteering on Wikimedia projects for more than 10 years now.",
      imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Nahid_Hossain_taking_photos_at_Dhaka_Photo_Walk_for_WLM_2018_%2811%29.jpg/330px-Nahid_Hossain_taking_photos_at_Dhaka_Photo_Walk_for_WLM_2018_%2811%29.jpg"
    },
    {
      name: "Delwar Hossain",
      role: "Co-Founder",
      bio: "Delwar is a wikipedian with over 8 years of experience in media communication. He handles all communication aspects for the WikiChobi project.",
      imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/DelwarHossain_Hosting_Bangla_WikiConference_2024_%289%29.jpg/330px-DelwarHossain_Hosting_Bangla_WikiConference_2024_%289%29.jpg"
    },
    {
      name: "Biplob Kumar",
      role: "Technical Lead",
      bio: "Biplob is a developer and open source enthusiast who helps the WikiChobi project with technical expertise and implementation.",
      imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Nahid_Hossain_taking_photos_at_Dhaka_Photo_Walk_for_WLM_2018_%2811%29.jpg/330px-Nahid_Hossain_taking_photos_at_Dhaka_Photo_Walk_for_WLM_2018_%2811%29.jpg"
    }
  ];

  const volunteers = [
    {
      name: "Mmr Safy",
      role: "Image Categorizer",
      bio: "Mmr Safy is responsible for categorizing and organizing images uploaded to Wikimedia Commons.",
      imageSrc: "/team/arif-hossain.jpg"
    },
    {
      name: "Rabiba",
      role: "Community Coordinator",
      bio: "Rabiba manages communications with the volunteer community, ensuring smooth collaboration and participation.",
      imageSrc: "/team/nusrat-jahan.jpg"
    },
    {
      name: "Manik Das",
      role: "File Manager & Social Media",
      bio: "Manik works with uploaded files and handles social media presence for the WikiChobi project.",
      imageSrc: "/team/kamal-uddin.jpg"
    }
  ];

  return (
    <Layout>
      <div className="container py-16">
        <PageHeader 
          title="Our Team" 
          subtitle="The people behind WikiChobi"
        />
        
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-medium mb-6">Core Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {coreTeam.map((member, index) => (
              <TeamMember
                key={index}
                name={member.name}
                role={member.role}
                bio={member.bio}
                imageSrc={member.imageSrc}
              />
            ))}
          </div>
          
          <h2 className="text-2xl font-medium mb-6">Key Volunteers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {volunteers.map((member, index) => (
              <TeamMember
                key={index}
                name={member.name}
                role={member.role}
                bio={member.bio}
                imageSrc={member.imageSrc}
              />
            ))}
          </div>
          
          <div className="mt-12 p-6 bg-wikichobi-light-gray rounded text-center">
            <h3 className="text-xl font-medium mb-2">Join Our Team</h3>
            <p className="mb-4">
              We're always looking for photographers, editors, and volunteers to help with the project.
            </p>
            <a href="/contact" className="text-black underline hover:no-underline">
              Contact us to get involved
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Team;

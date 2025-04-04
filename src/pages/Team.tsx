
import React from 'react';
import Layout from '@/components/layout/Layout';
import PageHeader from '@/components/ui/PageHeader';

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, bio }) => {
  return (
    <div className="bg-white border rounded p-6">
      <div className="w-24 h-24 bg-wikichobi-light-gray rounded-full mx-auto mb-4 flex items-center justify-center text-wikichobi-medium-gray text-xs">
        Photo
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
      name: "Rahim Ahmed",
      role: "Founder & Lead Photographer",
      bio: "Rahim is a professional photographer with over 10 years of experience. He founded WikiChobi in 2020 to support free knowledge initiatives."
    },
    {
      name: "Farida Begum",
      role: "Coordinator",
      bio: "Farida manages event scheduling and coordinates with volunteers. She has been an active Wikipedian since 2017."
    },
    {
      name: "Mohammed Khan",
      role: "Technical Lead",
      bio: "Mohammed handles the technical aspects of the project, including equipment management and image processing workflows."
    }
  ];

  const volunteers = [
    {
      name: "Arif Hossain",
      role: "Photographer",
      bio: "Arif joined WikiChobi in 2021 and has contributed over 50 portraits to Wikimedia Commons."
    },
    {
      name: "Nusrat Jahan",
      role: "Uploader & Categorizer",
      bio: "Nusrat ensures all images are properly uploaded, categorized, and linked on Wikimedia projects."
    },
    {
      name: "Kamal Uddin",
      role: "Outreach Coordinator",
      bio: "Kamal manages relationships with event organizers and explains the project to potential subjects."
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

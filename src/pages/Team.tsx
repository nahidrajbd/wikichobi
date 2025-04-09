
import React, { useEffect, useState } from 'react';
import Layout from '@/components/layout/Layout';
import PageHeader from '@/components/ui/PageHeader';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { supabase } from '@/integrations/supabase/client';
import { TeamMember } from '@/types';
import { Link } from 'react-router-dom';

interface TeamMemberProps {
  member: TeamMember;
}

const TeamMemberCard: React.FC<TeamMemberProps> = ({ member }) => {
  return (
    <div className="bg-white border rounded p-6">
      <div className="flex justify-center mb-4">
        <Avatar className="w-24 h-24">
          {member.avatar_url ? (
            <AvatarImage src={member.avatar_url} alt={member.name} className="object-cover" />
          ) : (
            <AvatarFallback className="bg-wikichobi-light-gray text-wikichobi-medium-gray text-xs">
              {member.name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          )}
        </Avatar>
      </div>
      <h3 className="text-lg font-medium text-center">{member.name}</h3>
      <p className="text-wikichobi-medium-gray text-sm text-center mb-4">{member.designation}</p>
      <p className="text-sm">{member.bio}</p>
    </div>
  );
};

const Team = () => {
  const [coreTeam, setCoreTeam] = useState<TeamMember[]>([]);
  const [volunteers, setVolunteers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const { data, error } = await supabase
          .from('team_members')
          .select('*')
          .order('sort_order', { ascending: true, nullsLast: true })
          .order('name');

        if (error) {
          console.error('Error fetching team members:', error);
          return;
        }

        if (data) {
          // Cast the data as TeamMember[] to ensure type safety
          const typedData = data as unknown as TeamMember[];
          
          setCoreTeam(typedData.filter(member => member.category === 'Core Team'));
          setVolunteers(typedData.filter(member => member.category === 'Key Volunteers'));
        }
      } catch (error) {
        console.error('Unexpected error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTeamMembers();
  }, []);

  return (
    <Layout>
      <div className="container py-16">
        <PageHeader 
          title="Our Team" 
          subtitle="The people behind WikiChobi"
        />
        
        {loading ? (
          <div className="text-center">Loading team information...</div>
        ) : (
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-medium mb-6">Core Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {coreTeam.length > 0 ? (
                coreTeam.map((member) => (
                  <TeamMemberCard
                    key={member.id}
                    member={member}
                  />
                ))
              ) : (
                <p>No core team members found.</p>
              )}
            </div>
            
            <h2 className="text-2xl font-medium mb-6">Key Volunteers</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {volunteers.length > 0 ? (
                volunteers.map((member) => (
                  <TeamMemberCard
                    key={member.id}
                    member={member}
                  />
                ))
              ) : (
                <p>No key volunteers found.</p>
              )}
            </div>
            
            <div className="mt-12 p-6 bg-wikichobi-light-gray rounded text-center">
              <h3 className="text-xl font-medium mb-2">Join Our Team</h3>
              <p className="mb-4">
                We're always looking for photographers, editors, and volunteers to help with the project.
              </p>
              <Link to="/contact" className="text-black underline hover:no-underline">
                Contact us to get involved
              </Link>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Team;

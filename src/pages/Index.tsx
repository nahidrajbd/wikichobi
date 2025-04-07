
import React, { useEffect, useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import PageHeader from '@/components/ui/PageHeader';
import { Card, CardContent } from '@/components/ui/card';
import { supabase } from '@/integrations/supabase/client';
import { Event } from '@/types';
import { ArrowRight, Calendar } from 'lucide-react';
import { format } from 'date-fns';

const Index = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const { data, error } = await supabase
          .from('events')
          .select('*')
          .order('event_date', { ascending: false })
          .limit(6);

        if (error) {
          console.error('Error fetching events:', error);
          return;
        }

        setEvents(data || []);
      } catch (error) {
        console.error('Unexpected error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return (
    <Layout>
      <section className="container py-16">
        <PageHeader 
          title="WikiChobi" 
          subtitle="Freely-licensed photography for Wikimedia projects"
        />
        
        <div className="max-w-3xl mx-auto bg-wikichobi-light-gray p-6 sm:p-8 rounded">
          <p className="mb-6 text-lg">
            Welcome to WikiChobi, a volunteer project dedicated to providing freely-licensed 
            photographs of notable people in Bangladesh for Wikipedia and other Wikimedia projects.
          </p>
          
          <p className="mb-6">
            Our photographers capture portraits at public events, conferences, and gatherings, 
            helping to enrich the free knowledge commons with high-quality visual content.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start mt-8">
            <Button asChild>
              <a 
                href="https://commons.wikimedia.org/wiki/Category:Photographs_by_Nahid_Hossain" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                View Our Gallery
              </a>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
        
        <div className="mt-16 max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-medium">Recent Contributions</h2>
            <Button variant="outline" size="sm" asChild>
              <Link to="/events" className="flex items-center gap-2">
                View all events <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          {loading ? (
            <div className="text-center py-8">Loading recent contributions...</div>
          ) : events.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((event) => (
                <Card key={event.id} className="overflow-hidden hover:shadow-md transition-shadow">
                  <div className="aspect-video relative">
                    <img 
                      src={event.thumbnail_url || "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Sarjis_Alam_at_Rajshahi_%284%29.jpg/960px-Sarjis_Alam_at_Rajshahi_%284%29.jpg"} 
                      alt={event.title} 
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-medium mb-1">{event.title}</h3>
                    <p className="text-sm text-wikichobi-medium-gray mb-2">{event.caption}</p>
                    {event.event_date && (
                      <div className="flex items-center text-xs text-wikichobi-medium-gray mb-2">
                        <Calendar className="h-3 w-3 mr-1" />
                        {format(new Date(event.event_date), 'MMMM d, yyyy')}
                      </div>
                    )}
                    {event.category_link && (
                      <div className="mt-2">
                        <a 
                          href={event.category_link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-wikichobi-medium-gray underline hover:no-underline"
                        >
                          View collection
                        </a>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <p className="text-center py-4">No recent contributions found.</p>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Index;

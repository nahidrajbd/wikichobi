
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import PageHeader from '@/components/ui/PageHeader';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
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
                href="https://commons.wikimedia.org/wiki/Category:Photographs_by_WikiChobi" 
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
        
        <div className="mt-16 max-w-3xl mx-auto">
          <h2 className="text-xl mb-4 font-medium">Recent Contributions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card className="overflow-hidden hover:shadow-md transition-shadow">
              <div className="aspect-video relative">
                <img 
                  src="/photos/tech-conference-2025.jpg" 
                  alt="Tech Conference 2025" 
                  className="object-cover w-full h-full"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-medium mb-1">Tech Conference 2025</h3>
                <p className="text-sm text-wikichobi-medium-gray">12 portraits added to Wikimedia Commons</p>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden hover:shadow-md transition-shadow">
              <div className="aspect-video relative">
                <img 
                  src="/photos/literary-festival.jpg" 
                  alt="Literary Festival" 
                  className="object-cover w-full h-full"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-medium mb-1">Literary Festival</h3>
                <p className="text-sm text-wikichobi-medium-gray">8 portraits added to Wikimedia Commons</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;

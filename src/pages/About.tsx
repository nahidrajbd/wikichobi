
import React from 'react';
import Layout from '@/components/layout/Layout';
import PageHeader from '@/components/ui/PageHeader';

const About = () => {
  return (
    <Layout>
      <div className="container py-16">
        <PageHeader 
          title="About WikiChobi" 
          subtitle="Our mission and purpose"
        />
        
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="bg-white p-6 sm:p-8 rounded shadow-sm">
            <p className="text-base leading-relaxed">
              WikiChobi is a volunteer photography project inspired by WikiPortraits, dedicated to providing 
              freely-licensed photographs of notable individuals in Bangladesh for Wikipedia and other 
              Wikimedia projects.
            </p>
          </div>
          
          <div className="bg-white p-6 sm:p-8 rounded shadow-sm">
            <h2 className="text-xl font-medium mb-4 border-b pb-2">Our Mission</h2>
            <p className="mb-4 text-base leading-relaxed">
              Many Wikipedia articles about notable people from Bangladesh lack quality images. WikiChobi 
              aims to fill this gap by:
            </p>
            
            <ul className="list-disc pl-5 space-y-2 text-base">
              <li>Taking professional quality portraits of notable individuals</li>
              <li>Ensuring all photos are properly licensed for free use</li>
              <li>Uploading and categorizing images on Wikimedia Commons</li>
              <li>Adding these images to relevant Wikipedia articles</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 sm:p-8 rounded shadow-sm">
            <h2 className="text-xl font-medium mb-4 border-b pb-2">Supporting Free Knowledge</h2>
            <p className="text-base leading-relaxed">
              WikiChobi is part of the broader free knowledge movement. We believe that knowledge should 
              be accessible to everyone, and visual content is an essential part of that knowledge. By 
              providing freely-licensed photographs, we help enrich Wikipedia and other educational resources.
            </p>
          </div>
          
          <div className="bg-white p-6 sm:p-8 rounded shadow-sm">
            <h2 className="text-xl font-medium mb-4 border-b pb-2">How We Work</h2>
            <p className="mb-4 text-base leading-relaxed">
              Our volunteer photographers attend public events, conferences, and gatherings where notable 
              individuals are present. After obtaining proper consent, they take portraits using professional 
              equipment. These images are then:
            </p>
            
            <ol className="list-decimal pl-5 space-y-2 text-base">
              <li>Processed and edited to ensure high quality</li>
              <li>Released under free licenses (typically CC BY-SA 4.0)</li>
              <li>Uploaded to Wikimedia Commons with proper metadata</li>
              <li>Added to relevant Wikipedia articles and other Wikimedia projects</li>
            </ol>
          </div>
          
          <div className="bg-white p-6 sm:p-8 rounded shadow-sm">
            <h2 className="text-xl font-medium mb-4 border-b pb-2">Our Impact</h2>
            <p className="text-base leading-relaxed">
              Since our inception, WikiChobi has contributed hundreds of photographs to Wikimedia Commons, 
              helping to visually enrich Wikipedia articles about Bangladeshi academics, artists, writers, 
              scientists, politicians, and other notable individuals.
            </p>
          </div>
          
          <div className="bg-white p-6 sm:p-8 rounded shadow-sm">
            <h2 className="text-xl font-medium mb-4 border-b pb-2">Join Us</h2>
            <p className="text-base leading-relaxed">
              We welcome new volunteers, especially photographers, photo editors, and Wikimedia contributors. 
              If you're interested in helping our mission, please visit our <a href="/contact" className="text-black underline hover:text-wikichobi-medium-gray transition-colors">Contact page</a> 
              to get in touch.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;

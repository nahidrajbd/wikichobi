
import React from 'react';
import Layout from '@/components/layout/Layout';
import PageHeader from '@/components/ui/PageHeader';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    toast({
      title: "Message Sent",
      description: "Thank you for your message. We'll get back to you soon.",
    });
  };

  return (
    <Layout>
      <div className="container py-16">
        <PageHeader 
          title="Contact" 
          subtitle="Get in touch with our team"
        />
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-xl font-medium mb-4">Contact Us</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2 text-sm">Name</label>
                <Input id="name" name="name" required />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2 text-sm">Email</label>
                <Input id="email" name="email" type="email" required />
              </div>
              
              <div className="mb-4">
                <label htmlFor="subject" className="block mb-2 text-sm">Subject</label>
                <Input id="subject" name="subject" required />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 text-sm">Message</label>
                <Textarea id="message" name="message" rows={5} required />
              </div>
              
              <Button type="submit">Send Message</Button>
            </form>
          </div>
          
          <div>
            <h2 className="text-xl font-medium mb-4">Support WikiChobi</h2>
            <div className="mb-8 prose prose-sm">
              <p>
                WikiChobi is a volunteer-driven project. Your support helps us to Host workshops and training sessions for volunteers and Develop educational materials about free licensing</p>
              
              <h3>Ways to Support</h3>

              <p>
                We welcome photographers, photo editors, and Wikimedia contributors. Fill out the contact form to express your interest.
              </p>
            </div>
            
            <div className="bg-wikichobi-light-gray p-4 rounded">
              <h3 className="text-lg font-medium mb-2">Contact Information</h3>
              <p className="mb-1">Email: info@wikichobi.org</p>
              <p>Social: @WikiChobi on Twitter</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;

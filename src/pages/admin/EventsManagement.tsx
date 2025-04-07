
import React, { useState, useEffect } from 'react';
import AdminLayout from '@/components/layout/AdminLayout';
import { supabase } from '@/integrations/supabase/client';
import { Event } from '@/types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Trash, Edit, Plus, Calendar } from 'lucide-react';
import { format } from 'date-fns';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

const EventsManagement = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [editId, setEditId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    caption: '',
    category_link: '',
    thumbnail_url: '',
    event_date: new Date()
  });
  const [datePickerOpen, setDatePickerOpen] = useState(false);

  const fetchEvents = async () => {
    try {
      const { data, error } = await supabase
        .from('events')
        .select('*')
        .order('event_date', { ascending: false });

      if (error) {
        toast.error('Error fetching events');
        console.error('Error fetching events:', error);
        return;
      }

      setEvents(data || []);
    } catch (error) {
      toast.error('Unexpected error occurred');
      console.error('Unexpected error:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleDateSelect = (date: Date | undefined) => {
    if (date) {
      setFormData(prev => ({ ...prev, event_date: date }));
      setDatePickerOpen(false);
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      caption: '',
      category_link: '',
      thumbnail_url: '',
      event_date: new Date()
    });
    setEditId(null);
  };

  const handleOpen = (isOpen: boolean) => {
    setOpen(isOpen);
    if (!isOpen) {
      resetForm();
    }
  };

  const handleEdit = (event: Event) => {
    setFormData({
      title: event.title,
      caption: event.caption,
      category_link: event.category_link || '',
      thumbnail_url: event.thumbnail_url || '',
      event_date: event.event_date ? new Date(event.event_date) : new Date()
    });
    setEditId(event.id);
    setOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this event?')) return;

    try {
      const { error } = await supabase
        .from('events')
        .delete()
        .eq('id', id);

      if (error) {
        toast.error('Error deleting event');
        console.error('Error deleting event:', error);
        return;
      }

      toast.success('Event deleted successfully');
      fetchEvents();
    } catch (error) {
      toast.error('Unexpected error occurred');
      console.error('Unexpected error:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const eventData = {
        title: formData.title,
        caption: formData.caption,
        category_link: formData.category_link || null,
        thumbnail_url: formData.thumbnail_url || null,
        event_date: formData.event_date.toISOString().split('T')[0],
        updated_at: new Date().toISOString()
      };

      if (editId) {
        // Update existing event
        const { error } = await supabase
          .from('events')
          .update(eventData)
          .eq('id', editId);

        if (error) {
          toast.error('Error updating event');
          console.error('Error updating event:', error);
          return;
        }

        toast.success('Event updated successfully');
      } else {
        // Create new event
        const { error } = await supabase
          .from('events')
          .insert(eventData);

        if (error) {
          toast.error('Error creating event');
          console.error('Error creating event:', error);
          return;
        }

        toast.success('Event created successfully');
      }

      resetForm();
      setOpen(false);
      fetchEvents();
    } catch (error) {
      toast.error('Unexpected error occurred');
      console.error('Unexpected error:', error);
    }
  };

  return (
    <AdminLayout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Events Management</h1>
        
        <Dialog open={open} onOpenChange={handleOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" /> Add Event
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>{editId ? 'Edit Event' : 'Add Event'}</DialogTitle>
            </DialogHeader>
            
            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <div className="grid grid-cols-1 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="caption">Caption</Label>
                  <Input
                    id="caption"
                    name="caption"
                    value={formData.caption}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="event_date">Event Date</Label>
                  <Popover open={datePickerOpen} onOpenChange={setDatePickerOpen}>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left font-normal"
                      >
                        <Calendar className="mr-2 h-4 w-4" />
                        {formData.event_date ? format(formData.event_date, "PPP") : "Pick a date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <CalendarComponent
                        mode="single"
                        selected={formData.event_date}
                        onSelect={handleDateSelect}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="category_link">Category Link (Optional)</Label>
                  <Input
                    id="category_link"
                    name="category_link"
                    value={formData.category_link}
                    onChange={handleChange}
                    placeholder="https://commons.wikimedia.org/wiki/Category:Example"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="thumbnail_url">Thumbnail URL (Optional)</Label>
                  <Input
                    id="thumbnail_url"
                    name="thumbnail_url"
                    value={formData.thumbnail_url}
                    onChange={handleChange}
                    placeholder="https://upload.wikimedia.org/wikipedia/commons/thumb/example.jpg"
                  />
                </div>
              </div>
              
              <div className="flex justify-end space-x-2 pt-4">
                <Button type="button" variant="outline" onClick={() => setOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit">
                  {editId ? 'Update' : 'Create'}
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      
      {loading ? (
        <p>Loading events...</p>
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Caption</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="hidden md:table-cell">Created</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {events.map(event => (
              <TableRow key={event.id}>
                <TableCell className="font-medium">{event.title}</TableCell>
                <TableCell className="max-w-xs truncate">{event.caption}</TableCell>
                <TableCell>
                  {event.event_date ? format(new Date(event.event_date), 'MMM d, yyyy') : 'Not set'}
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {new Date(event.created_at).toLocaleDateString()}
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end space-x-2">
                    <Button size="sm" variant="outline" onClick={() => handleEdit(event)}>
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="destructive" onClick={() => handleDelete(event.id)}>
                      <Trash className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </AdminLayout>
  );
};

export default EventsManagement;

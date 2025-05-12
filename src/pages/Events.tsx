
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import PageHeader from '@/components/ui/PageHeader';
import { Card, CardContent } from '@/components/ui/card';
import { Event, getDummyEvents } from '@/types';
import { Calendar } from 'lucide-react';
import { format } from 'date-fns';
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious
} from '@/components/ui/pagination';

const ITEMS_PER_PAGE = 8; // 2 columns x 4 rows = 8 items per page

const Events = () => {
  // Get all dummy events
  const allEvents = getDummyEvents();
  const totalCount = allEvents.length;
  
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(totalCount / ITEMS_PER_PAGE);
  
  // Calculate paginated events
  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  const end = currentPage * ITEMS_PER_PAGE;
  const events = allEvents.slice(start, end);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getPageNumbers = () => {
    const pageNumbers = [];
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, currentPage + 2);
    
    if (endPage - startPage < 4 && totalPages > 5) {
      if (startPage === 1) {
        endPage = Math.min(5, totalPages);
      } else if (endPage === totalPages) {
        startPage = Math.max(1, totalPages - 4);
      }
    }
    
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }
    
    return pageNumbers;
  };

  return (
    <Layout>
      <div className="container py-16">
        <PageHeader 
          title="All Events & Contributions" 
          subtitle="Browse our photography contributions"
        />
        
        {events.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
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
            
            {totalPages > 1 && (
              <Pagination className="my-8">
                <PaginationContent>
                  {currentPage > 1 && (
                    <PaginationItem>
                      <PaginationPrevious onClick={() => handlePageChange(currentPage - 1)} />
                    </PaginationItem>
                  )}
                  
                  {getPageNumbers().map(page => (
                    <PaginationItem key={page}>
                      <PaginationLink 
                        isActive={currentPage === page}
                        onClick={() => handlePageChange(page)}
                      >
                        {page}
                      </PaginationLink>
                    </PaginationItem>
                  ))}
                  
                  {currentPage < totalPages && (
                    <PaginationItem>
                      <PaginationNext onClick={() => handlePageChange(currentPage + 1)} />
                    </PaginationItem>
                  )}
                </PaginationContent>
              </Pagination>
            )}
          </>
        ) : (
          <div className="text-center py-12">
            <p className="text-wikichobi-medium-gray">No events found</p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Events;

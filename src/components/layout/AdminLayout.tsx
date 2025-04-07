
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { Home, Users, Calendar, LogOut } from 'lucide-react';

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const { signOut } = useAuth();
  const navigate = useNavigate();
  
  const handleSignOut = async () => {
    try {
      await signOut();
      toast.success('Logged out successfully');
      navigate('/');
    } catch (error) {
      toast.error('Error logging out');
      console.error('Logout error:', error);
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="container mx-auto py-4 px-4 md:px-6 flex justify-between items-center">
          <Link to="/admin" className="text-xl font-semibold">
            WikiChobi Admin
          </Link>
          <Button variant="outline" size="sm" onClick={handleSignOut}>
            <LogOut className="mr-2 h-4 w-4" /> Logout
          </Button>
        </div>
      </header>
      
      <div className="container mx-auto py-6 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          <aside className="md:col-span-1">
            <nav className="bg-white p-4 rounded-lg shadow-sm space-y-1">
              <Link 
                to="/admin"
                className="flex items-center p-2 rounded-md hover:bg-gray-100 transition-colors"
              >
                <Home className="h-5 w-5 mr-2" />
                <span>Dashboard</span>
              </Link>
              <Link 
                to="/admin/team"
                className="flex items-center p-2 rounded-md hover:bg-gray-100 transition-colors"
              >
                <Users className="h-5 w-5 mr-2" />
                <span>Team</span>
              </Link>
              <Link 
                to="/admin/events"
                className="flex items-center p-2 rounded-md hover:bg-gray-100 transition-colors"
              >
                <Calendar className="h-5 w-5 mr-2" />
                <span>Events</span>
              </Link>
            </nav>
          </aside>
          
          <main className="md:col-span-4">
            <div className="bg-white rounded-lg shadow-sm p-6">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;


import React, { createContext, useContext, useState, ReactNode } from 'react';

// Create a mock user type to replace Supabase User
interface MockUser {
  id: string;
  email?: string | null;
  user_metadata?: Record<string, any>;
}

// Create a mock session type to replace Supabase Session
interface MockSession {
  user: MockUser | null;
  access_token: string | null;
}

interface AuthContextType {
  user: MockUser | null;
  session: MockSession | null;
  isLoading: boolean;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  session: null,
  isLoading: false,
  signOut: async () => {}
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<MockUser | null>(null);
  const [session, setSession] = useState<MockSession | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const signOut = async () => {
    // Mock sign out function
    setUser(null);
    setSession(null);
  };

  return (
    <AuthContext.Provider value={{ user, session, isLoading, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

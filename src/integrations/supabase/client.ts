
import { createClient } from '@supabase/supabase-js';
import type { Database } from '@/integrations/supabase/types';

const SUPABASE_URL = "https://izqczxoiqppaqvzyknjb.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml6cWN6eG9pcXBwYXF2enlrbmpiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQwMDAyMTMsImV4cCI6MjA1OTU3NjIxM30.8wv15deq6xjDfQYhs34dL6Ip8wCXH63m6c195T3iKV0";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);

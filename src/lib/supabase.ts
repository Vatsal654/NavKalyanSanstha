import { createClient } from '@supabase/supabase-js';

// Replace with your actual Supabase URL and Anon Key
// You can find these in your Supabase project settings -> API
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error("Supabase URL or Anon Key is not defined. Please check your .env file.");
  // Fallback for development if .env is not set up yet
  // In a production environment, you might want to throw an error or handle this more robustly.
  // For now, we'll use placeholder values to prevent immediate crashes.
  // You MUST replace these with your actual Supabase credentials.
  // supabaseUrl = "https://your-project-id.supabase.co";
  // supabaseAnonKey = "your-anon-key";
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
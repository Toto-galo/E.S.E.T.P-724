import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://cpaodkgsbflcebsguccy.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNwYW9ka2dzYmZsY2Vic2d1Y2N5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI1MzQ2MjUsImV4cCI6MjA3ODExMDYyNX0.0ggEsAz2q1M4A2xz0RYu14HsHIfDCH91zE9vjU67vKQ";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

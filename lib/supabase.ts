import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://oakonpgypzyjgloxdkqk.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9ha29ucGd5cHp5amdsb3hka3FrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM0MjE1MTksImV4cCI6MjA0ODk5NzUxOX0.xJPbdoB-3_-Hpqxk9Edk-_0wwS2z_cDwXXMywAXHPxI"; // Exemplo de chave

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

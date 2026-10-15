import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://seu-projeto.supabase.co'
const SUPABASE_ANON_KEY = 'sua-chave-anon-aqui'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    storageKey: 'gozar-cpa-auth-token',
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'URL DO SUPABASE'
const supabaseAnonKey = 'CHAVE DA API'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

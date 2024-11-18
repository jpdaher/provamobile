import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://wmuoofoupmwcccewmvli.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndtdW9vZm91cG13Y2NjZXdtdmxpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE5MzI3MTEsImV4cCI6MjA0NzUwODcxMX0.By5ZZhCvIbK2bna7OPCV0fe4VrKhL-CcQtk3wInEjZw'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://rncxlbomipatsyzygigd.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJuY3hsYm9taXBhdHN5enlnaWdkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE0NTEzMzIsImV4cCI6MTk5NzAyNzMzMn0.9MOwHgtuMuP7G6D6of9b16CC3V6-kzYjYn15AL3Yv1Q')

// 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJuY3hsYm9taXBhdHN5enlnaWdkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzk4MDMzMDEsImV4cCI6MTk5NTM3OTMwMX0.KCg24UND52j5Al8d3vwf4CjqrNGb2Rsy_9ePDG1uS7M')
// export const supabase = createClient('https://rncxlbomipatsyzygigd.supabase.co?connect_timeout=300', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJuY3hsYm9taXBhdHN5enlnaWdkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzk4MDMzMDEsImV4cCI6MTk5NTM3OTMwMX0.KCg24UND52j5Al8d3vwf4CjqrNGb2Rsy_9ePDG1uS7M')

// import { createClient } from "@supabase/supabase-js";



export const getServiceSupabase = () =>
    createClient(
        'https://rncxlbomipatsyzygigd.supabase.co',
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJuY3hsYm9taXBhdHN5enlnaWdkIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4MTQ1MTMzMiwiZXhwIjoxOTk3MDI3MzMyfQ.N6IquPFx-Gp8Qh8k5uEUcXaPf49SeefNDcEPr3j4Nuc'
    );
-- Create tables for Trail Running Tracker

-- Macrophases (pre-load with the 4 phases)
CREATE TABLE IF NOT EXISTS public.macrophases (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  phase_number INTEGER NOT NULL UNIQUE,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  description TEXT,
  focus_areas TEXT[],
  weekly_volume_km INTEGER,
  intensity_distribution JSONB,
  color_hex TEXT DEFAULT '#3B82F6',
  created_at TIMESTAMP DEFAULT now()
);

-- Workouts
CREATE TABLE IF NOT EXISTS public.workouts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMP DEFAULT now(),
  date DATE NOT NULL,
  distance_km DECIMAL(5,2) NOT NULL,
  duration_minutes INTEGER NOT NULL,
  elevation_gain INTEGER NOT NULL,
  elevation_loss INTEGER NOT NULL,
  avg_heart_rate INTEGER,
  max_heart_rate INTEGER,
  avg_pace_min_km DECIMAL(4,2),
  surface TEXT DEFAULT 'trail',
  difficulty TEXT,
  source TEXT DEFAULT 'manual',
  external_id TEXT UNIQUE,
  macrophase_id UUID REFERENCES public.macrophases(id),
  rpe INTEGER,
  sensations INTEGER,
  fatigue_initial INTEGER,
  movement_quality INTEGER,
  motivation INTEGER,
  stress INTEGER,
  discomforts_notes TEXT,
  completion_percentage INTEGER,
  zone TEXT,
  terrain TEXT,
  conditions TEXT,
  notes TEXT
);

CREATE INDEX IF NOT EXISTS workouts_date ON public.workouts(date DESC);
CREATE INDEX IF NOT EXISTS workouts_macrophase ON public.workouts(macrophase_id);

-- Daily State
CREATE TABLE IF NOT EXISTS public.daily_state (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMP DEFAULT now(),
  date DATE NOT NULL UNIQUE,
  weight_kg DECIMAL(5,2),
  motivation_score INTEGER CHECK (motivation_score >= 1 AND motivation_score <= 10),
  stress_score INTEGER CHECK (stress_score >= 1 AND stress_score <= 10),
  sleep_hours DECIMAL(3,1),
  sleep_quality INTEGER CHECK (sleep_quality >= 1 AND sleep_quality <= 10),
  notes TEXT
);

CREATE INDEX IF NOT EXISTS daily_state_date ON public.daily_state(date DESC);

-- Discomforts (Body Map)
CREATE TABLE IF NOT EXISTS public.discomforts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMP DEFAULT now(),
  date DATE NOT NULL,
  zone TEXT NOT NULL,
  severity INTEGER CHECK (severity >= 1 AND severity <= 10),
  injury_type TEXT,
  notes TEXT,
  UNIQUE(date, zone)
);

CREATE INDEX IF NOT EXISTS discomforts_date ON public.discomforts(date DESC);
CREATE INDEX IF NOT EXISTS discomforts_zone ON public.discomforts(zone);

-- OAuth Tokens
CREATE TABLE IF NOT EXISTS public.oauth_tokens (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMP DEFAULT now(),
  updated_at TIMESTAMP DEFAULT now(),
  provider TEXT NOT NULL UNIQUE,
  access_token TEXT NOT NULL,
  refresh_token TEXT,
  expires_at TIMESTAMP,
  user_data JSONB
);

-- Metrics Cache (for performance)
CREATE TABLE IF NOT EXISTS public.metrics_cache (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMP DEFAULT now(),
  updated_at TIMESTAMP DEFAULT now(),
  metric_type TEXT NOT NULL,
  date DATE NOT NULL,
  value DECIMAL(10,2),
  UNIQUE(metric_type, date)
);

CREATE INDEX IF NOT EXISTS metrics_cache_date ON public.metrics_cache(date DESC);

-- Pre-load Macrophases
INSERT INTO public.macrophases (name, phase_number, start_date, end_date, description, focus_areas, weekly_volume_km, intensity_distribution, color_hex)
VALUES
  ('M1 Recuperación y Base', 1, '2026-06-15', '2026-09-06', 'Recuperación activa y construcción de base aeróbica', ARRAY['aerobic', 'ankle_rehabilitation', 'base_building'], 52, '{"easy": 95, "moderate": 5, "hard": 0}'::jsonb, '#10b981'),
  ('M2 Desarrollo Aeróbico', 2, '2026-09-07', '2026-12-27', 'Desarrollo del motor aeróbico y calidad específica', ARRAY['aerobic', 'tempo', 'intervals', 'hill_repeats'], 78, '{"easy": 75, "moderate": 20, "hard": 5}'::jsonb, '#3b82f6'),
  ('M3 Específico Ultra', 3, '2026-12-28', '2027-04-18', 'Simulación de carrera ultra con volumen máximo', ARRAY['ultra_specific', 'long_intervals', 'back_to_back', 'race_simulation'], 95, '{"easy": 70, "moderate": 25, "hard": 5}'::jsonb, '#f59e0b'),
  ('M4 Taper y Carrera', 4, '2027-04-19', '2027-06-15', 'Reducción de volumen y preparación para la carrera objetivo', ARRAY['taper', 'maintenance', 'mental_prep'], 20, '{"easy": 80, "moderate": 15, "hard": 5}'::jsonb, '#ef4444')
ON CONFLICT (phase_number) DO NOTHING;

-- Enable RLS (optional, if you want security)
-- ALTER TABLE public.workouts ENABLE ROW LEVEL SECURITY;
-- ALTER TABLE public.daily_state ENABLE ROW LEVEL SECURITY;
-- ALTER TABLE public.discomforts ENABLE ROW LEVEL SECURITY;
-- ALTER TABLE public.macrophases ENABLE ROW LEVEL SECURITY;
-- ALTER TABLE public.oauth_tokens ENABLE ROW LEVEL SECURITY;
-- ALTER TABLE public.metrics_cache ENABLE ROW LEVEL SECURITY;

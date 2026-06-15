export interface Workout {
  id: string;
  created_at?: string;
  date: string;
  distance_km: number;
  duration_minutes: number;
  elevation_gain: number;
  elevation_loss: number;
  avg_heart_rate?: number | null;
  max_heart_rate?: number | null;
  avg_pace_min_km?: number | null;
  surface?: 'road' | 'trail' | 'mixed';
  difficulty?: 'easy' | 'moderate' | 'hard';
  source: 'manual' | 'garmin' | 'strava';
  external_id?: string | null;
  macrophase_id?: string | null;
  notes?: string | null;
  rpe?: number; // 1-10 Rate of Perceived Exertion
  sensations?: number; // 1-5
  fatigue_initial?: number; // 1-5
  movement_quality?: number; // 1-5
  motivation?: number; // 1-5
  stress?: number; // 1-5
  discomforts_notes?: string | null;
  completion_percentage?: number; // % of planned session completed
  zone?: 'Z1' | 'Z2' | 'Z3' | 'Z4' | 'Z5';
  terrain?: string;
  conditions?: string;
}

export interface DailyState {
  id: string;
  created_at?: string;
  date: string;
  weight_kg?: number | null;
  motivation_score?: number | null; // 1-10
  stress_score?: number | null; // 1-10
  sleep_hours?: number | null;
  sleep_quality?: number | null; // 1-10
  notes?: string | null;
}

export type BodyZone =
  | 'head' | 'neck'
  | 'left_shoulder' | 'right_shoulder'
  | 'left_elbow' | 'right_elbow'
  | 'left_wrist' | 'right_wrist'
  | 'upper_back' | 'lower_back'
  | 'left_hip' | 'right_hip'
  | 'left_knee' | 'right_knee'
  | 'left_ankle' | 'right_ankle'
  | 'left_foot' | 'right_foot';

export interface Discomfort {
  id: string;
  created_at?: string;
  date: string;
  zone: BodyZone;
  severity: number; // 1-10
  injury_type: 'pain' | 'stiffness' | 'inflammation' | 'other';
  notes?: string | null;
}

export interface Macrophase {
  id: string;
  name: string;
  phase_number: number;
  start_date: string;
  end_date: string;
  description?: string | null;
  focus_areas: string[];
  weekly_volume_km: number;
  intensity_distribution: {
    easy: number;
    moderate: number;
    hard: number;
  };
  color_hex: string;
}

export interface OAuthToken {
  id: string;
  created_at?: string;
  updated_at?: string;
  provider: 'garmin' | 'strava';
  access_token: string;
  refresh_token?: string | null;
  expires_at?: string | null;
  user_data?: Record<string, any>;
}

export interface Metrics {
  acuteChronicRatio: number;
  fatigueIndex: number;
  weeklyVolume: number;
  weeklyElevation: number;
  averagePace: number;
  compliancePercentage: number;
  trainingLoad: number;
  gap: number;
}

export interface TrainingLoad {
  date: string;
  trimp: number;
  ewma: number;
}

export interface AcuteChronicRatio {
  date: string;
  acute: number;
  chronic: number;
  ratio: number;
}

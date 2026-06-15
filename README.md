# Trail Running Tracker

App web profesional para gestionar entrenamientos de trail running. Objetivo: **Ultra 80K / +4.000m / Sub 11h** (Junio 2027).

## 🎯 Características

### Dashboard (5 Tabs)

| Tab | Contenido |
|-----|-----------|
| **HOY** | Estado diario (peso, motivación, estrés, sueño) + Registro rápido post-entreno (30s) |
| **SEMANA** | Resumen semanal (volumen, D+, entrenamientos) + Lista de sesiones |
| **MESOCICLO** | Timeline anual (4 macrofases) + Fase actual + Checkpoints críticos |
| **GRÁFICOS** | Volumen, desnivel, fatiga, ritmo, proyecciones (en desarrollo) |
| **FUERZA** | Bloques A-B-C-D-E + Progresión + Principios de carga |

### Entrada de Datos (MVP Completo)

- ✅ **Post-Workout**: Distancia, duración, D+, FC, ritmo, RPE, sensaciones, % completada
- ✅ **Daily State**: Peso, motivación, estrés, sueño, calidad
- ✅ **Body Map**: Marco para molestias corporales
- ⏳ **Garmin/Strava OAuth**: Importación automática (fase 5)

### Plan Preestablecido

- ✅ **4 Macrofases** (MF1-MF4) con mesociclos, intensidades y volúmenes
- ✅ **3 Checkpoints** (CP1, CP2, CP3) para evaluar progresión
- ✅ **Programa de Fuerza** (5 bloques A-B-C-D-E)
- ✅ **Calendario de Carreras Test** (9 carreras + objetivo)

## 🛠️ Stack

```
Frontend:   React 19 + TypeScript + Vite
UI:         TailwindCSS v4 + Lucide Icons
Backend:    Supabase (PostgreSQL)
Forms:      React Hook Form
State:      Zustand + Custom Hooks
```

## 📦 Setup Rápido

Ver `SETUP.md` para instrucciones detalladas.

### Rápido:

```bash
npm install
# Configurar .env.local con credenciales Supabase
# Ejecutar sql/schema.sql en Supabase
npm run dev
```

## 📊 Status Implementación

**MVP (Fase 1-3): COMPLETO ✅**
- ✅ Dashboard estructura base
- ✅ 5 Tabs funcionales
- ✅ Formularios (Post-Workout, Daily State)
- ✅ Servicios Supabase
- ✅ Plan anual preestablecido
- ✅ Programa de fuerza (referencia)

**En Progreso (Fase 4-6):**
- ⏳ Gráficos interactivos (Recharts)
- ⏳ Cálculos de métricas (TRIMP, A/C ratio, GAP)
- ⏳ Garmin/Strava OAuth
- ⏳ Deployment Vercel

## 📁 Estructura

```
src/
├── components/
│   ├── common/           # Header, Navigation
│   ├── dashboard/        # 5 Tabs
│   └── forms/           # PostWorkoutForm, DailyStateForm
├── hooks/               # useWorkouts, useDailyState, useMacrocycle
├── services/            # API calls a Supabase
├── lib/
│   ├── calculations/    # TRIMP, A/C ratio, GAP
│   ├── formatters.ts    # Formateo
│   └── constants.ts     # Zonas, escalas
└── types/               # TypeScript definitions
```

## 🚀 Deploy

```bash
npm run build
vercel
```

---

**Objetivo**: Sub 11 horas en Ultra 80K el 15 de Junio 2027 🏔️⚡

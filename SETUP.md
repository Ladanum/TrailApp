# Trail Running Tracker - Setup Guía

## 1. Requisitos Previos

- Node.js 18+ instalado
- Cuenta en [Supabase](https://supabase.com) (gratis)

## 2. Clonar y Preparar

```bash
cd /Users/gerard/trail-app
npm install
```

## 3. Crear Proyecto en Supabase

1. Ir a https://supabase.com y crear una cuenta
2. Crear un nuevo proyecto
3. Copiar las credenciales:
   - URL (Project URL)
   - Anon Key (anon public key)

## 4. Configurar Variables de Entorno

Crear archivo `.env.local` en la raíz del proyecto:

```env
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

Reemplazar con tus credenciales reales de Supabase.

## 5. Crear Tablas en Supabase

1. En Supabase, ir a SQL Editor
2. Crear una nueva query
3. Copiar y pegar el contenido de `sql/schema.sql`
4. Ejecutar (click en "Run")

Las tablas se crearán automáticamente con las 4 macrofases precargas.

## 6. Ejecutar Localmente

```bash
npm run dev
```

Abrir http://localhost:5173 en el navegador.

## 7. Probar la App

### Registrar un entreno:
1. Ir a tab "HOY"
2. Click en "+ Registrar Entreno"
3. Llenar datos básicos (distancia, duración, desnivel)
4. Click "Registrar Entreno"
5. Ver en "SEMANA" si aparece

### Ver el plan anual:
1. Ir a tab "MESOCICLO"
2. Ver las 4 fases con timeline

### Programa de fuerza:
1. Ir a tab "FUERZA"
2. Ver bloques A-B-C-D-E con ejercicios

## 8. Deployment en Vercel

```bash
npm run build
vercel
```

Vercel detectará automáticamente que es un proyecto Vite y lo deployará.

En Vercel dashboard, agregar las variables de entorno:
- VITE_SUPABASE_URL
- VITE_SUPABASE_ANON_KEY

## Troubleshooting

### Error: "Missing Supabase credentials"
- Verificar que `.env.local` existe y tiene los valores correctos
- No compartir las credenciales en git (están en `.gitignore`)

### Error: "Failed to initialize app"
- Verificar que Supabase está online
- Verificar conexión a internet
- Revisar console del navegador (F12)

### Tablas no creadas
- Verificar que el SQL ejecutó sin errores en Supabase
- Ir a Supabase → Table Editor → Verificar que aparecen las tablas

## Siguientes Pasos

1. **Integración Garmin/Strava**: Configurar OAuth keys
2. **Gráficos**: Implementar con Recharts
3. **Mapa Corporal**: Crear SVG interactivo
4. **Métricas Avanzadas**: TRIMP, A/C ratio, GAP, Fatiga
5. **Notificaciones**: Recordatorios diarios

## Support

- Documentación Supabase: https://supabase.com/docs
- React Docs: https://react.dev
- Tailwind Docs: https://tailwindcss.com


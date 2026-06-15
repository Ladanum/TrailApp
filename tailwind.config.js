/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          'bg': '#0D1117',
          'card': '#161B22',
          'border': '#21262D',
          'text': '#E6EDF3',
          'muted': '#8B949E',
        },
        accent: {
          'blue': '#388BFD',
          'green': '#3FB950',
          'orange': '#F0883E',
          'purple': '#A371F7',
        },
      },
      fontFamily: {
        'mono': "'JetBrains Mono', monospace",
        'inter': "'Inter', system-ui, sans-serif",
      },
    },
  },
  plugins: [],
}

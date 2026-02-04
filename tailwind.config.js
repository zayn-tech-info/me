export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'charcoal': '#09090b', // Deep charcoal / near black
        'charcoal-light': '#18181b', // Slightly lighter for cards
        'accent': '#8b5cf6', // Electric Purple (Violet 500)
        'accent-glow': '#a78bfa', // Lighter purple for glow
        'zinc-850': '#1f1f22',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}; 
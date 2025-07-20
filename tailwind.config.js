module.exports = {
  purge: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-indigo': '#4f46e5', // indigo-600
        'brand-orange': '#fb923c', // orange-400
        'brand-gray': '#64748b',   // slate-500
        'brand-dark': '#18181b',   // zinc-900
        'brand-light': '#f8fafc',  // zinc-50
      },
      fontFamily: {
        sans: ['Sora', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
}; 
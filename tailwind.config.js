module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          50: '#f8fafc',
          100: '#f1f5f9',
          700: '#334155',
          900: '#0f172a',
        },
      },
      borderRadius: {
        '2xl': '1rem',
      },
      boxShadow: {
        'soft': '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
        'soft-md': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      },
      spacing: {
        '44': '44px',
      },
    },
  },
  plugins: [],
};

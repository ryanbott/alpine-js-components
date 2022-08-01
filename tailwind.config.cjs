/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    './pages/**/*.{html,js}',
    './index.html',
  ],
  theme: {
    extend: {

      colors: {
        'text-1': 'var(--text-1)',
        'text-2': 'var(--text-2)',
        'bg-1': 'var(--bg-1)',
        'bg-2': 'var(--bg-2)',
        'link-1': 'var(--link-1)',
        'link-2': 'var(--link-2)',
      },
    },
  },
  plugins: [
  ],
}
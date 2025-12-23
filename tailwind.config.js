/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'Cinzel', 'serif'],
        display: ['Playfair Display', 'serif'],
        elegant: ['Cinzel', 'serif'],
      },
      backgroundImage: {
        moroccan: "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22%3E%3Cpath d=%22M50 0 L100 50 L50 100 L0 50 Z%22 fill=%22none%22 stroke=%22%23d4af37%22 stroke-width=%220.5%22 opacity=%220.08%22/%3E%3Ccircle cx=%2250%22 cy=%2250%22 r=%2215%22 fill=%22none%22 stroke=%22%23d4af37%22 stroke-width=%220.5%22 opacity=%220.05%22/%3E%3C/svg%3E')",
      },
    },
  },
  plugins: [],
};

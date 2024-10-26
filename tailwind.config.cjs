/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
      extend: {
        colors: {
          background: '#1e1e1e',
          card: '#252525',
          text: '#e0e0e0',
          accent: '#ffd700',
        },
      },
    },
    plugins: [],
  };
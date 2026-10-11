/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'],
        display: ['"Archivo"', 'system-ui', 'sans-serif'],
        serif: ['"Newsreader"', '"Playfair Display"', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace'],
      },
      colors: {
        // Essential colors based on ArtCraft (minimalist, clean, monochromatic)
        primary: {
          50: '#f7f7f7',
          100: '#efefef',
          200: '#dfdfdf',
          300: '#cacaca',
          400: '#a8a8a8',
          500: '#888888',
          600: '#6d6d6d',
          700: '#5a5a5a',
          800: '#4a4a4a',
          900: '#000000',
        },
      },
      // Fluid Typography & spacing can be helpful for pro-max styling
      spacing: {
        '24': '6rem',
        '32': '8rem',
        '40': '10rem',
      },
    },
  },
  plugins: [],
}

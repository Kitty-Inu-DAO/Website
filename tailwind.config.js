module.exports = {
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ], // remove unused styles in production
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        'xxs': '.5rem'
      },
      lineHeight: {
        'extra-tight': '.5rem'
      },
      colors: {
        transparent: {
          100: 'rgba(0, 0, 0, 0.7)',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

/* eslint-disable @typescript-eslint/no-var-requires */

const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
      fontFamily: {
        sans: ["Neue Montreal", ...fontFamily.sans],
        serif: ["Editorial New", ...fontFamily.serif],
       },
    extend: {
      colors: {
        "branding-blue": "#1E3A8A",
        "branding-yellow": "#EAB308"
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};

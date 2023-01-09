/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {},

    colors: {
      white: "hsl(0, 0%, 100%)",
      light_grey: "hsl(212, 45%, 89%)",
      greyish_blue: "hsl(220, 15%, 55%)",
      dark_blue: "hsl(218, 44%, 22%)",
      sky_500: "#6366f1",
      rose: "#be123c",

    },

    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'sm-01': '360px',
      'sm-02': '280px',
      'sm-03': '412px',

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }

  },
  plugins: [],
}

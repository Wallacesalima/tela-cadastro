/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    {
      pattern: /(bg|from|to)-(green|blue|gray)-(400|700)/
    }
  ],

  theme: {
    extend: {},
  },
  plugins: [],
}

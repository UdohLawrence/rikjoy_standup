/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './resources/**/*.{edge,html,ts,js,tsx,jsx,vue}',
    'node_modules/preline/dist/*.js'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('preline/plugin')
  ],
}


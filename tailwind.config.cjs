/* eslint-disable node/no-unpublished-require -- we allow dev dependencies in here */
'use strict'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
}
/* eslint-enable node/no-unpublished-require */

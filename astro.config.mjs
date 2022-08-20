/* eslint-disable no-process-env -- need to use process.env in config */
import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import preact from '@astrojs/preact'
import prefetch from '@astrojs/prefetch'
// import vercel from '@astrojs/vercel/serverless'
import netlify from '@astrojs/netlify/functions'
// import deno from '@astrojs/deno'
// import { VitePWA } from 'vite-plugin-pwa';
import solidJs from '@astrojs/solid-js'
// import vue from '@astrojs/vue'
import svelte from '@astrojs/svelte'

const { PORT } = process.env

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [
      // NOTE: Waiting on https://vite-plugin-pwa.netlify.app/deployment/vercel.html
      // VitePWA()
    ],
    ssr: {
      external: ['svgo'],
    },
  },

  server: {
    host: '0.0.0.0',
    port: 3000,
  },

  integrations: [
    tailwind(),
    preact({
      compat: true,
    }),
    prefetch({
      // Allow up to three links to be prefetched concurrently
      throttle: 3,
    }),
    solidJs(),
    // FIXME: https://github.com/vuejs/core/pull/6079
    // vue(),
    svelte(),
  ],

  output: 'server',

  adapter: netlify({
    port: PORT || 8000,
  }),
})
/* eslint-enable no-process-env */

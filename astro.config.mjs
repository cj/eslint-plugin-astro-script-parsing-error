/* eslint-disable node/no-unpublished-import, no-process-env -- need to use process.env in config */
import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import preact from '@astrojs/preact'
import prefetch from '@astrojs/prefetch'
// import vercel from '@astrojs/vercel/serverless'
// import netlify from '@astrojs/netlify/functions'
import deno from '@astrojs/deno'
// import { VitePWA } from 'vite-plugin-pwa';
import solidJs from '@astrojs/solid-js'
// import vue from '@astrojs/vue'
import svelte from '@astrojs/svelte'
import sitemap from '@astrojs/sitemap'
import compress from 'astro-compress'
import mdx from '@astrojs/mdx'
import image from '@astrojs/image'
// TODO: Add https://github.com/alextim/astro-lib/tree/main/packages/astro-robots-txt

const { PORT } = process.env

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [
      // NOTE: Waiting on https://vite-plugin-pwa.netlify.app/deployment/vercel.html
      // VitePWA()
    ],
    ssr: {
      external: ['svgo', 'etag'],
    },
  },

  server: {
    host: '0.0.0.0',
    port: 3000,
  },

  site: `https://${process.env.VERCEL_URL}`,

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
    mdx(),
    sitemap(),
    image(),
    compress(),
  ],

  output: 'server',

  adapter: deno({
    port: PORT || 8000,
  }),
})
/* eslint-enable */

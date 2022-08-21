import { appRouter } from 'server'
import type { APIContext } from 'astro'
import { resolveHTTPResponse } from '@trpc/server'
import type { HTTPHeaders } from '@trpc/client'

/**
 * Handles trpc query client requests.
 *
 * @param {APIContext} - Astro API Context
 * @returns {Promise<Response>} - trpc response
 *
 * @beta
 */
async function astroHttpHandler({ request, params }: APIContext): Promise<Response> {
  const query = new URL(request.url).searchParams

  const body = request.method === 'GET' ? {} : await request.json()

  const { status, headers, ...response } = await resolveHTTPResponse({
    async createContext() {
      // CreateContext
    },
    router: appRouter,
    path: params.trpc as string,
    req: {
      query,
      method: request.method,
      headers: request.headers as unknown as HTTPHeaders,
      body,
    },
  })

  return new Response(response.body, {
    headers: headers as HeadersInit,
    status,
  })
}

export const post = astroHttpHandler

export const get = astroHttpHandler

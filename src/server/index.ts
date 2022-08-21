import * as trpc from '@trpc/server'
import { z } from 'zod'

export const appRouter = trpc
  .router()
  .query('getUser', {
    input: (val: unknown) => {
      if (typeof val === 'string') return val
      throw new Error(`Invalid input: ${typeof val}`)
    },
    resolve(req) {
      return { id: req.input, name: 'Bilbo' }
    },
  })
  .mutation('createUser', {
    // validate input with Zod
    input: z.object({ name: z.string().min(5) }),
    resolve(req) {
      // use your ORM of choice
      return { id: '123', name: req.input.name }
    },
  })

export type AppRouter = typeof appRouter

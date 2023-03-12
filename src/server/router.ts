import { initTRPC } from '@trpc/server'
import { z } from 'zod'

import type { Context } from './context'

type User = {
  id: string
  name: string
  bio?: string
}

const users: Record<string, User> = {}

export const trpc = initTRPC.context<Context>().create()

export const appRouter = trpc.router({
  getUserById: trpc.procedure.input(z.string()).query(({ input }) => {
    // input type is string
    return users[input]
  }),
  createUser: trpc.procedure
    // validate input with Zod
    .input(
      z.object({
        name: z.string().min(3),
        bio: z.string().max(142).optional(),
      }),
    )
    .mutation(({ input }) => {
      const id = Date.now().toString()
      const user: User = { id, ...input }
      users[user.id] = user
      return user
    }),
})

// export type definition of API
export type AppRouter = typeof appRouter

import { fetchRequestHandler } from '@trpc/server/adapters/fetch'
import type { APIRoute } from 'astro'

import { createContext } from '../../server/context'
import { appRouter } from '../../server/router'

export const all: APIRoute = async ({ request }) => {
  return fetchRequestHandler({
    endpoint: '/trpc',
    req: request,
    router: appRouter,
    createContext,
  })
}

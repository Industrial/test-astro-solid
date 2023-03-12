import { inferAsyncReturnType } from '@trpc/server'
import { FetchCreateContextFnOptions } from '@trpc/server/adapters/fetch'

export const createContext = ({
  req,
  resHeaders,
}: FetchCreateContextFnOptions): {
  req: Request
  resHeaders: Headers
  user: { name: string }
} => {
  const user = { name: req.headers.get('username') ?? 'anonymous' }
  return { req, resHeaders, user }
}

export type Context = inferAsyncReturnType<typeof createContext>

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { httpBatchLink } from '@trpc/client'
import type { JSX } from 'solid-js/jsx-runtime'

import { trpc } from '../lib/trpc'

const getAuthCookie = (): string => {
  return 'KITTENSINMITTENS'
}

export const App = ({
  children,
}: {
  children?: Array<JSX.ElementChildrenAttribute> | JSX.ElementChildrenAttribute
}): JSX.Element => {
  const queryClient = new QueryClient()

  const trpcClient = trpc.createClient({
    links: [
      httpBatchLink({
        url: 'http://localhost:5000/trpc',
        // optional
        headers() {
          return {
            authorization: getAuthCookie(),
          }
        },
      }),
    ],
  })

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </trpc.Provider>
  )
}

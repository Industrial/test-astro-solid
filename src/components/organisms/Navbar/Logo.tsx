import type { JSX } from 'solid-js/jsx-runtime'

export const Logo = (): JSX.Element => {
  return (
    <div class="flex flex-shrink-0 items-center">
      <img class="block h-8 w-auto lg:hidden" src="/logo-light.svg" alt="Your Company" />
      <img class="hidden h-8 w-auto lg:block" src="/logo-dark.svg" alt="Your Company" />
    </div>
  )
}

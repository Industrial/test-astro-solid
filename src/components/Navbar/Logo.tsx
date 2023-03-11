import type { JSX } from 'solid-js/jsx-runtime'

export const Logo = (): JSX.Element => {
  return (
    <div class="flex flex-shrink-0 items-center">
      <img
        class="block h-8 w-auto lg:hidden"
        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
        alt="Your Company"
      />
      <img
        class="hidden h-8 w-auto lg:block"
        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
        alt="Your Company"
      />
    </div>
  )
}

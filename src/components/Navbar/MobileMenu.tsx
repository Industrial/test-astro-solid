import { For } from 'solid-js'
import type { JSX } from 'solid-js/jsx-runtime'

import { doesHrefMatchPathname } from '../../services/navigation'
import type { MenuItem } from './types'

export const MobileMenu = ({ url, items }: { url: URL; items: Array<MenuItem> }): JSX.Element => {
  return (
    <div class="sm:hidden" id="mobile-menu">
      <div class="space-y-1 px-2 pt-2 pb-3">
        <For each={items} fallback={<div>Loading...</div>}>
          {(item) => {
            const selected = doesHrefMatchPathname(item.href, url)

            if (selected) {
              return (
                <a
                  href={item.href}
                  class="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
                  aria-current="page"
                >
                  {item.label}
                </a>
              )
            }

            return (
              <a
                href={item.href}
                class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              >
                {item.label}
              </a>
            )
          }}
        </For>
      </div>
    </div>
  )
}

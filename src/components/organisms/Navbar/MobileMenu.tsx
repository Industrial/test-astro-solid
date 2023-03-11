import { For } from 'solid-js'
import type { JSX } from 'solid-js/jsx-runtime'

import { doesHrefMatchPathname, MenuItem } from '../../../services/navigation'
import { Link } from '../../atoms/Link'

export const MobileMenu = ({ url, items }: { url: URL; items: Array<MenuItem> }): JSX.Element => {
  return (
    <div class="sm:hidden" id="mobile-menu">
      <div class="space-y-1 px-2 pt-2 pb-3">
        <For each={items} fallback={<div>Loading...</div>}>
          {(item) => {
            const selected = doesHrefMatchPathname(item.href, url)

            if (selected) {
              return (
                <Link
                  href={item.href}
                  class="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
                  aria-current="page"
                  label={item.label}
                />
              )
            }

            return (
              <Link
                href={item.href}
                class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                label={item.label}
              />
            )
          }}
        </For>
      </div>
    </div>
  )
}

import { For } from 'solid-js'
import type { JSX } from 'solid-js/jsx-runtime'

import { doesHrefMatchPathname, MenuItem } from '../../../lib/navigation'
import { Link } from '../../atoms/Link'

export const DesktopMenu = ({ url, items }: { url: URL; items: Array<MenuItem> }): JSX.Element => {
  return (
    <div class="hidden sm:ml-6 sm:block">
      <div class="flex space-x-4">
        <For each={items} fallback={<div>Loading...</div>}>
          {(item) => {
            const selected = doesHrefMatchPathname(item.href, url)

            if (selected) {
              return (
                <Link
                  href={item.href}
                  class="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                  aria-current="page"
                  label={item.label}
                />
              )
            }

            return (
              <Link
                href={item.href}
                class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                label={item.label}
              />
            )
          }}
        </For>
      </div>
    </div>
  )
}

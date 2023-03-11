import classnames from 'classnames'
import type { JSX } from 'solid-js/jsx-runtime'

import { useDropdownOnClick } from '../../../hooks/useDropdownOnClick'
import { CogSixToothIcon } from '../../atoms/icons/CogSixTooth'
import { UserCircleIcon } from '../../atoms/icons/UserCircle'
import { Link } from '../../atoms/Link'

export const ProfileButton = (): JSX.Element => {
  const { isVisible, toggle } = useDropdownOnClick()

  const handleDropdownIconClick = (event: MouseEvent) => {
    event.preventDefault()
    toggle()
  }

  const handleDropdownLinkClick = (event: MouseEvent) => {
    toggle(true)
  }

  return (
    <div class="relative ml-3">
      <div>
        <button
          type="button"
          class="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
          id="user-menu-button"
          aria-expanded="false"
          aria-haspopup="true"
          onClick={handleDropdownIconClick}
        >
          <span class="sr-only">Open user menu</span>
          <div class="h-8 w-8 rounded-full text-gray-400">
            <UserCircleIcon />
          </div>
        </button>
      </div>

      <div
        class={classnames(
          'absolute',
          'right-0',
          'z-10',
          'mt-2',
          'w-48',
          'origin-top-right',
          'rounded-md',
          'bg-white',
          'py-1',
          'shadow-lg',
          'ring-1',
          'ring-black',
          'ring-opacity-5',
          'focus:outline-none',
          {
            hidden: !isVisible(),
          },
        )}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="user-menu-button"
        tabindex="-1"
      >
        <Link
          href="/settings"
          classNames={['block', 'px-4', 'py-2', 'text-sm', 'text-gray-700']}
          role="menuitem"
          tabindex="-1"
          onClick={handleDropdownLinkClick}
          icon={<CogSixToothIcon />}
          label="Settings"
        />
      </div>
    </div>
  )
}

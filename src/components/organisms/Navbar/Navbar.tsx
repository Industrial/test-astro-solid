import type { JSX } from 'solid-js/jsx-runtime'

import { useDropdownOnClick } from '../../../hooks/useDropdownOnClick'
import type { MenuItem } from '../../../lib/navigation'
import { BurgerButton } from './BurgerButton'
import { DesktopMenu } from './DesktopMenu'
import { MobileMenu } from './MobileMenu'
import { ProfileButton } from './ProfileButton'

// import style from './Navbar.module.css'

export const Navbar = ({ url, menuItems }: { url: URL; menuItems: Array<MenuItem> }): JSX.Element => {
  const { isVisible, toggle } = useDropdownOnClick()

  const handleBurgerButtonClick = () => {
    toggle()
  }

  return (
    <header>
      <nav class="bg-gray-800">
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div class="relative flex h-16 items-center justify-between">
            <BurgerButton onClick={handleBurgerButtonClick} />
            <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <DesktopMenu url={url} items={menuItems} />
            </div>
            <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <ProfileButton />
            </div>
          </div>
        </div>

        {isVisible() && <MobileMenu url={url} items={menuItems} />}
      </nav>
    </header>
  )
}

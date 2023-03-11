import { createSignal } from 'solid-js'
import type { JSX } from 'solid-js/jsx-runtime'

import { BurgerButton } from './BurgerButton'
import { DesktopMenu } from './DesktopMenu'
import { Logo } from './Logo'
import { MobileMenu } from './MobileMenu'
import type { MenuItem } from './types'

// import style from './Navbar.module.css'

export const Navbar = ({ url }: { url: URL }): JSX.Element => {
  const menuItems: Array<MenuItem> = [
    {
      label: 'Dashboard',
      href: '/',
    },
    {
      label: 'Projects',
      href: '/projects',
    },
    {
      label: 'Calendar',
      href: '/calendar',
    },
  ]
  const [isFolded, setIsFolded] = createSignal(false)

  const handleBurgerButtonClick = () => {
    setIsFolded(!isFolded())
  }

  return (
    <nav class="bg-gray-800">
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="relative flex h-16 items-center justify-between">
          <BurgerButton onClick={handleBurgerButtonClick} />
          <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <Logo />
            <DesktopMenu url={url} items={menuItems} />
          </div>
          <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* <AlertButton />
            <ProfileButton /> */}
          </div>
        </div>
      </div>

      {isFolded() && <MobileMenu url={url} items={menuItems} />}
    </nav>
  )
}

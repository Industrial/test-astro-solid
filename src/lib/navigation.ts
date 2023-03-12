export const doesHrefMatchPathname = (href: string, url: URL): boolean => {
  const { pathname } = url

  if (href === '/') {
    if (pathname === '/') {
      return true
    }
  } else if (pathname.startsWith(href)) {
    return true
  }
  return false
}

export type MenuItem = {
  label: string
  href: string
}

export const menuItems: Array<MenuItem> = [
  {
    label: 'Dashboard',
    href: '/',
  },
  {
    label: 'Projects',
    href: '/projects',
  },
  {
    label: 'Tags',
    href: '/tags',
  },
]

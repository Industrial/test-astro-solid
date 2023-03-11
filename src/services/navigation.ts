export const doesHrefMatchPathname = (href: string, url: URL): boolean => {
  const regularExpression = RegExp(`${href}`, 'u')
  const result = regularExpression.exec(url.pathname)
  const selected = Boolean(result)
  return selected
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
    label: 'Calendar',
    href: '/calendar',
  },
]

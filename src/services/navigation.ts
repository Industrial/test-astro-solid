export const doesHrefMatchPathname = (href: string, url: URL): boolean => {
  const regularExpression = RegExp(`${href}`, 'u')
  const result = regularExpression.exec(url.pathname)
  const selected = Boolean(result)
  return selected
}

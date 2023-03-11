import type { JSX } from 'solid-js/jsx-runtime'

import { type StyledComponentProps, styleComponent } from '../../../lib/components/style'

export type LinkProps = JSX.AnchorHTMLAttributes<HTMLAnchorElement> &
  StyledComponentProps & {
    label: string
    icon?: JSX.Element
  }

export const Link = ({ icon, classNames, label, ...props }: LinkProps): JSX.Element => {
  const componentProps = styleComponent({ ...props, classNames })

  if (icon) {
    return (
      <a {...componentProps}>
        <div class="w-5 h-5 text-xs inline-block align-middle">{icon}</div>
        <span class="ml-1 align-middle">{label}</span>
      </a>
    )
  }

  return <a {...componentProps}>{label}</a>
}

import type { JSX } from 'solid-js/jsx-runtime'

import { type StyledComponentProps, styleComponent } from '../../../lib/components/style'

export type LinkProps = StyledComponentProps

export const Link = ({ classNames, ...props }: LinkProps): JSX.Element => {
  const componentProps = styleComponent({ ...props, classNames })

  return <div {...componentProps}>HERRO TEST</div>
}

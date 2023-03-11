import type { Argument } from 'classnames'
import classnames from 'classnames'

export type StyledComponentProps = {
  classNames?: Argument
}

export const styleComponent = ({
  classNames,
  ...props
}: StyledComponentProps & {
  [key: string]: unknown
  class?: string | undefined
}): {
  [key: string]: unknown
  class: string
} => {
  return {
    ...props,
    class: classnames(props.class, classNames),
  }
}

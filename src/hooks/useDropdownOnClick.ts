import { type Accessor, createSignal } from 'solid-js'

export const useDropdownOnClick = (): {
  isVisible: Accessor<boolean>
  toggle: (value?: boolean) => void
} => {
  const [isVisible, setIsVisible] = createSignal(false)

  const toggle = (value?: boolean) => {
    if (value === true || value === false) {
      setIsVisible(value)
    }

    setIsVisible(!isVisible())
  }

  return {
    isVisible,
    toggle,
  }
}

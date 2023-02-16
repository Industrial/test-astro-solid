import { type JSX, createSignal, onCleanup } from 'solid-js'

import styles from './Counter.module.css'

export const Counter = (): JSX.Element => {
  const [count, setCount] = createSignal<number>(0)

  const timer = setInterval(() => {
    return setCount(count() + 1)
  }, 1000)

  onCleanup(() => {
    clearInterval(timer)
  })

  return (
    <div class={styles.Counter}>
      Test <div class={styles.count}>{count()}</div>
    </div>
  )
}

// / <reference types="astro/client" />

declare module '*.scss' {
  const classes: Record<string, string>
  export default classes
}

/* eslint-disable @typescript-eslint/naming-convention, @typescript-eslint/no-explicit-any, one-var -- we are just using this file to override types not defined */

declare module 'astro-google-fonts-optimizer' {
  const value: any
  export const GoogleFontsOptimizer: any
  export default value
}

declare module 'daisyui' {
  const value: any
  export default value
}

declare module 'utils/nhost-react' {
  const nhostReact = require('@nhost/react')
  export const nhostStore: any
  const value: typeof nhostReact
  export default value
}

/* eslint-enable -- enabling */

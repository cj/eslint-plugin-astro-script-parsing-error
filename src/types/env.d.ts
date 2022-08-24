/* eslint-disable spaced-comment -- This is a false positive for type files */
/// <reference types="astro/client" />
/// <reference types="@astrojs/image/client" />
/* eslint-enable spaced-comment */

interface ImportMetaEnv {
  readonly PUBLIC_NHOST_SUBDOMAIN: string
  readonly PUBLIC_NHOST_REGION: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

import { NhostClient } from '@nhost/nextjs'
import { atom } from 'nanostores'

console.log('PUBLIC_NHOST_SUBDOMAIN', import.meta.env.PUBLIC_NHOST_SUBDOMAIN)
console.log('PUBLIC_NHOST_REGION', import.meta.env.PUBLIC_NHOST_REGION)

const nhostClient = new NhostClient({
  subdomain: import.meta.env.PUBLIC_NHOST_SUBDOMAIN,
  region: import.meta.env.PUBLIC_NHOST_REGION,
})

export const nhostStore = atom(nhostClient)

import { NhostClient } from '@nhost/nextjs'
import { atom } from 'nanostores'

const nhostClient = new NhostClient({
  subdomain: import.meta.env.PUBLIC_NHOST_SUBDOMAIN,
  region: import.meta.env.PUBLIC_NHOST_REGION,
})

export const nhostStore = atom(nhostClient)

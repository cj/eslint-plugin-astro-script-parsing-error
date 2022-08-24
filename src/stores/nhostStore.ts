import { NhostClient } from '@nhost/react'
import { atom } from 'nanostores'

const nhostClient = new NhostClient({
  subdomain: import.meta.env.PUBLIC_NHOST_SUBDOMAIN,
  region: import.meta.env.PUBLIC_NHOST_REGION,
})

export const nhostStore = atom(nhostClient)

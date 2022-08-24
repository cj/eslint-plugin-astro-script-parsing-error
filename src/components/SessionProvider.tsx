import { useStore } from '@nanostores/preact'

import { nhostStore } from 'stores/nhostStore'
import produce from 'immer'
import React, { useEffect, useRef } from 'react'

import { useInterpret } from '@xstate/react'
import type { AuthContext } from '@nhost/core'

export interface SessionProviderProps {
  children: React.ReactNode
}

export function SessionProvider({ children }: SessionProviderProps): JSX.Element {
  const initial: any = null
  const nhost = useStore(nhostStore)
  const { machine } = nhost.auth.client
  const interpreter = useInterpret(machine, {
    devTools: nhost.devTools,
    context: produce<AuthContext>(machine.context, (ctx: AuthContext) => {
      // TODO: Add a param to pass this information in from SSR rendering
      if (initial) {
        ctx.user = initial.user
        ctx.refreshToken.value = initial.refreshToken ?? null
        ctx.accessToken.value = initial.accessToken ?? null
        ctx.accessToken.expiresAt = new Date(Date.now() + initial.accessTokenExpiresIn * 1_000)
      }
    }),
  }).start()

  // * Hook to send session update everytime the 'initial' props changed
  const isInitialMount = useRef(true)

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false
    } else if (initial) {
      interpreter.send('SESSION_UPDATE', { data: { session: initial } })
    }
  }, [initial, interpreter])

  nhost.auth.client.interpreter = interpreter

  // eslint-disable-next-line react/jsx-no-useless-fragment -- it could be more than one element
  return <>{children}</>
}

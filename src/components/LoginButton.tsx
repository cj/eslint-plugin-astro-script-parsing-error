import React from 'react'
import { useStore } from '@nanostores/preact'
import { nhostStore } from 'stores/nhostStore'

export function LoginButton(): JSX.Element {
  const $nhost = useStore(nhostStore)

  function onClickLogin() {
    const response = $nhost.auth.getUser()

    // eslint-disable-next-line no-console -- testing
    console.log(response)
  }

  return (
    <button type="button" onClick={onClickLogin} className="btn">
      Login
    </button>
  )
}

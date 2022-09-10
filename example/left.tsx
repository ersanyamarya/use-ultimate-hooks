import * as React from 'react'
import { useAppState } from './contextOfApp'

export default function left() {
  const { state } = useAppState()

  return (
    <>
      <h1>This is Left</h1>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </>
  )
}

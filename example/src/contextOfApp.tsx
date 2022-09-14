import * as React from 'react'
import { IUseReducedStateReturn, useReducedState } from '../../dist'

interface IAppState {
  user?: {
    name?: string
    email?: string
  }
  token?: string
  orgs?: string[]
}

const defaultAppState: IUseReducedStateReturn<IAppState> = {
  state: {},
  updateFieldValue: () => {},
  removeFieldValue: () => {},
  updateState: () => {},
  patchState: () => {},
  clearState: () => {},
  resetState: () => {},
  resetFieldValue: () => {},
}

const AppContext = React.createContext<IUseReducedStateReturn<IAppState>>(defaultAppState)
const useAppState = (): IUseReducedStateReturn<IAppState> =>
  React.useContext<IUseReducedStateReturn<IAppState>>(AppContext)

type PropsContainer = {
  children: React.ReactNode
}
const AppContextContainer = ({ children }: PropsContainer) => {
  const reducedState = useReducedState<IAppState>({})

  return <AppContext.Provider value={reducedState}>{children}</AppContext.Provider>
}

export { AppContextContainer, useAppState }

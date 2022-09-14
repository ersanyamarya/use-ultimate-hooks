import { useReducer } from 'react'

/* Defining an interface for the action object that is passed to the reducer. */
interface Action<T> {
  type: 'updateFieldValue' | 'removeFieldValue' | 'updateState' | 'patchState' | 'resetFieldValue' | 'reset'
  field?: string
  value?: any
  state?: T
}

/**
 * It returns a new state object based on the action type and the action payload
 * @param {T} state - The current state of the reducer.
 * @param action - Action<T>
 * @returns A new state object based on the action type and the action payload
 */
function reducer<T extends Record<string, any>>(state: T, action: Action<T>): T {
  switch (action.type) {
    case 'updateFieldValue':
      if (action.field) return { ...state, [action.field]: action.value }
      return { ...state }

    case 'removeFieldValue':
      if (action.field) delete state[action.field]
      return { ...state }

    case 'updateState':
      return action.state ?? state

    case 'patchState':
      return { ...state, ...action.state }

    case 'resetFieldValue':
      if (action.field) return { ...state, [action.field]: action.state?.[action.field] }
      return { ...state }

    case 'reset':
    default:
      return action.state ?? state
  }
}

type KeyOfType<T, V> = { [P in keyof T]: T[P] extends V ? P : never }[keyof T]

/* Defining the return type of the function `useReducedState` */
export interface IUseReducedStateReturn<T> {
  state: T
  updateFieldValue: (field: KeyOfType<T, any>, value: any) => void
  removeFieldValue: (field: KeyOfType<T, any>) => void
  updateState: (state: T) => void
  patchState: (state: Partial<T>) => void
  clearState: () => void
  resetState: () => void
  resetFieldValue: (field: KeyOfType<T, any>) => void
}

/**
 * It returns a state object and a set of functions to update the state
 * @param {T} [initialState] - The initial state of the form.
 */
export default function useReducedState<T>(initialState?: T): IUseReducedStateReturn<T> {
  const [state, dispatch] = useReducer(reducer, initialState ?? {})

  const updateFieldValue = (field: KeyOfType<T, any>, value: any) =>
    dispatch({ type: 'updateFieldValue', field: field.toString(), value })

  function removeFieldValue(field: KeyOfType<T, any>) {
    dispatch({ type: 'removeFieldValue', field: field.toString() })
  }
  const updateState = (state: T) => dispatch({ type: 'updateState', state: state || {} })

  function patchState(state: Partial<T>) {
    dispatch({ type: 'patchState', state: state || {} })
  }

  const resetFieldValue = (field: KeyOfType<T, any>) =>
    dispatch({ type: 'resetFieldValue', field: field.toString(), state: initialState ?? {} })

  const clearState = () => dispatch({ type: 'reset', state: {} })
  const resetState = () => dispatch({ type: 'reset', state: initialState ?? {} })

  return {
    state: state as T,
    updateFieldValue,
    removeFieldValue,
    updateState,
    clearState,
    patchState,
    resetState,
    resetFieldValue,
  }
}

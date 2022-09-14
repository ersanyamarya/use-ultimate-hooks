# Use Ultimate Hooks

This is a set of developer friendly custom React hooks, that will make your life easier and your code cleaner.

## Installation

```bash
npm install use-ultimate-hooks
```

## Usage

```typescript
import { IUseReducedStateReturn, useReducedState } from 'use-ultimate-hooks'
interface IState {
  count: number
  name: string
}
export default function App() {
  const {state, updateState} = useReducedState<IState>({
    count: 0,
    name: 'John'
  })

  return (
    <>
      <div>{state.count}</div>
      <div>{state.name}</div>
      <button onClick={() => updateState({count: state.count + 1})>Increment</button>
      <button onClick={() => updateState({name: 'Jane'})>Change name</button>
    </>
  )
}
```

## Hooks

### useReducedState

> Handle complex state with ease.

- It uses the reducer pattern to save and perform actions on the state such as update a particular property of the state.
- It is a wrapper around React's `useReducer` hook, that allows you to update the state by passing an object with the properties you want to update.
- It uses generics to define the type of the state, which makes it easier to use.

```typescript
interface IState {
  user?: {
    name?: string
    email?: string
  }
  token?: string
  orgs?: string[]
}
const { state, updateState } = useReducedState<IState>(initialState)
```

#### Returns an Object

| Name             | Type                                      | Description                                          |
| ---------------- | ----------------------------------------- | ---------------------------------------------------- |
| state            | IState                                    | The current state                                    |
| updateState      | (state: IState) => void                   | A function to update the state                       |
| patchState       | (state: Partial<IState>) => void          | A function to update the state with a patch function |
| clearState       | () => void                                | A function to clear the state                        |
| resetState       | () => void                                | A function to reset the state to the initial value   |
| updateFieldValue | (field: keyof IState, value: any) => void | A function to update a specific field in the state   |
| removeFieldValue | (field: keyof IState) => void             | A function to remove a specific field in the state   |
| resetFieldValue  | (field: keyof IState) => void             | A function to reset a specific field in the state    |

### useLocalStorage

> Save and retrieve data from the local storage smartly with ease.

- It uses generics to define the type of the data, which makes it easier to use.
- It stores the data in the local storage, and updates the state when the data changes in the local storage.
- It adapts to the data type, and stores it in the local storage as a string, and parses it when retrieving it.

```typescript
const [value, setValue] = useLocalStorage<Record<string, any>>(key, initialValue)
```

#### Returns an Array

| Name     | Type               | Description                    |
| -------- | ------------------ | ------------------------------ |
| value    | T                  | The current value              |
| setValue | (value: T) => void | A function to update the value |

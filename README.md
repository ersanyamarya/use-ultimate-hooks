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

```js
const [value, setValue] = useReducedState(key, initialValue)
```

### useLocalStorage

```js
const [value, setValue] = useLocalStorage(key, initialValue)
```

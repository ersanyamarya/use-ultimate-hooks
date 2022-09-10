# Use Ultimate Hooks

This is a set of developer friendly custom React hooks, that will make your life easier and your code cleaner.

## Installation

```bash
npm install use-ultimate-hooks
```

## Usage

```js
export default function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('John')

  const { count, setCount } = useUltimateState(0)
  const { name, setName } = useUltimateState('John')

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <input value={name} onChange={e => setName(e.target.value)} />
    </div>
  )
}
```

## Hooks

### useLocalStorage

```js
const [value, setValue] = useLocalStorage(key, initialValue)
```

### useSessionStorage

```js
const [value, setValue] = useSessionStorage(key, initialValue)
```

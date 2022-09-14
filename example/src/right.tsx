import { useAppState } from './contextOfApp'
export default function Right() {
  const { state, patchState, updateFieldValue, removeFieldValue, clearState } = useAppState()

  return (
    <>
      <h1>This is Right</h1>

      <pre>{JSON.stringify(state, null, 2)}</pre>

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '1rem',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        <button
          onClick={() => {
            updateFieldValue('token', '1234567890')
          }}
        >
          Add Token
        </button>
        <button
          onClick={() => {
            patchState({
              user: {
                name: 'John Doe',
                email: 'asdas',
              },
            })
          }}
        >
          Patch State
        </button>
        <button
          onClick={() => {
            removeFieldValue('token')
          }}
        >
          Remove Token
        </button>
        <button
          onClick={() => {
            clearState()
          }}
        >
          Clear State
        </button>
      </div>
    </>
  )
}

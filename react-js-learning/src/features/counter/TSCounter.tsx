import { useAppSelector, useAppDispatch } from '../../app/tsHooks'

import { decrement, increment, incrementByNumberAmount } from './tsCounterSlice'

export function TSCounter() {
  // The `state` arg is correctly typed as `RootState` already
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

  // omit rendering
  return (
    <div>
      <div>
        <h1 style={{color: "white"}}>{count}</h1>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>

        <button
          aria-label="+20 value"
          onClick={() => dispatch(incrementByNumberAmount(20))}
        >
          +20 value
        </button>

        <button
          aria-label="Delay 1s and -20 value"
          onClick={() => setTimeout(() => {
            dispatch(incrementByNumberAmount(-20))
          }, 1000)}
        >
          Delay 1s and -20 value
        </button>
      </div>
    </div>
  )
}
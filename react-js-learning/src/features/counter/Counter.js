import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from './counterSlice'

export default function Counter() {
  // Read data: useSelector
  const count = useSelector((state) => state.counter.value)
  // Send action: useDispatch
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>

        <button
          aria-label="+20 value"
          onClick={() => dispatch(incrementByAmount(20))}
        >
          +20 value
        </button>

        <button
          aria-label="Delay 1s and -20 value"
          onClick={() => setTimeout(() => {
            dispatch(incrementByAmount(-20))
          }, 1000)}
        >
          Delay 1s and -20 value
        </button>
      </div>
    </div>
  )
}
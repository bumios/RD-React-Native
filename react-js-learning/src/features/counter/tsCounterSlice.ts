import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/tsStore'

interface CounterState {
    value: number
}

const initialState: CounterState = {
    value: 0
} as CounterState

export const tsCounterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1  
        },
        decrement: (state) => {
            state.value -= 1
        },
        // Use the PayloadAction type to declare the contents of `action.payload`
        incrementByNumberAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        },
    }
})

export const { increment, decrement, incrementByNumberAmount } = tsCounterSlice.actions

export const selectCount = (state: RootState) => state.counter.value

export default tsCounterSlice.reducer
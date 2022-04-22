import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/tsCounterSlice'

const tsStore = configureStore({
    reducer: {
        counter: counterReducer
    }
})

export type RootState = ReturnType<typeof tsStore.getState>

export type AppDispatch = typeof tsStore.dispatch
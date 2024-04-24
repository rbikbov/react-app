import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { todosSlice } from '~entities/todo'
import { usersSlice } from '~entities/user'

const rootReducer = combineReducers({
  [todosSlice.name]: todosSlice.reducer,
  [usersSlice.name]: usersSlice.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

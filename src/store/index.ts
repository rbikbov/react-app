import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { todosSlice } from './todosSlice'
import { usersSlice } from './usersSlice'

const rootReducer = combineReducers({
  todos: todosSlice.reducer,
  users: usersSlice.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

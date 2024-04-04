import { combineReducers } from 'redux'
import { usersReducer } from './usersReducer'
import { todosReducer } from './todosReducer'

export const rootReducer = combineReducers({
  user: usersReducer,
  todo: todosReducer,
})

export type RootState = ReturnType<typeof rootReducer>

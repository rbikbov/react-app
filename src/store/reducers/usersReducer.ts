import { UsersAction, UsersActionType, UsersState } from '@/types/user'

const initialState: UsersState = {
  users: [],
  loading: false,
  error: null,
}

export const usersReducer = (
  state = initialState,
  action: UsersAction,
): UsersState => {
  switch (action.type) {
    case UsersActionType.FETCH_USERS:
      return { ...state, loading: true, error: null }
    case UsersActionType.FETCH_USERS_SUCCESS:
      return { users: action.payload, loading: false, error: null }
    case UsersActionType.FETCH_USERS_ERROR:
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}

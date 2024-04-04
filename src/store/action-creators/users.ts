import { Dispatch } from 'redux'
import { UsersAction, UsersActionType } from '../../types/user'
import { handlePromise } from '../../utils/handlePromise'
import { requestUsersList } from '../../api/users'

export const fetchUsers = () => {
  return async (dispatch: Dispatch<UsersAction>) => {
    dispatch({ type: UsersActionType.FETCH_USERS })
    const { result, error } = await handlePromise(requestUsersList())
    error &&
      dispatch({
        type: UsersActionType.FETCH_USERS_ERROR,
        payload: error.message,
      })
    result &&
      dispatch({
        type: UsersActionType.FETCH_USERS_SUCCESS,
        payload: result.data,
      })
  }
}

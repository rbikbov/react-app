import { Dispatch } from 'redux'
import { TodosAction, TodosActionType } from '../../types/todo'
import { handlePromise } from '../../utils/handlePromise'
import { requestTodosList } from '../../api/todos'

export const fetchTodos = ({ page, limit } = { page: 1, limit: 10 }) => {
  return async (dispatch: Dispatch<TodosAction>) => {
    dispatch({ type: TodosActionType.FETCH_TODOS })
    const { result, error } = await handlePromise(
      requestTodosList({ page, limit }),
    )
    error &&
      dispatch({
        type: TodosActionType.FETCH_TODOS_ERROR,
        payload: error.message,
      })
    result &&
      dispatch({
        type: TodosActionType.FETCH_TODOS_SUCCESS,
        payload: {
          currentPage: page,
          pageSize: limit,
          itemsCount: Number(result.headers['x-total-count']) || 0,
          todos: result.data,
        },
      })
  }
}

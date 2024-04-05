import { TodosAction, TodosActionType, TodosState } from '@/types/todo'

const initialState: TodosState = {
  todos: [],
  loading: false,
  error: null,

  currentPage: 1,
  pageSize: 10,
  itemsCount: 0,
}

export const todosReducer = (
  state = initialState,
  action: TodosAction,
): TodosState => {
  switch (action.type) {
    case TodosActionType.FETCH_TODOS:
      return { ...state, loading: true, error: null }
    case TodosActionType.FETCH_TODOS_SUCCESS:
      return {
        ...action.payload,
        loading: false,
        error: null,
      }
    case TodosActionType.FETCH_TODOS_ERROR:
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}

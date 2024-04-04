const exampleTodo = {
  userId: 1,
  id: 1,
  title: 'delectus aut autem',
  completed: false,
}

export type Todo = typeof exampleTodo

export interface TodosState {
  todos: Todo[]
  loading: boolean
  error: null | string
  currentPage: number
  pageSize: number
  itemsCount: number
}

export enum TodosActionType {
  FETCH_TODOS = 'FETCH_TODOS',
  FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS',
  FETCH_TODOS_ERROR = 'FETCH_TODOS_ERROR',
  SET_TODOS_PAGE = 'SET_TODOS_PAGE',
}

interface FetchTodosAction {
  type: TodosActionType.FETCH_TODOS
}
interface FetchTodosSuccessAction {
  type: TodosActionType.FETCH_TODOS_SUCCESS
  payload: Pick<TodosState, 'todos' | 'currentPage' | 'pageSize' | 'itemsCount'>
}
interface FetchTodosErrorAction {
  type: TodosActionType.FETCH_TODOS_ERROR
  payload: string
}
export type TodosAction =
  | FetchTodosAction
  | FetchTodosSuccessAction
  | FetchTodosErrorAction

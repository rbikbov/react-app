import { StateStatus } from './stateStatus'

const exampleTodo = {
  userId: 1,
  id: 1,
  title: 'delectus aut autem',
  completed: false,
}

export type Todo = typeof exampleTodo

export interface TodosState {
  data: Todo[]
  status: StateStatus
  errorText: string
  currentPage: number
  pageSize: number
  itemsCount: number
}

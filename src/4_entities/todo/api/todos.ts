import { axios } from '~shared/api'
import { wait } from '~shared/lib/wait'
import { Todo } from '../model/types'

export const requestTodosList = async ({ page = 1, limit = 10 }) => {
  await wait(1000)
  return axios.get<Todo[]>('https://jsonplaceholder.typicode.com/todos', {
    params: { _page: page, _limit: limit },
  })
}

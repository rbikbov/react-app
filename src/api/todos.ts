import axios from 'axios'
import { Todo } from '@/types/todo'
import { sleep } from '@/utils/promises/sleep'

export const requestTodosList = async ({ page = 1, limit = 10 }) => {
  await sleep(1000)
  return axios.get<Todo[]>('https://jsonplaceholder.typicode.com/todos', {
    params: { _page: page, _limit: limit },
  })
}

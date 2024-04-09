import axios from 'axios'
import { User } from '@/types/user'
import { sleep } from '@/utils/sleep'

export const requestUsersList = async ({ page = 1, limit = 10 }) => {
  await sleep(1000)
  return axios.get<User[]>('https://jsonplaceholder.typicode.com/users', {
    params: { _page: page, _limit: limit },
  })
}

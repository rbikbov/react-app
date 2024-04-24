import { axios } from '~shared/api'
import { wait } from '~shared/lib/wait'
import { User } from '../model/types'

export const requestUsersList = async ({ page = 1, limit = 10 }) => {
  await wait(1000)
  return axios.get<User[]>('https://jsonplaceholder.typicode.com/users', {
    params: { _page: page, _limit: limit },
  })
}

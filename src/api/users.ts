import axios from 'axios'
import { User } from '@/types/user'
import { sleep } from '@/utils/sleep'

export const requestUsersList = async () => {
  await sleep(1000)
  return axios.get<User[]>(
    'https://jsonplaceholder.typicode.com/users?_limit=10',
  )
}

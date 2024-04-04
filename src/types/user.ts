const userExample = {
  id: 1,
  name: 'Leanne Graham',
  username: 'Bret',
  email: 'Sincere@april.biz',
  address: {
    street: 'Kulas Light',
    suite: 'Apt. 556',
    city: 'Gwenborough',
    zipcode: '92998-3874',
    geo: {
      lat: '-37.3159',
      lng: '81.1496',
    },
  },
  phone: '1-770-736-8031 x56442',
  website: 'hildegard.org',
  company: {
    name: 'Romaguera-Crona',
    catchPhrase: 'Multi-layered client-server neural-net',
    bs: 'harness real-time e-markets',
  },
}

export type User = typeof userExample

export interface UsersState {
  users: User[]
  loading: boolean
  error: null | string
}

export enum UsersActionType {
  FETCH_USERS = 'FETCH_USERS',
  FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
  FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
}

interface FetchUsersAction {
  type: UsersActionType.FETCH_USERS
}
interface FetchUsersSuccessAction {
  type: UsersActionType.FETCH_USERS_SUCCESS
  payload: User[]
}
interface FetchUsersErrorAction {
  type: UsersActionType.FETCH_USERS_ERROR
  payload: string
}
export type UsersAction =
  | FetchUsersAction
  | FetchUsersSuccessAction
  | FetchUsersErrorAction

import { StateStatus } from '~shared/model/stateStatus'

const userAddressGeo = {
  lat: '-37.3159',
  lng: '81.1496',
}

const userAddress = {
  street: 'Kulas Light',
  suite: 'Apt. 556',
  city: 'Gwenborough',
  zipcode: '92998-3874',
  geo: userAddressGeo,
}

const userCompany = {
  name: 'Romaguera-Crona',
  catchPhrase: 'Multi-layered client-server neural-net',
  bs: 'harness real-time e-markets',
}

const userExample = {
  id: 1,
  name: 'Leanne Graham',
  username: 'Bret',
  email: 'Sincere@april.biz',
  address: userAddress,
  phone: '1-770-736-8031 x56442',
  website: 'hildegard.org',
  company: userCompany,
}

export type User = typeof userExample

export interface UsersState {
  data: User[]
  status: StateStatus
  errorText: string
  currentPage: number
  pageSize: number
  itemsCount: number
}

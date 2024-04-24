/*
import { useMemo } from 'react'
import { bindActionCreators } from '@reduxjs/toolkit'
import { todosActions } from '~app/store/todosSlice'
import { usersActions } from '~app/store/usersSlice'
import { useAppDispatch } from './useAppDispatch'

const actions = {
  ...todosActions,
  ...usersActions,
}

export const useActions = () => {
  const dispatch = useAppDispatch()
  return useMemo(() => bindActionCreators(actions, dispatch), [dispatch])
}
*/

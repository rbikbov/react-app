import { useAppDispatch } from './useAppDispatch'
import { bindActionCreators } from '@reduxjs/toolkit'
import { useMemo } from 'react'
import { todosActions } from '@/store/todosSlice'
import { usersActions } from '@/store/usersSlice'

const actions = {
  ...todosActions,
  ...usersActions,
}

export const useActions = () => {
  const dispatch = useAppDispatch()
  return useMemo(() => bindActionCreators(actions, dispatch), [dispatch])
}

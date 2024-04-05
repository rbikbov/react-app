import { useDispatch } from 'react-redux'
import { Dispatch, bindActionCreators } from 'redux'
import actionCreators from '@/store/action-creators'
import { useMemo } from 'react'

export const useActions = () => {
  const dispatch = useDispatch<Dispatch>()
  return useMemo(() => bindActionCreators(actionCreators, dispatch), [dispatch])
}

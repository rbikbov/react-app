import { useDispatch } from 'react-redux'
import { AnyAction, Dispatch, bindActionCreators } from 'redux'
import actionCreators from '../store/action-creators'
import { useMemo } from 'react'

export const useActions = () => {
  const dispatch: Dispatch<AnyAction> = useDispatch()
  return useMemo(() => bindActionCreators(actionCreators, dispatch), [dispatch])
}

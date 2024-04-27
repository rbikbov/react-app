import classNames from 'classnames'
import { useAppSelector } from '@/hooks/useAppSelector'
import { Paginator } from '@/components/Paginator/Paginator'
import { useActions } from '@/hooks/useActions'
import { StateStatus } from '@/types/stateStatus'
import styles from './TodosList.module.css'

export const TodosList: React.FC = () => {
  const todosState = useAppSelector((state) => state.todos)
  const { fetchTodos } = useActions()
  const fetchTodosWithParams = ({
    page,
    limit,
  }: {
    page: number
    limit?: number
  }) => {
    if (todosState.status === StateStatus.pending) return
    fetchTodos({
      page,
      limit: typeof limit === 'number' ? limit : todosState.pageSize,
    })
  }
  const handleTodosLoadBtnClicked = () => {
    fetchTodosWithParams({
      page: todosState.currentPage,
      limit: todosState.pageSize,
    })
  }
  const onPageChange = (page: number) => {
    fetchTodosWithParams({ page })
  }
  return (
    <div>
      <h4>Todos list</h4>
      {todosState.status === StateStatus.pending && <p>Loading...</p>}
      {todosState.status === StateStatus.error && (
        <p style={{ color: 'red' }}>Error: {todosState.errorText}</p>
      )}
      {todosState.data.length ? (
        <>
          <ul>
            {todosState.data.map((todo) => (
              <li key={todo.id}>
                ({todo.id}){' '}
                <span
                  className={classNames(styles.todoTitle, {
                    [styles.todoTitle_completed]: todo.completed,
                  })}
                >
                  {todo.title}
                </span>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p>Todos not found</p>
      )}
      {!!todosState.itemsCount && (
        <Paginator
          loading={todosState.status === StateStatus.pending}
          itemsCount={todosState.itemsCount}
          pageSize={todosState.pageSize}
          currentPage={todosState.currentPage}
          onPageChange={onPageChange}
        />
      )}
      <div>
        <button
          onClick={handleTodosLoadBtnClicked}
          disabled={todosState.status === StateStatus.pending}
        >
          {todosState.data.length ? 'Reload' : 'Load'} todos
        </button>
      </div>
    </div>
  )
}

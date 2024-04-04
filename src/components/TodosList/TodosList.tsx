import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useActions } from '../../hooks/useActions'
import { Paginator } from '../Paginator/Paginator'

export const TodosList: React.FC = () => {
  const state = useTypedSelector((state) => state.todo)
  const { fetchTodos } = useActions()
  const fetchTodosWithParams = ({
    page,
    limit,
  }: {
    page: number
    limit?: number
  }) => {
    if (state.loading) return
    fetchTodos({
      page,
      limit: typeof limit === 'number' ? limit : state.pageSize,
    })
  }
  const handleTodosLoadBtnClicked = () => {
    fetchTodosWithParams({ page: state.currentPage, limit: state.pageSize })
  }
  const onPageChange = (page: number) => {
    fetchTodosWithParams({ page })
  }
  return (
    <div>
      <h4>Todos list</h4>
      {state.loading && <p>Loading...</p>}
      {state.error && <p style={{ color: 'red' }}>Error: {state.error}</p>}
      {state.todos.length ? (
        <>
          <ul>
            {state.todos.map((todo) => (
              <li key={todo.id}>
                <b>{todo.completed ? '+' : '-'}</b> | {todo.title} ({todo.id})
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p>Todos not found</p>
      )}
      {state.itemsCount && (
        <Paginator
          loading={state.loading}
          itemsCount={state.itemsCount}
          pageSize={state.pageSize}
          currentPage={state.currentPage}
          onPageChange={onPageChange}
        />
      )}
      <div>
        <button
          onClick={handleTodosLoadBtnClicked}
          disabled={state.loading}
        >
          {state.todos.length ? 'Reload' : 'Load'} todos
        </button>
      </div>
    </div>
  )
}

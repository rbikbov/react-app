import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useActions } from '../../hooks/useActions'

export const UsersList: React.FC = () => {
  const state = useTypedSelector((state) => state.user)
  const { fetchUsers } = useActions()
  const handleUsersLoadBtnClicked = () => fetchUsers()
  return (
    <div>
      <h4>Users list</h4>
      {state.loading && <p>Loading...</p>}
      {state.error && <p style={{ color: 'red' }}>Error: {state.error}</p>}
      {state.users.length ? (
        <>
          <ul>
            {state.users.map((user) => (
              <li key={user.id}>
                <b>@{user.username}</b> | {user.name} ({user.id})
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p>Users not found</p>
      )}
      <div>
        <button
          onClick={handleUsersLoadBtnClicked}
          disabled={state.loading}
        >
          {state.users.length ? 'Reload' : 'Load'} users
        </button>
      </div>
    </div>
  )
}

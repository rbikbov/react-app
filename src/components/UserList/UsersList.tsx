import { useActions } from '@/hooks/useActions'
import { useAppSelector } from '@/hooks/useAppSelector'
import { StateStatus } from '@/types/stateStatus'

export const UsersList: React.FC = () => {
  const usersState = useAppSelector((state) => state.users)
  const { fetchUsers } = useActions()
  const handleUsersLoadBtnClicked = () => {
    fetchUsers({ page: 1, limit: 10 })
  }
  return (
    <div>
      <h4>Users list</h4>
      {usersState.status === StateStatus.pending && <p>Loading...</p>}
      {usersState.status === StateStatus.error && (
        <p style={{ color: 'red' }}>Error: {usersState.errorText}</p>
      )}
      {usersState.data.length ? (
        <>
          <ul>
            {usersState.data.map((user) => (
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
          disabled={usersState.status === StateStatus.pending}
        >
          {usersState.data.length ? 'Reload' : 'Load'} users
        </button>
      </div>
    </div>
  )
}

import { usersSlice } from '~entities/user'
import { StateStatus, useAppDispatch, useAppSelector } from '~shared/model'

export const UsersList: React.FC = () => {
  const usersState = useAppSelector((state) => state.users)
  const dispatch = useAppDispatch()
  const handleUsersLoadBtnClicked = () => {
    dispatch(usersSlice.actions.fetchUsers({ page: 1, limit: 10 })).catch(
      console.warn, // TODO
    )
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

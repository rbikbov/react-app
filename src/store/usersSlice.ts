import { requestUsersList } from '@/api/users'
import { StateStatus } from '@/types/stateStatus'
import { UsersState } from '@/types/user'
import { handlePromise } from '@/utils/promises/handlePromise'
import { createAppSlice } from '@/utils/store/createAppSlice'

const initialState: UsersState = {
  data: [],
  status: StateStatus.idle,
  errorText: '',

  currentPage: 1,
  pageSize: 10,
  itemsCount: 0,
}

export const usersSlice = createAppSlice({
  name: 'users',
  initialState,
  reducers: (create) => {
    const createAThunk = create.asyncThunk.withTypes<{
      rejectValue: { error: string }
    }>()
    return {
      fetchUsers: createAThunk(
        async (
          { page = 1, limit = 10 }: { page: number; limit: number },
          thunkApi,
        ) => {
          const { result, error } = await handlePromise(
            requestUsersList({ page, limit }),
          )

          if (error) throw thunkApi.rejectWithValue({ error: error.message })

          return {
            data: result.data,
            currentPage: page,
            pageSize: limit,
            itemsCount: Number(result.headers['x-total-count']) || 0,
          }
        },
      ),
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(usersSlice.actions.fetchUsers.pending, (state) => {
        state.status = StateStatus.pending
      })
      .addCase(usersSlice.actions.fetchUsers.fulfilled, (state, action) => {
        state.status = StateStatus.success
        state.data = action.payload.data
        state.currentPage = action.payload.currentPage
        state.pageSize = action.payload.pageSize
        state.itemsCount = action.payload.itemsCount
      })
      .addCase(usersSlice.actions.fetchUsers.rejected, (state, action) => {
        state.status = StateStatus.error
        if (typeof action.payload?.error === 'string') {
          state.errorText = action.payload.error
        }
      })
  },
})

export const { actions: usersActions, reducer: usersReducer } = usersSlice

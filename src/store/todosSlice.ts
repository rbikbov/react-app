import { requestTodosList } from '@/api/todos'
import { TodosState } from '@/types/todo'
import { handlePromise } from '@/utils/promises/handlePromise'
import { createAppSlice } from '@/utils/store/createAppSlice'
import { StateStatus } from '@/types/stateStatus'

const initialState: TodosState = {
  data: [],
  status: StateStatus.idle,
  errorText: '',

  currentPage: 1,
  pageSize: 10,
  itemsCount: 0,
}

export const todosSlice = createAppSlice({
  name: 'todos',
  initialState,
  reducers: (create) => {
    const createAThunk = create.asyncThunk.withTypes<{
      rejectValue: { error: string }
    }>()
    return {
      fetchTodos: createAThunk(
        async (
          { page = 1, limit = 10 }: { page: number; limit: number },
          thunkApi,
        ) => {
          const { result, error } = await handlePromise(
            requestTodosList({ page, limit }),
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
      .addCase(todosSlice.actions.fetchTodos.pending, (state) => {
        state.status = StateStatus.pending
      })
      .addCase(todosSlice.actions.fetchTodos.fulfilled, (state, action) => {
        state.status = StateStatus.success
        state.data = action.payload.data
        state.currentPage = action.payload.currentPage
        state.pageSize = action.payload.pageSize
        state.itemsCount = action.payload.itemsCount
      })
      .addCase(todosSlice.actions.fetchTodos.rejected, (state, action) => {
        state.status = StateStatus.error
        if (typeof action.payload?.error === 'string') {
          state.errorText = action.payload.error
        }
      })
  },
})

export const { actions: todosActions, reducer: todosReducer } = todosSlice

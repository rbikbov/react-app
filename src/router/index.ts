import { createBrowserRouter } from 'react-router-dom'
import { DefaultLayout } from '@/components/PageLayouts/DefaultLayout/DefaultLayout'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: DefaultLayout,
    children: [
      {
        path: '',
        async lazy() {
          const { HomePage } = await import('@/pages/Home/Home')
          return { Component: HomePage }
        },
      },
      {
        path: 'users',
        async lazy() {
          const { UsersPage } = await import('@/pages/Users/Users')
          return { Component: UsersPage }
        },
      },
      {
        path: 'todos',
        async lazy() {
          const { TodosPage } = await import('@/pages/Todos/Todos')
          return { Component: TodosPage }
        },
      },
    ],
  },
])

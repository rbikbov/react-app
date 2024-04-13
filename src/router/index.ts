import { lazy } from 'react'
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
      {
        path: 'suspense',
        children: [
          {
            path: '',
            Component: lazy(() => import('@/pages/Home/Home')),
          },
          {
            path: 'users',
            Component: lazy(() => import('@/pages/Users/Users')),
          },
          {
            path: 'todos',
            Component: lazy(() => import('@/pages/Todos/Todos')),
          },
        ],
      },
    ],
  },
])

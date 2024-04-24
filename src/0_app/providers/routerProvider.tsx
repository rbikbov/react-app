import { lazy } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { DefaultLayout } from '~pages/layouts'

const router = createBrowserRouter([
  {
    path: '/',
    Component: DefaultLayout,
    children: [
      {
        path: '',
        async lazy() {
          const { HomePage } = await import('~pages/home/Home')
          return { Component: HomePage }
        },
      },
      {
        path: 'users',
        async lazy() {
          const { UsersPage } = await import('~pages/users/Users')
          return { Component: UsersPage }
        },
      },
      {
        path: 'todos',
        async lazy() {
          const { TodosPage } = await import('~pages/todos/Todos')
          return { Component: TodosPage }
        },
      },
      {
        path: 'suspense',
        children: [
          {
            path: '',
            Component: lazy(() => import('~pages/home/Home')),
          },
          {
            path: 'users',
            Component: lazy(() => import('~pages/users/Users')),
          },
          {
            path: 'todos',
            Component: lazy(() => import('~pages/todos/Todos')),
          },
        ],
      },
    ],
  },
])

export function BrowserRouter() {
  return <RouterProvider router={router} />
}

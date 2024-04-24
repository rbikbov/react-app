import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { LinksList } from '~widgets/LinksList'

export const DefaultLayout: React.FC = (): React.ReactElement => {
  return (
    <>
      <nav>
        <LinksList
          links={[
            { path: '/', text: 'Home' },
            { path: '/users', text: 'Users' },
            { path: '/todos', text: 'Todos' },
          ]}
        />
        <br />
        <LinksList
          links={[
            { path: '/suspense/', text: 'Home(suspense)' },
            { path: '/suspense/users', text: 'Users(suspense)' },
            { path: '/suspense/todos', text: 'Todos(suspense)' },
          ]}
        />
      </nav>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </>
  )
}

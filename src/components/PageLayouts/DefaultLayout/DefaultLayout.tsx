import { Outlet } from 'react-router-dom'
import { LinksList } from '@/components/LinksList/LinksList.tsx'

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
      </nav>
      <Outlet />
    </>
  )
}

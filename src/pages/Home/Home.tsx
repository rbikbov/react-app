import { Suspense, lazy } from 'react'

const Home = lazy(() =>
  import('@/components/Home/Home').then((module) => ({ default: module.Home })),
)

export const HomePage = () => {
  return (
    <Suspense fallback={<div>Loading home page...</div>}>
      <Home />
    </Suspense>
  )
}

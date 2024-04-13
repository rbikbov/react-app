import { Suspense, lazy } from 'react'

const Home = lazy(() =>
  import('@/components/Home/Home').then(({ Home }) => ({ default: Home })),
)

export const HomePage = () => {
  return (
    <Suspense fallback={<div>Loading &quot;Home&quot; component...</div>}>
      <Home />
    </Suspense>
  )
}

export default HomePage

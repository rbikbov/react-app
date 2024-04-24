import { Suspense, lazy } from 'react'

const Home = lazy(() =>
  import('~widgets/HomeContent/HomeContent').then(({ HomeContent }) => ({
    default: HomeContent,
  })),
)

export const HomePage = () => {
  return (
    <Suspense fallback={<div>Loading &quot;Home&quot; component...</div>}>
      <Home />
    </Suspense>
  )
}

export default HomePage

import reactLogo from '~shared/assets/react.svg'
// TODO: fix eslint config and remove this line
// eslint-disable-next-line import/no-unresolved
import viteLogo from '/vite.svg'
import './HomeContent.css'
import { CounterButton } from '~widgets/CounterButton'

export const HomeContent: React.FC = (): React.ReactElement => {
  return (
    <>
      <div>
        <a
          href="https://vitejs.dev"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={viteLogo}
            className="logo"
            alt="Vite logo"
          />
        </a>
        <a
          href="https://react.dev"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={reactLogo}
            className="logo react"
            alt="React logo"
          />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <CounterButton />
        <p>
          Edit <code>src/components/Home.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

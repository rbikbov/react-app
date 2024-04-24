import { useState } from 'react'

export const CounterButton: React.FC = (): React.ReactElement => {
  const [count, setCount] = useState(0)

  return (
    <button
      onClick={() => {
        setCount((count) => count + 1)
      }}
    >
      count is {count}
    </button>
  )
}

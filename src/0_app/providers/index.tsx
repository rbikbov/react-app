import { StrictMode } from 'react'
import { BrowserRouter } from './routerProvider'
import { StoreProvider } from './storeProvider'

export function AppProviders() {
  return (
    <StrictMode>
      <StoreProvider>
        <BrowserRouter />
      </StoreProvider>
    </StrictMode>
  )
}

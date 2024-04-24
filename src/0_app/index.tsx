import { createRoot } from 'react-dom/client'
import '~shared/main.css'
import { AppProviders } from './providers'

createRoot(document.getElementById('root')!).render(<AppProviders />)


import { Home } from './pages/Home'
import { TaksContextProvider } from './contexts/TaskContext'
import './styles/global.css'
import './styles/theme.css'



export function App() {


  return (
    <TaksContextProvider >
      <Home />
    </TaksContextProvider>
  )
}

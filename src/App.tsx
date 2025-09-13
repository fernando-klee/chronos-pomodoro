
import { TaksContextProvider } from './contexts/TaskContext/TaskContextProvider'
import { Home } from './pages/Home'
import './styles/global.css'
import './styles/theme.css'



export function App() {


  return (
    <TaksContextProvider>
      <Home />
    </TaksContextProvider>
  )
}

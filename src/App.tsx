import { Container } from './components/Container'
import { CountDown } from './components/CountDown'
import { Logo } from './components/Logo'
import { Menu } from './components/Menu'
import './styles/global.css'
import './styles/theme.css'

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>
    </>
  )
}

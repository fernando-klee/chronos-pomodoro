import { HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, SunIcon, } from 'lucide-react'
import styles from './styles.module.css'
import { useEffect, useState } from 'react'

type AvalibleThemes = 'dark' | 'light';

export function Menu() {
  const [theme, setTheme] = useState<AvalibleThemes>(() =>
    localStorage.getItem('theme') as AvalibleThemes || 'dark'
  );

  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />
  }

  function handleThemeChange(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();
    console.log('clicado', Date.now())

    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark')
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <nav className={styles.menu}>
      <a className={styles.menuLink} href="#" aria-label='Ir para a Home' title='Home'>
        <HouseIcon />
      </a>
      <a className={styles.menuLink} href="#" aria-label='Ir para a Histórico' title='Histórico'>
        <HistoryIcon />
      </a>
      <a className={styles.menuLink} href="#" aria-label='Ir para a Configurações' title='Configurações'>
        <SettingsIcon />
      </a>
      <a className={styles.menuLink}
        href="#"
        aria-label='Mudar Tema'
        title='Tema'
        onClick={handleThemeChange}
      >
        {nextThemeIcon[theme]}
      </a>
    </nav>
  )
}
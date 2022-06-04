import { MenuIcon, OptionIcon } from 'assets'
import styles from './header.module.scss'

const Header = () => {
  return (
    <header className={styles.container}>
      <MenuIcon />
      <h1>노래 맞추기</h1>
      <OptionIcon />
    </header>
  )
}

export default Header

import { MenuIcon, OptionIcon } from 'assets'
import styles from './header.module.scss'

const Header = () => {
  return (
    <header className={styles.container}>
      <MenuIcon />
      <div>노래 맞추기</div>
      <OptionIcon />
    </header>
  )
}

export default Header

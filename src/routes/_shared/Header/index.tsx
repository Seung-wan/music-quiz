import { MenuIcon, FilterIcon } from 'assets'

import styles from './header.module.scss'

const Header = () => {
  return (
    <header className={styles.container}>
      <button type='button'>
        <MenuIcon />
      </button>
      <h1>AWS Amplify Test</h1>
      <button type='button'>
        <FilterIcon />
      </button>
    </header>
  )
}

export default Header

import { Routes, Route } from 'react-router-dom'
import Music from './Music'
import styles from './routes.module.scss'

const App = () => {
  return (
    <div className={styles.app}>
      <Routes>
        <Route path='/' element={<Music />} />
      </Routes>
    </div>
  )
}

export default App

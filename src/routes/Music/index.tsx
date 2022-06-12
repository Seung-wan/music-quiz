import { useState } from 'react'

import useSongList from 'hooks/useSongList'

import Header from 'routes/_shared/Header'
import CardList from './CardList'
import Quiz from './Quiz'

import styles from './music.module.scss'

const Music = () => {
  const [category, setCategory] = useState('')

  const { songList } = useSongList(category)

  return (
    <div className={styles.container}>
      <Header />
      <h2>카테고리</h2>
      <CardList setCategory={setCategory} />
      <Quiz songList={songList} />
    </div>
  )
}

export default Music

/* eslint-disable jsx-a11y/media-has-caption */
import { useState, ChangeEvent, FormEvent, useEffect } from 'react'
import styles from './quiz.module.scss'

interface Props {
  songList: string[]
  // setSongList: (func: (prev: string[]) => string[]) => void
}

const Quiz = ({ songList }: Props) => {
  const [title, setTitle] = useState('')
  const [song, setSong] = useState('')
  const [correct, setCorrect] = useState(false)
  const [count, setCount] = useState(0)

  const handleChangeTitle = (evt: ChangeEvent<HTMLInputElement>) => {
    setTitle(evt.currentTarget.value)
  }

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault()

    const convertSong = song.slice(14).match(/^[가-힣|a-z]+/i)
    const answer = convertSong && convertSong[0]

    if (title === answer) {
      setCorrect(true)
      setCount((prev) => prev + 1)
    }

    setTitle('')
  }

  useEffect(() => {
    setSong(songList[count])
  }, [count, songList])

  if (songList.length === 0) return <div className={styles.alertMessage}>카테고리를 선택해주세요.</div>
  if (count === 10) return <div className={styles.alertMessage}>종료되었습니다.</div>

  return (
    <div className={styles.container}>
      <h2>남은 노래: {10 - count} / 10</h2>

      <audio controls autoPlay src={song} controlsList='nodownload' />
      <form onSubmit={handleSubmit}>
        <label htmlFor='title'>제목: </label>
        <input type='text' id='title' value={title} onChange={handleChangeTitle} />
        <button type='submit'>입력</button>
      </form>
      {correct && <div>정답입니다.</div>}
    </div>
  )
}

export default Quiz

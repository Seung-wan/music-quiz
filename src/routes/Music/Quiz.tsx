import { useState, ChangeEvent, FormEvent, useEffect } from 'react'
import { useRecoilState } from 'recoil'

import { correctState, wrongState, countState } from '../recoil/music'

import styles from './quiz.module.scss'

interface Props {
  songList: string[]
}

const Quiz = ({ songList }: Props) => {
  const [count, setCount] = useRecoilState(countState)
  const [correct, setCorrect] = useRecoilState(correctState)
  const [wrong, setWrong] = useRecoilState(wrongState)

  const [title, setTitle] = useState('')
  const [currentSong, setCurrentSong] = useState('')

  const handleChangeTitle = (evt: ChangeEvent<HTMLInputElement>) => {
    setTitle(evt.currentTarget.value)
  }

  const handleClickSkip = () => {
    setCount((prev) => prev + 1)
    setCorrect(false)
    setWrong(false)
    setTitle('')
  }

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault()

    setCorrect(false)
    setWrong(false)

    const convertSong = currentSong.slice(14).match(/^[가-힣|a-z]+/i)
    const answer = convertSong && convertSong[0]

    if (title === answer) {
      setCorrect(true)
      setCount((prev) => prev + 1)
    } else {
      setWrong(true)
    }

    setTitle('')
  }

  useEffect(() => {
    setCurrentSong(songList[count])
  }, [count, songList])

  if (songList.length === 0) return <div className={styles.alertMessage}>카테고리를 선택해주세요.</div>
  if (count === 10) return <div className={styles.alertMessage}>종료되었습니다.</div>

  return (
    <div className={styles.container}>
      <div className={styles.topInnerContainer}>
        <div className={styles.buttonWrapper}>
          <h2 className={styles.countMessage}>남은 노래: {10 - count} / 10</h2>
          <button type='button' onClick={handleClickSkip}>
            Skip
          </button>
        </div>
        <audio controls autoPlay src={currentSong} controlsList='nodownload'>
          <track default kind='captions' srcLang='ko' />
        </audio>
      </div>

      <div className={styles.bottomInnerContainer}>
        <form onSubmit={handleSubmit}>
          <input type='text' id='title' placeholder='제목' value={title} onChange={handleChangeTitle} />
          <button type='submit'>입력</button>
        </form>
        <div className={styles.bottomMessage}>
          {correct && <div>정답입니다.</div>}
          {wrong && <div>오답입니다 (띄어쓰기 없이 한글로만 입력)</div>}
        </div>
      </div>
    </div>
  )
}

export default Quiz

import { MouseEvent } from 'react'
import { useSetRecoilState } from 'recoil'

import { countState, correctState, wrongState } from '../recoil/music'

import styles from './card.module.scss'

interface Props {
  categoryTitle: string
  image: string
  setCategory: (category: string) => void
}

const Card = ({ categoryTitle, image, setCategory }: Props) => {
  const setCount = useSetRecoilState(countState)
  const setCorrect = useSetRecoilState(correctState)
  const setWrong = useSetRecoilState(wrongState)

  const handleClickButton = (evt: MouseEvent<HTMLButtonElement>) => {
    setCount(0)
    setCorrect(false)
    setWrong(false)

    const { title = 'title' } = evt.currentTarget.dataset
    const convertTitle = title.slice(14).match(/^i\d+/i)
    if (convertTitle) setCategory(convertTitle[0])
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.categoryTitle}>{categoryTitle}</h2>
      <button type='button' data-title={image} onClick={handleClickButton}>
        <img className={styles.image} src={image} alt='singer' />
      </button>
    </div>
  )
}

export default Card

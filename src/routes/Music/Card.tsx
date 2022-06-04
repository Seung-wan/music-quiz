import { MouseEvent } from 'react'

import styles from './card.module.scss'

interface Props {
  categoryTitle: string
  image: string
  setCategory: (category: string) => void
}

const Card = ({ categoryTitle, image, setCategory }: Props) => {
  const clickHandler = (evt: MouseEvent<HTMLButtonElement>) => {
    const { title } = evt.currentTarget.dataset
    const convertTitle = title?.slice(14).match(/^i\d+/i)
    if (convertTitle) setCategory(convertTitle[0])
  }
  return (
    <div className={styles.container}>
      <h2>{categoryTitle}</h2>
      <button type='button' data-title={image} onClick={clickHandler}>
        <img className={styles.image} src={image} alt='singer' />
      </button>
    </div>
  )
}

export default Card

import styles from './card.module.scss'
import { MouseEvent } from 'react'

interface Props {
  image: string
  setCategory: (category: string) => void
}

const Card = ({ image, setCategory }: Props) => {
  const clickHandler = (evt: MouseEvent<HTMLButtonElement>) => {
    const { title } = evt.currentTarget.dataset
    const convertTitle = title?.slice(14).match(/^i\d+/i)
    console.log(convertTitle)
    if (convertTitle) setCategory(convertTitle[0])
  }
  return (
    <button type='button' data-title={image} onClick={clickHandler}>
      <img className={styles.image} src={image} alt='singer' />
    </button>
  )
}

export default Card

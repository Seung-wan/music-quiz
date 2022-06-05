import { imageArray, yearArray } from 'utils/mp3Converter'
import Card from './Card'
import styles from './cardList.module.scss'

interface Props {
  setCategory: (category: string) => void
}

const CardList = ({ setCategory }: Props) => {
  return (
    <div className={styles.container}>
      {yearArray.map((year, index) => {
        const key = `singer-card-${index}`
        return <Card key={key} categoryTitle={year} image={imageArray[index]} setCategory={setCategory} />
      })}
    </div>
  )
}

export default CardList

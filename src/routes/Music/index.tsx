import Header from 'routes/_shared/Header'
import Card from './Card'
import styles from './music.module.scss'
import Quiz from './Quiz'
import {
  i2020,
  i2010,
  i2000,
  i1990,
  i1997,
  늦은밤너의집앞골목길에서,
  블루밍,
  시작,
  싸이코,
  아무노래,
  알로하,
  어떻게이별까지사랑하겠어널사랑하는거지,
  에잇,
  작은것들을위한시,
  흔들리는꽃들속에서네샴푸향이느껴진거야,
  너때문에미쳐,
  널붙잡을노래,
  누예삐오,
  배드걸굿걸,
  쇼크,
  시간아멈춰라,
  오,
  외톨이야,
  잔소리,
  죽어도못보내,
  나이런사람이야,
  링딩동,
  마지막인사,
  만만하니,
  슈퍼매직,
  어쩌다,
  유알맨,
  챔피언,
  체인지,
  파이어,
  나는문제없어,
  느낌만으로,
  만남,
  버스안에서,
  여름안에서,
  와,
  일과이분의일,
  잘못된만남,
  칵테일사랑,
  포이즌,
  그랬나봐,
  기대,
  내일은고백할게,
  미행,
  비가온다,
  사랑은눈꽃처럼,
  위로,
  이름에게,
  찾았다,
  취중진담,
} from 'assets'
import { useEffect, useState } from 'react'

// 2020, 2010, 2000, 1990
const s2020 = [
  늦은밤너의집앞골목길에서,
  블루밍,
  시작,
  싸이코,
  아무노래,
  알로하,
  어떻게이별까지사랑하겠어널사랑하는거지,
  에잇,
  작은것들을위한시,
  흔들리는꽃들속에서네샴푸향이느껴진거야,
]
const s2010 = [너때문에미쳐, 널붙잡을노래, 누예삐오, 배드걸굿걸, 쇼크, 시간아멈춰라, 오, 외톨이야, 잔소리, 죽어도못보내]
const s2000 = [나이런사람이야, 링딩동, 마지막인사, 만만하니, 슈퍼매직, 어쩌다, 유알맨, 챔피언, 체인지, 파이어]
const s1990 = [나는문제없어, 느낌만으로, 만남, 버스안에서, 여름안에서, 와, 일과이분의일, 잘못된만남, 칵테일사랑, 포이즌]
const s1997 = [그랬나봐, 기대, 내일은고백할게, 미행, 비가온다, 사랑은눈꽃처럼, 위로, 이름에게, 찾았다, 취중진담]

const Music = () => {
  const [category, setCategory] = useState('')
  const [songList, setSongList] = useState<string[]>([])

  useEffect(() => {
    switch (category) {
      case 'i1990':
        setSongList(s1990)
        break
      case 'i2000':
        setSongList(s2000)
        break
      case 'i2010':
        setSongList(s2010)
        break
      case 'i2020':
        setSongList(s2020)
        break
      case 'i1997':
        setSongList(s1997)
        break
      default:
        break
    }
  }, [category])

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.cardContainer}>
        <Card image={i1990} setCategory={setCategory} />
        <Card image={i2000} setCategory={setCategory} />
        <Card image={i2010} setCategory={setCategory} />
        <Card image={i2020} setCategory={setCategory} />
        <Card image={i1997} setCategory={setCategory} />
      </div>
      <Quiz songList={songList} />
    </div>
  )
}

export default Music

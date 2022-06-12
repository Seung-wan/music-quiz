import { useState, useEffect } from 'react'

import { s1990, s1997, s2000, s2010, s2020 } from 'utils/mp3Converter'

const useSongList = (category: string) => {
  const [songList, setSongList] = useState<string[]>([])

  useEffect(() => {
    switch (category) {
      case 'i2020':
        setSongList(s2020)
        break
      case 'i2010':
        setSongList(s2010)
        break
      case 'i2000':
        setSongList(s2000)
        break
      case 'i1990':
        setSongList(s1990)
        break
      case 'i1997':
        setSongList(s1997)
        break
      default:
        break
    }
  }, [category])

  return { songList }
}

export default useSongList

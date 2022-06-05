import { atom } from 'recoil'

export const countState = atom<number>({
  key: '#countState',
  default: 0,
})

export const correctState = atom<boolean>({
  key: '#correctState',
  default: false,
})
export const wrongState = atom<boolean>({
  key: '#wrongState',
  default: false,
})

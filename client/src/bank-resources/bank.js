import get from 'lodash/get'

import { th as Information } from './banks.json'

export const getImage = (bank) => {
  const color = get(Information[bank], 'color', { })
  return {
    url: `./logos/${bank}.svg`,
    bgColor: color,
  }
}

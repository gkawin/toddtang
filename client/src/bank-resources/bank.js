import get from 'lodash/get'

import { th as Information } from './banks.json'
// import OptionComponent from './OptionComponent.jsx'

export const getImage = (bank) => {
  return require(`./logos/${bank}.svg`)
}

export const getBackgroundColor = (bank) => {
  return get(Information[bank], 'color', { })
}

export const getOptions = () => {
  return [
    {
      key: '{code}',
      text: '{nice_name}',
      value: '{objectKey}',
      // as: OptionComponent('bbl')
    }
  ]
}

// [ {
//   key: 'bbl',
//   text: 'ธนาคารกรุงเทพ​ (08x-xxx-xxx-4)',
//   value: 'bbl',
//   as: asCustomComponent,
//   imageStyle: { 'foo': 'bar'}
// } ]

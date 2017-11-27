import _ from 'lodash'

import { th as Information } from './banks.json'

export const getImage = (bankAbbr) => {
  return bankAbbr ? require(`./logos/${bankAbbr}.svg`) : null
}

export const getBackgroundColor = (bankAbbr) => {
  return _.get(Information[bankAbbr], 'color', { })
}

export const getBanksAbbreviation = () => {
  return _.keys(Information)
}

export const getOptions = (asComponent) => {
  const component = asComponent || { }
  return [
    {
      key: '{code}',
      text: '{nice_name}',
      value: '{objectKey}',
      as: component.as
    }
  ]
}

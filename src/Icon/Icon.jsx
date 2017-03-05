import './Icon.styl'

import React from 'react'
import Classnames from 'classnames'
import ReactFontAwesome from 'react-fa'
import _ from 'lodash'

const propFields = [
  'name', 'size', 'rotate', 'flip', // string
  'pulse', 'inverse', 'spin' // boolean
]

export const iconClassname = (className) => Classnames('icon', className)

export const getAllIcons = () => _(document.styleSheets)
  .toArray()
  .map('cssRules')
  .map(_.toArray)
  .flatten()
  .map('selectorText')
  .compact()
  .map(selector => selector.match(/^\.fa-(.*?)::before/))
  .compact()
  .map(1)
  .sortBy()
  .value()

const Icon = (props) => (
  <ReactFontAwesome
    className={iconClassname(props.className)}
    onClick={props.onClick}
    {..._.pick(props, propFields)}
  />
)

Icon.propTypes = {
  onClick: React.PropTypes.func,
  className: React.PropTypes.string,
}

export default Icon


import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import ReactFontAwesome from 'react-fa'
import _ from 'lodash'

const propFields = [
  'name', 'size', 'rotate', 'flip', // string
  'pulse', 'inverse', 'spin' // boolean
]

export const iconClassname = (className) => classNames('icon', className)
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
  onClick: PropTypes.func,
  className: PropTypes.string,
}

export default Icon

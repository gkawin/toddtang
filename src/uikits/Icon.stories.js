import React from 'react'
import { storiesOf } from '@storybook/react'
import _ from 'lodash'

import Icon, { getAllIcons } from './Icon.jsx'
const icons = getAllIcons()

storiesOf('Icon', module)
  .add('all Icon', () => {
    return (
      <div style={{ fontFamily: 'Tahoma' }}>
        {_.map(icons, (icon, key) => (
          <div style={{ display: 'inline-block', textAlign: 'center', margin: '15px' }} >
            <div><Icon name={icon} size='2x' /></div>
            <span style={{ fontSize: '11px' }}>{icon}</span>
          </div>
        ))}
      </div>
    )
  })

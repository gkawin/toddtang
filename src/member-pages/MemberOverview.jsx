import './MemberOverview.styl'

import React from 'react'

import MemberMenu from './MemberMenu.jsx'

export default class MemberOverview extends React.Component {
  render () {
    return (
      <div className='member-overview'>
        <div className='member-overview__menu'>
          <MemberMenu />
        </div>
      </div>
    )
  }
}

MemberOverview.propTypes = {
}

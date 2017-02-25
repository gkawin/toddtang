import React from 'react'

import MemberMenu from './MemberMenu.jsx'

export default class MemberOverview extends React.Component {
  render () {
    return (
      <div className='member-page'>
        <div className='member-page__menu'>
          <MemberMenu />
        </div>
      </div>
    )
  }
}

MemberOverview.propTypes = {
}

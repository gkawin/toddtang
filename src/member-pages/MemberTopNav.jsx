import './MemberTopNav.styl'

import React from 'react'

export default class MemberTopNavMenu extends React.Component {
  render () {
    return (
      <section className='member-top-nav'>
        <div className='member-top-nav__searchable'>
          <input type='text' />
        </div>
        <img
          className='member-top-nav__avatar' src='https://tw-react-prod.s3.amazonaws.com/6728f75a-ed8b-4d23-84ac-9d62ad583212.png' />
      </section>
    )
  }
}

MemberTopNavMenu.propTypes = {
}

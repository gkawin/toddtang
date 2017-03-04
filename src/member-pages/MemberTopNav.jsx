import './MemberTopNav.styl'

import React, { PropTypes } from 'react'

import MemberTopNavMenu from './MemberTopNavMenu.jsx'

export default class MemberTopNav extends React.Component {

  render () {
    return (
      <section className='member-top-nav'>
        <div className='member-top-nav__left'>
          <MemberTopNavMenu
            className='member-top-nav__menu'
            menus={this.props.menus}
          />
        </div>
        <div className='member-top-nav__right'>
          <img
            className='member-top-nav__avatar' src='https://tw-react-prod.s3.amazonaws.com/6728f75a-ed8b-4d23-84ac-9d62ad583212.png'
          />
        </div>
      </section>
    )
  }
}

MemberTopNav.propTypes = {
  menus: PropTypes.array.isRequired
}

import React, { PropTypes } from 'react'

import MemberTopNav from '../../member-pages/MemberTopNav.jsx'

export default class MemberTopNavContainer extends React.Component {
  getMenuList () {
    return [
      { text: 'แทงหวย', target: 'bet' },
      { divider: true },
      { text: 'ดูโพย', target: 'betlist' },
      { divider: true },
      { text: 'ตรวจผลรางวัล', target: 'check' },
      { divider: true },
      { text: 'ฝาก-ถอน', target: 'deposit' },
      { divider: true },
    ]
  }

  render () {
    return (
      <MemberTopNav
        menus={this.getMenuList()}
      />
    )
  }
}

MemberTopNavContainer.propTypes = {
  routeParams: PropTypes.object,
}

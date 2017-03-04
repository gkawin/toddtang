import React, { PropTypes } from 'react'

import MemberTopNav from '../../member-pages/MemberTopNav.jsx'
import { geturl } from '../../route/Route'

export default class MemberTopNavContainer extends React.Component {
  getMenuList () {
    return [
      { text: 'แทงหวย', target: geturl('bet') },
      { text: 'ดูโพย', target: geturl('betlist') },
      { text: 'ตรวจผลรางวัล', target: geturl('check') },
      { text: 'ฝาก-ถอน', target: geturl('deposit') },
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

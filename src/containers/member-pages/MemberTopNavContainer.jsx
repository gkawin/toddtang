import React, { PropTypes } from 'react'

import MemberTopNav from '../../member-pages/MemberTopNav.jsx'
import * as Member from '../../member/Member'

export default class MemberTopNavContainer extends React.Component {
  render () {
    return (
      <MemberTopNav
        menus={Member.TOP_NAV_MENUS}
      />
    )
  }
}

MemberTopNavContainer.propTypes = {
  routeParams: PropTypes.object,
}

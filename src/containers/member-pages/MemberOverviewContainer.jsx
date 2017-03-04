import React, { PropTypes } from 'react'

import MemberOverview from '../../member-pages/MemberOverview.jsx'

class MemberOverviewContainer extends React.Component {
  render () {
    return (
      <MemberOverview />
    )
  }
}

MemberOverviewContainer.propTypes = {
  params: PropTypes.shape({
    userId: PropTypes.string,
  })
}

export default MemberOverviewContainer

import React from 'react'

import Layout from './Layout.jsx'

class MemberLayout extends React.Component {
  render () {
    const { top, children } = this.props
    return (
      <Layout top={top}>
        {children}
      </Layout>
    )
  }
}

MemberLayout.propTypes = {
  children: React.PropTypes.node,
  top: React.PropTypes.node
}

export default MemberLayout

import React from 'react'

import Layout from './Layout.jsx'

class MemberLayout extends React.Component {
  render () {
    const { top, left, children } = this.props
    return (
      <Layout top={top}>
        <div className='member-layout__left'>{left}</div>
        <div className='member-layout__overview'>{children}</div>
      </Layout>
    )
  }
}

MemberLayout.propTypes = {
  children: React.PropTypes.node,
  left: React.PropTypes.node,
  top: React.PropTypes.node
}

export default MemberLayout

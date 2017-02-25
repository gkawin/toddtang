import React from 'react'

import Layout from './Layout.jsx'

class UserLayout extends React.Component {
  render () {
    return (
      <Layout>
        <div className='user-layout'>
          {this.props.children}
        </div>
      </Layout>
    )
  }
}

UserLayout.propTypes = {
  children: React.PropTypes.node
}

export default UserLayout

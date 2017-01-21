
import React from 'react'

import Layout from './layout/Layout.jsx'
import TopNav from './top-nav/TopNav.jsx'

const App = React.createClass({
  propTypes: {
    children: React.PropTypes.node.isRequired
  },

  render () {
    return (
      <Layout
        top={(<div className='app__top-nav'><TopNav /></div>)}
        bottom={<div style={{ background: 'red' }}>FOOTER</div>}
      >
        {this.props.children}
      </Layout>
    )
  }
})

export default App

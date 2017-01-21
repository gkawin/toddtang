
import React from 'react'

import Layout from './layout/Layout.jsx'
import TopNav from './top-nav/TopNav.jsx'

const App = React.createClass({
  render () {
    return (
      <Layout
        top={(<div className='app__top-nav'><TopNav /></div>)}
        bottom={<div style={{ background: 'red' }}>FOOTER</div>}
      >
        <div style={{ fontSize: 640 }}>MAIN CONTENT</div>
      </Layout>
    )
  }
})

export default App

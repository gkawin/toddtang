
import React from 'react'

import Layout from './components/layout/Layout.jsx'
import TopNav from './components/top-nav/TopNav.jsx'

export default class App extends React.PureComponent {
  renderTopNav () {
    return (
      <div className='app__top-nav'>
        <TopNav />
      </div>
    )
  }

  render () {
    return (
      <Layout
        top={this.renderTopNav()}
        bottom={<div style={{ background: 'red' }}>FOOTER</div>}
      >
        <div style={{ fontSize: 640 }}>MAIN CONTENT</div>
      </Layout>
    )
  }
}

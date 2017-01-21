
import React from 'react'

import Layout from './components/layout/Layout.jsx'

const App = React.createClass({
  render () {
    return (
      <Layout
        top={<div style={{ background: 'green' }}>HEADER</div>}
        bottom={<div style={{ background: 'red' }}>FOOTER</div>}
      >
        <div style={{ fontSize: 640 }}>MAIN CONTENT</div>
      </Layout>
    )
  }
})

export default App

import React from 'react'
import ReactDOMServer from 'react-dom/server'
import App from './App.jsx'

exports.prerender = function () {
  return ReactDOMServer.renderToString(<App />)
}
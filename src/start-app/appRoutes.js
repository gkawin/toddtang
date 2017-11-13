// temporary
import React from 'react'
export default [
  {
    path: '/lotto',
    component: (props) => {
      return (<div>Lotto</div>)
    },
    routes: [
      { path: '/bet' }
    ]
  },

  // {
  //   path: '/transaction',
  //   component: (props) => {
  //     return (<div>transaction</div>)
  //   },
  //   routes: [
  //     { path: '/deposit' },
  //     { path: '/withdraw' },
  //   ]
  // },
  // {
  //   path: '/profile',
  // },
]

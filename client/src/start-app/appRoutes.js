import AccountPanel from '../account-profile/AccountPanel.jsx'

export default [
  {
    path: '/account',
    component: AccountPanel,
    routes: [
      {
        path: '/profile'
      }
    ]
  },
]

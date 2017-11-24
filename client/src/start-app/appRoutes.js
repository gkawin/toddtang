import AccountProfileContainer from '../containers/account-profile/AccountProfileContainer.jsx'

export default [
  {
    path: '/account',
    component: AccountProfileContainer,
    routes: [
      {
        path: '/profile'
      }
    ]
  },
]

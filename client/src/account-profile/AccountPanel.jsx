import React from 'react'
import { Accordion } from 'semantic-ui-react'

import EmailSetting from './EmailSetting.jsx'

class AccountPanel extends React.PureComponent {
  state = { activeIndex: 0 }
  handleClick = (e, { index }) => {
    e.preventDefault()
    this.setState({ activeIndex: index })
  }
  render () {
    const { activeIndex } = this.state
    return (
      <div className='account-panel'>
        <Accordion fluid styled>
          <div>
            <Accordion.Title
              active={activeIndex === 0}
              content='Email'
              index={0}
              onClick={this.handleClick}
            />
            <Accordion.Content active={activeIndex === 0}>
              <EmailSetting />
            </Accordion.Content>
          </div>

          <div>
            <Accordion.Title
              active={activeIndex === 1}
              content='Password'
              index={1}
              onClick={this.handleClick}
            />
            <Accordion.Content active={activeIndex === 1} content={(<div>dadadad</div>)} />
          </div>
        </Accordion>
        {/* <div className='account-profile__email'>change email form</div>
        <div className='account-profile__password'>change password form</div>
        <div className='account-profile__bank-account'>change bank account form</div>
        <div className='account-profile__notification'>notification</div> */}
      </div>
    )
  }
}

export default AccountPanel

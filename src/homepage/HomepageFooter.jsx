import React from 'react'
import PropTypes from 'prop-types'
import { Segment, Container, Grid, Header, List } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class HomepageFooter extends React.Component {
  static propTypes = {
    className: PropTypes.string,
  }
  render () {
    return (
      <Segment inverted vertical className={this.props.className}>
        <Container>
          <Grid inverted stackable divided>
            <Grid.Row>
              <Grid.Column width={4}>
                <Header inverted as='h4' content='Todd Teng Community' />
                <List inverted link>
                  <List.Item as={Link} to='/about-us'>เกี่ยวกับเรา</List.Item>
                  <List.Item as={Link} to='/blogs'>บล๊อก/บทความ</List.Item>
                  <List.Item as={Link} to='/condition'>เงื่อนไขการให้บริการ</List.Item>
                  <List.Item as={Link} to='/privacy'>นโยบายความเป็นส่วนตัว</List.Item>
                  <List.Item as={Link} to='/protected'>การให้ความคุ้มครองลูกค้า</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header inverted as='h4' content='บริการ' />
                <List inverted link >
                  <List.Item as={Link} to='/register'>สมัครสมาชิก</List.Item>
                  <List.Item as={Link} to='/howto'>วิธีการเล่น</List.Item>
                  <List.Item as={Link} to='/feedback'>แนะนำบริการ</List.Item>
                  <List.Item as={Link} to='/customer-relation'>ลูกค้าสัมพันธ์</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={8}>
                <Header as='h4' inverted >Footer Header</Header>
                <p>Extra space for a call to action inside the footer that could help re-engage users.</p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    )
  }
}

export default (HomepageFooter)

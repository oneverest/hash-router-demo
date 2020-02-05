import React, { Component } from 'react'
import { Grid, Menu } from 'semantic-ui-react'
import { Link, Route } from './react-router-dom'
import UserList from './UserList'
import UserAdd from './UserAdd'
import UserDetail from './UserDetail'

export class User extends Component {

  render() {
    const {match} = this.props;
    // console.log('match', match);

    return ( 
      <div>
        <Grid columns={12} >
          <Grid.Column width={2}>
            <Menu vertical secondary>
              <Menu.Item to={`${match.url}/list`} as={Link}>用户列表</Menu.Item>
              <Menu.Item to={`${match.url}/add`} as={Link}>用户添加</Menu.Item>
            </Menu>
          </Grid.Column>
          <Grid.Column width={10}>
            <Route path={`${match.url}/list`} component={UserList} />
            <Route path={`${match.url}/add`} component={UserAdd} />
            <Route path={`${match.url}/detail/:id`} component={UserDetail} />
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default User

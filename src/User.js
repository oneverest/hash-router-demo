import React, { Component } from 'react'
import { Grid, Menu } from 'semantic-ui-react'
import { Link, Route } from './react-router-dom'
import UserList from './UserList'
import UserAdd from './UserAdd'
import UserDetail from './UserDetail'

export class User extends Component {

  render() {
    return ( 
      <div>
        <Grid columns={12} >
          <Grid.Column width={2}>
            <Menu vertical secondary>
              <Menu.Item to="/user/list" as={Link}>用户列表</Menu.Item>
              <Menu.Item to="/user/add" as={Link}>用户添加</Menu.Item>
            </Menu>
          </Grid.Column>
          <Grid.Column width={10}>
            <Route path="/user/list" component={UserList} />
            <Route path="/user/add" component={UserAdd} />
            <Route path="/user/detail/:id" component={UserDetail} />
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default User

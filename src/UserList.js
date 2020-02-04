import React, { Component } from 'react'
import { List } from 'semantic-ui-react'
import { Link } from './react-router-dom'

export class UserList extends Component {
  render() {
    return (
      <div>
        <List>
          <List.Item to="/user/detail/1" as={Link}>用户 1</List.Item>
          <List.Item to="/user/detail/2" as={Link}>用户 2</List.Item>
          <List.Item to="/user/detail/3" as={Link}>用户 3</List.Item>
        </List>
      </div>
    )
  }
}

export default UserList

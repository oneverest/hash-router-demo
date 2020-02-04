import React, { Component } from 'react'

export class UserDetail extends Component {
  render() {
    return (
      <div>
        用户 {this.props.match.params.id}
      </div>
    )
  }
}

export default UserDetail

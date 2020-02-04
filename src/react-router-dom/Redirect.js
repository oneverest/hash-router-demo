import React, { Component } from 'react'
import { Consumer } from './context'

export class Redirect extends Component {
  render() {
    return (
      <Consumer>
        {(state) => {
          state.history.push(this.props.to);
          return null;
        }}
      </Consumer>
    )
  }
}

export default Redirect

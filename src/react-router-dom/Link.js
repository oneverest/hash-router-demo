import React, { Component } from 'react'
import { Consumer } from './context'

export class Link extends Component {
  render() {
    return (
      <Consumer>
        {(state) => {
          return <a className={this.props.className} onClick={() => {
            state.history.push(this.props.to);
          }}>{this.props.children}</a>
        }}
      </Consumer>
    )
  }
}

export default Link

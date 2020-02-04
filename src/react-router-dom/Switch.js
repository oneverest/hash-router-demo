import React, { Component } from 'react'
import { Consumer } from './context'
import { pathToRegexp } from 'path-to-regexp';

export class Switch extends Component {
  render() {
    return (
      <Consumer>
        {state => {
          const pathname = state.location.pathname;

          const children = this.props.children;
          for (const child of children) {
            const path = child.props.path || '';
            const reg = pathToRegexp(path, [], {end: false});
            if (reg.test(pathname)) {
              return child;
            }
          }

          return null;
        }}
      </Consumer>
    )
  }
}

export default Switch

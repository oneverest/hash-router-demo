import React, { Component } from 'react'
import { Consumer } from './context'
import { pathToRegexp } from 'path-to-regexp';

export class Route extends Component {
  render() {
    return (
      <Consumer>
        {(state) => {
          let {path, component: Component, exact = false} = this.props;
          let pathname = state.location.pathname;
          let keys = [];
          let reg = pathToRegexp(path, keys, {end: !!exact});
          keys = keys.map(item => item.name);
          let result = pathname.match(reg);
          const [url, ...values] = result || [];

          const props = {
            ...state,
            match: {
              isExact: !!exact,
              path: path,
              url,
              params: keys.reduce((obj, current, idx) => {
                obj[current] = values[idx];
                return obj;
              }, {}),
            },
          };

          if (result) {
            return <Component {...props} />;
          }
          return null;
        }}
      </Consumer>
    )
  }
}

export default Route

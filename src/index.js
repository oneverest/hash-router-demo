import React, { Component } from 'react';
import {render} from 'react-dom';
import {HashRouter as Router, Route, Link, Redirect, Switch} from './react-router-dom';
import Home from './Home';
import Profile from './Profile';
import User from './User';
import { Menu, Segment, Header, Container, Icon } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Segment inverted vertical>
          <Container>
            <Menu inverted>
              <Menu.Item to="/home" as={Link} icon>
                <Header inverted icon>
                  <Icon name="closed captioning" size="huge" />
                  珠峰公开课
                </Header>
              </Menu.Item>
              <Menu.Menu widths={3} position="right">
                <Menu.Item to="/home" as={Link}>
                  <Icon name="home" />
                  首页
                </Menu.Item>
                <Menu.Item to="/profile" as={Link}>
                  <Icon name="user" />
                  个人中心
                </Menu.Item>
                <Menu.Item to="/user" as={Link}>
                  <Icon name="group" />
                  用户
                </Menu.Item>
              </Menu.Menu>
            </Menu>
          </Container>
        </Segment>
        <Segment vertical textAlign="center">
          <Switch>
            <Route path="/home" exact={true} component={Home}></Route>
            <Route path="/profile" component={Profile}></Route>
            <Route path="/user" component={User}></Route>
            <Redirect to="/home" />
          </Switch>
        </Segment>
      </Router>
    )
  }
}

render(<App/>, window.root);

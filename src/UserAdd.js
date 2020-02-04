import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

export class UserAdd extends Component {
  constructor() {
    super();
    this.text = React.createRef();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.text.current.value);
    this.props.history.push('/user/list');
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group>
          <Form.Field>
            <input name="用户" placeholder="输入用户" ref={this.text} />
          </Form.Field>
          <Form.Button content="提交" />
        </Form.Group>
      </Form>
    )
  }
}

export default UserAdd
  
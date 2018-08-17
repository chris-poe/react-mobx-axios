import React, { Component } from 'react';

import { Div, Form, Input, Button } from '../Layout';
import { withStore } from '../Helpers';
import styles from './styles';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: undefined,
      password: undefined,
      remember_me: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { target } = event;
    const { value, name } = target;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { store } = this.props;
    store.authStore.login(this.state);
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit} className={styles.form}>
        <Div row>
          <Input
            type="text"
            name="username"
            onChange={this.handleChange}
            placeholder="Username"
            className={styles.input}
          />
          <Input
            type="password"
            name="password"
            onChange={this.handleChange}
            placeholder="Password"
            className={styles.input}
          />
        </Div>
        <Div>
          <Button type="submit" text="login" primary rounded animate flex />
        </Div>
      </Form>
    );
  }
}

export default withStore(Login);

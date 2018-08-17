import React, { Component } from 'react';

import { Div, Form, Input, Button } from '../Layout';
import { withStore } from '../Helpers';
import styles from './styles';

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      first_name: undefined,
      last_name: undefined,
      email: undefined,
      username: undefined,
      password1: undefined,
      password2: undefined,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { store } = this.props;
    store.authStore.createUser(this.state);
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit} className={styles.form}>
        <Div row>
          <Input
            type="text"
            name="first_name"
            onChange={this.handleChange}
            placeholder="First name"
            className={styles.input}
          />
          <Input
            type="text"
            name="last_name"
            onChange={this.handleChange}
            placeholder="Last name"
            className={styles.input}
          />
        </Div>
        <Div row>
          <Input
            type="email"
            name="email"
            onChange={this.handleChange}
            placeholder="Email"
            className={styles.input}
          />
          <Input
            type="text"
            name="username"
            onChange={this.handleChange}
            placeholder="Username"
            className={styles.input}
          />
        </Div>
        <Div row>
          <Input
            type="password"
            name="password1"
            onChange={this.handleChange}
            placeholder="Password"
            className={styles.input}
          />
          <Input
            type="password"
            name="password2"
            onChange={this.handleChange}
            placeholder="Confirm password"
            className={styles.input}
          />
        </Div>
        <Div>
          <Button
            type="submit"
            text="sign up"
            disabled={false}
            primary
            rounded
            animate
            flex
          />
        </Div>
      </Form>
    );
  }
}

export default withStore(SignUp);

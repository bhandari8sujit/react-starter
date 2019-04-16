import React from 'react';
import { Form, Icon, Input, Button, Checkbox, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import Auth from '../../services/auth';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(e) {
    e.preventDefault();
    await Auth.login(this.state);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    const { email, password } = this.state;
    return (
      <Row type="flex" justify="center">
        <Col span={6}>
          <Form
            onSubmit={this.handleSubmit}
            className="login-form"
            data-test="login-form"
            style={{ textAlign: 'center' }}
          >
            <img
              style={{ maxWidth: '100px' }}
              alt="logo"
              className="logo-img"
              data-test="login-logo"
              src="https://s3.amazonaws.com/employee-portal/unilever+pics/unilever.jpg"
            />
            <Form.Item>
              <Input
                onChange={this.handleChange}
                name="email"
                value={email}
                prefix={<Icon type="user" />}
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item>
              <Input
                onChange={this.handleChange}
                name="password"
                value={password}
                prefix={
                  <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Checkbox>Remember me</Checkbox>
              <br />
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Log in
              </Button>
              <br />
              Or
              <Link to="/test">
                <p>register now!</p>
              </Link>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    );
  }
}

import React, { Component } from 'react';
import { Header, Segment, Form, Button, Container } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { handleLogin } from '../actions/auth';

class Login extends Component {
  state = { email: '', password: '' };

  handleChange = event => {
    const { id, value } = event.target;
    this.setState({ [id]: value });
  }

  handleSubmit = event => {
    event.preventDefault();
    const { dispatch, history } = this.props;
    const { email, password } = this.state;
    dispatch(handleLogin(email, password, history));
  }
  render() {
    const { email, password, redirect } = this.state;
    return (
      <div>
      <div class="secondary segment">
        <div>
          <Segment basic>
            <Container fluid style={styles.wrapper}>
            <Header as='h1' textAlign='center'>Login</Header>
            <Form onSubmit={this.handleSubmit}>
              <Form.Field>
                <label htmlFor='email'>Email</label>
                <input
                  required
                  id='email'
                  value={email}
                  placeholder='Email'
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Form.Field>
                <label htmlFor='password'>Password</label>
                <input
                  required
                  id='password'
                  value={password}
                  placeholder='Password'
                  type='password'
                  onChange={this.handleChange}
              />
              </Form.Field>
              <Segment textAlign='center' basic>
                <Button primary type='submit'>Submit</Button>
              </Segment>
            </Form>
            </Container>
          </Segment>
        </div>
          </div>
      </div>
      )     
    }
  }
  const styles = {
    wrapper: { 
        height: '100%',
        width: '120%',
        display: 'flex',
        justifyContent: 'center', 
        alignItems: 'flex-end',
        border: 'borderless',
         }
  }



export default connect()(Login);

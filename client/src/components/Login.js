/*jshint esversion: 6 */
import React, { Component } from 'react';
import { Header, Segment, Form, Button, Container } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { handleLogin } from '../actions/auth';
import {Link} from 'react-router-dom';



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
      if(/[a-z0-9]+[_a-z0-9\.-]*[a-z0-9]+@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})/.test(email)) {
        dispatch(handleLogin(email, password, history));
      } else {
        alert('This email is Invalid')
      }
    }

  render() {
    const { email, password, redirect } = this.state;
    return (
      <div>
        <div>
          <Header style={styles.blueBox} as='h1' textAlign='center'>
            Sign in
          </Header>
        </div>
        <div>
          <Form 
            onSubmit={this.handleSubmit}
            style={{backgroundColor: '#ffffff',}}
          >
            <div style={styles.formFieldBox}>
              <div>
                <Form.Field>
                  <input
                    required
                    id='email'
                    value={email}
                    placeholder='Email'
                    onChange={this.handleChange}
                    />
                </Form.Field>
              </div>
              <div>
                <Form.Field>
                  <input
                    required
                    id='password'
                    value={password}
                    placeholder='Password'
                    type='password'
                    onChange={this.handleChange}
                    />
                </Form.Field>
              </div>
            </div>
            <Segment textAlign='center' basic>
              <div>
                <Button circular fluid primary type='submit'>
                  Sign in
                </Button>
              </div>
              <div>
                <Link to={'Home'}>
                  Forgot Password? 
                </Link>
              </div>
            </Segment>
          </Form>
        </div>
      </div>
    )     
  }
}


  const styles = {
    flexContainer:{
      display: 'flex',
      flexDirection: 'column',
    },
    box: {
      width: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '20px',
      borderSize: '.5px',   
    },
    blueBox: {
      backgroundColor: '#0d6192',
      minHeight: '85px',
      borderRadius: '10px 10px 0px 0px',
      borderLeft: '', 
      borderBottom: '',
      top: 0,
      left: 0,
      paddingTop: '3vh',
      paddingBottom: '3vh',
      color: '#ffffff',
      margin:0,
    },
    formFieldBox: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: '5px',
      paddingBottom: '5px',
    },
    button: {
      width: '50%',
      justifyContent: 'center',
      alignItems: 'center',
    }
  }



export default connect()(Login);

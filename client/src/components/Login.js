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

  setError = (fieldName, error) => {
    const update = {};
    update[fieldName+"Error"] = error;
    this.setState(update);
  }

  validateEmail = (email) => {
    const hasErrors = false;
    if (!this.validateEmail == '') {
      this.setError("email", "Please enter your email address");
      hasErrors === true;
    } else this.setError("email", null)

    if (!this.validateEmail !== /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/) {
      this.setError("email", "Please enter a valid email address");
      hasErrors === true;
    } else this.setError("email", null)
  };

  handleSubmit = event => {
    event.preventDefault();
    const { dispatch, history } = this.props;
    const { email, password } = this.state;
      if (!this.validateEmail(this.state.text_input_email)) {
        dispatch(handleLogin(email, password, history));
      } else {
        alert('This email is Invalid')
      }
    }

  render() {
    const { email, password, redirect } = this.state;
    return (
      <div style={styles.tourFlexContainer} >
      <div style={styles.header}>
        <div>
          <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
    }}>
        <div style={styles.tourBox}>
            <Container>
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
          </div>
          </div>
        </div>
          </div>
      </div>
      )     
    }
  }


  const styles = {
    tourFlexContainer:{
      display: 'flex',
      flexDirection: 'column',
    },
    tourBox: {
        height:'80vh',
        width: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '20px',
        borderSize: '.5px',
        
  }
  }



export default connect()(Login);

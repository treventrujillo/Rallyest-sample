/*jshint esversion: 6 */
import React from 'react';
import axios from 'axios';
import { setFlash } from '../actions/flash';
import { setHeaders } from '../actions/headers';

const login = user => {
  return { type: 'LOGIN', user };
};

const logout = () => {
  return { type: 'LOGOUT' };
};

export const handleLogout = () => {

  return dispatch => {
    axios.delete('/api/logins/1')
    delete sessionStorage.token
    dispatch(setFlash('Logged out successfully!', 'green'))
    window.location = '/'
  };
};

/* Creates new session access token for user */
export const handleLogin = (email, password, history) => {
  return dispatch => {

    axios.post('/api/logins', { email, password })
      .then(res => {
        const { data: user, headers } = res;
        sessionStorage.setItem('token', res.data.token)
        sessionStorage.setItem('refresh_token', res.data.refresh_token)
        dispatch(setFlash('Login Successful!', 'green'))
        dispatch(login(user));
        dispatch(setHeaders(res.headers));
        window.location = '/Feed'
      })
      .catch(res => {
        const { response: data } = res;
        dispatch(setFlash('Invalid email/password', 'red'));
      });
    }
  }

/* Verifies access token */
export const verifyToken = () => {
  return dispatch => { 
    axios.get('/api/verifytoken')
      .then(res => dispatch({ type: 'AUTHENTICATED', authenticated: res.data.authenticated }) );
  }
}
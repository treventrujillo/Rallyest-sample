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

export const registerUser = (email, password, passwordConfirmation, history) => {
  return dispatch => {
    axios.post('/api/auth', { email, password, password_confirmation: passwordConfirmation })
      .then(res => {
        const { data: { data: user }, headers } = res;
        dispatch(login(user));
        dispatch(setHeaders(headers));
        history.push('/');
      })
      .catch(res => {
        const messages =
          res.response.data.errors.full_messages.map(message =>
            <div>{message}</div>);
        const { headers } = res;
        dispatch(setFlash(messages, 'red'));
        dispatch(setHeaders(headers));
      });
  };
};

export const handleLogout = history => {
  return dispatch => {
    axios.delete('/api/auth/sign_out')
      .then(res => {
        const { headers } = res;
        dispatch(logout());
        dispatch(setFlash('Logged out successfully!', 'green'));
        dispatch(setHeaders(headers));
        history.push('/login');
      })
      .catch(res => {
        const messages =
          res.response.data.errors.map(message =>
            <div>{message}</div>);
        const { headers } = res;
        dispatch(setFlash(messages, 'red'));
        dispatch(setHeaders(headers));
      });
  };
};

export const handleLogin = (email, password, history) => {
  return dispatch => {

    axios.post('/api/logins', { email, password })
      .then(res => {
        const { data: { data: user }, headers } = res;
        dispatch(login(user));
        dispatch(setHeaders(res.headers));
        dispatch(setFlash('Login Successful!', 'green'))
        history.push('/');
      })
      .catch(res => {
        const { response } = res;
        const messages = response.request.statusText + ", " + response.request.status
        const { headers } = res;
        dispatch(setFlash(messages, 'red'));
        dispatch(setHeaders(headers));
      });
/*
    axios.post('/api/logins/create', { email, password })
      .then(res => {
        const { data: { data: user }, headers } = res;
        dispatch(login(user));
        dispatch(setHeaders(headers));
        history.push('/');
      })
      .catch(res => {
        const messages =
          res.response.data.errors.map(message =>
            <div>{message}</div>);
        const { headers } = res;
        dispatch(setFlash(messages, 'red'));
        dispatch(setHeaders(headers));
      });
      */

  };
};

// export const validateToken = (callBack = () => {}) => {
//   return dispatch => {
//     dispatch({ type: 'VALIDATE_TOKEN' });
//     const headers = axios.defaults.headers.common;
//     axios.get('/api/auth/validate_token', headers)
//       .then(res => {
//         const user = res.data.data;
//         dispatch(login(user));
//         dispatch(setHeaders(res.headers));
//       })
//       .catch(() => callBack());
//   };
// };

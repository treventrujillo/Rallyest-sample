/*jshint esversion: 6 */
import React, { Component} from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setFlash } from '../actions/flash';

const AuthRoute = ({ isAuthenticated, component: Component, ...rest }) => {

  this.flash = () => {
    const { dispatch } = this.props;
    dispatch(setFlash('Sign-in to continue', 'red'));
  }

  return(
    <Route
      {...rest}
      render={props => (
        isAuthenticated === true
          ? (<Component {...props} />)
          : (
            <Redirect
              to={{
                pathname: '/',
                state: { from: props.location }
              }}
            />)
      )}
    />
  );
}

const checkAuth = () => {
  if (sessionStorage.getItem('token')) {
    console.log('true')
    return true;
  } else {
    console.log('false')
    return false;
  }
}

const mapStateToProps = state => {
  return { isAuthenticated: checkAuth() };
};

export default connect(mapStateToProps)(AuthRoute);

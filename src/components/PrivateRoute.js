import React from 'react';
import { Route, Redirect,withRouter } from 'react-router-dom';

 export const PrivateRoute = ({ component: Component, isAuthonticated,...rest }) => (
   
    <Route {...rest} render={props => (
      sessionStorage.getItem('token')
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    )} />
)
 

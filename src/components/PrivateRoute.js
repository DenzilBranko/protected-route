import React from 'react';
import { Route, Redirect,withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

  export const PrivateRoute = ({ component: Component,auth,...rest }) => {
    console.log('Redirect component');  
    return (
   
    <Route {...rest} render={props => (
      
      sessionStorage.getItem('token')
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    )} />
  );
}
 




//export default withRouter(connect(mapStateToProps,null,null, {pure: false})(PrivateRoute));

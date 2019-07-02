import React,{Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch,
  withRouter
} from 'react-router-dom';
import { connect } from 'react-redux';
import Login from '../containers/Login';
import DashBoard from '../containers/Dashboard';
import  { PrivateRoute }  from '../components/PrivateRoute';
let auth;

class  Routes extends Component {
    constructor(props) {
        super(props)
        this.state = {
            auth: false
        }
    }
    
    componentWillReceiveProps(nextprops) {
        this.setState({
            auth: nextprops.auth_datail.details.auth
        })
      
    }
 
    render() {
     let { auth } = this.state
       
       return(
          
        <Router>
            
            <Switch>
                <PrivateRoute exact path='/' component={DashBoard} isAuth = {auth} />
                <Route exact path="/login" component={Login}/>
                
            </Switch>
        </Router>
        )
    }
    
}

function mapStateToprops(state) {
   
    return {
        auth_datail: state.authontications,
    }
}
export default connect(mapStateToprops,null)(Routes)
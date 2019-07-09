import React,{Component} from 'react';
import {
   
  Router,
  Route,
  Link,
  Redirect,
  Switch,
  withRouter
} from 'react-router-dom';
import { connect } from 'react-redux';
import Login from '../containers/Login';
import  history from '../helper/history'
import DashBoard from '../containers/Dashboard';
import  {PrivateRoute }  from '../components/PrivateRoute';


class  Routes extends Component {
    constructor(props) {
        super(props)
        this.state = {
            auth: false, details: {}
        }
    }

    // componentWillReceiveProps(nextProps) {
    //     if(typeof(nextProps.auth_datail.details.auth)!==undefined) {
    //         this.props.history.push("/user");
    //         this.setState({
    //             auth: nextProps.auth_datail.details.auth
    //         })
    //     }
    //  }
    render() {
     let { auth, details } =  this.props
    
       return(
    
    <Router history={history} >
                <Switch>           
                    <Route  path="/login" component={Login}/>
                    <PrivateRoute exact path='/' component={DashBoard}  />
                </Switch>
             </Router>
        )
    }
    
}

function mapStateToProps(state) {
   console.log(state)
    return {
        auth: state.authontications,
        details: state.authontications.details
    }
}


export default connect(mapStateToProps)(Routes);
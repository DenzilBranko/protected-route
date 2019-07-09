import React, {Component} from 'react';
import { connect } from 'react-redux'
import {
   
    withRouter
  } from 'react-router-dom';
import { bindActionCreators } from 'redux'
import { userLogin } from '../actions'



class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email :"",
            password :""
        }
    }

   
    handleNameChange =(e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit= (e) => {
        e.preventDefault()
        let data = {
            email : this.state.email,
            password : this.state.password
        }
       
        this.props.userLogin(data)
   
    }
    render() {
       return(
            <div>
                 <form onSubmit={this.handleSubmit}>
                    <span>
                        <label> Email   :</label>
                        <input name='email' value={this.state.email} onChange={e => this.handleNameChange(e)}/>
                        <br/>
                        <br/>
                    </span> 
                    <span>
                        <label> Password   :</label>
                        <input name='password' value={this.state.pass} onChange={ e => this.handleNameChange( e ) } />
                        <br/>
                        <br/>
                    </span> 
                    <input type="submit" value="submit"/>
                </form>    
                
            </div>

        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({userLogin},dispatch)
}

export default withRouter( connect(null,mapDispatchToProps)(Login))
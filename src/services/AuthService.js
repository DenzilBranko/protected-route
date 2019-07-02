import React,{ Component } from 'react'
import axios from 'axios';
import JWT from 'jsonwebtoken'
const url = "http://localhost:5000/"
export default class AuthService {
    constructor(props) {
        this.login = this.login.bind(this)
    }

    login(username, password) {
        let postData = {
            email : username,
            password : password,
        }
       return axios.post(`/api/login`,postData)
        .then((res) => {
           
            if(this.checkStatus(res.status)) {
               this.setToken(res.data.token);
            }
         })
    }

    loggedIn() {
        // Checks if there is a saved token and it's still valid
        const token = this.getToken() // GEtting token from localstorage
        return !!token && !this.isTokenExpired(token) // handwaiving here
    }

    isTokenExpired(token) {
        try {
            const decoded = JWT.decode(token);
          
            if (decoded.exp <  new Date().getTime() / 1000) { // Checking if token is expired. N
                return true;
            } else {
                return false;
            }
        }
        catch (err) {
            return false;
        }
    }

    setToken(idToken) {
        // Saves user token to localStorage
        sessionStorage.setItem('id_token', idToken)
    }

    getToken() {
        // Retrieves the user token from localStorage
        return sessionStorage.getItem('id_token')
        
    }

    logout() {
        // Clear user token and profile data from localStorage
        localStorage.removeItem('id_token');
        return true;
    }

   checkStatus = (response)=> {
      
        if(response >= 200 && response<=300) {
            return true;
        } else {
            return false;
        }
    }
}
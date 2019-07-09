import Axios from "axios";
import history from '../helper/history'
const ROOT_URL='http://localhost:5000'
export function userLogin(data) {
   return async(dispatch) => {
         Axios.post(`${ROOT_URL}/api/signup/sign-in`,{data})
         .then(res=>{
            dispatch({
                type: 'AUTH_DATA',
                payload: res.data,
               
            });
            sessionStorage.setItem('token',res.data.token)
            history.push('/')
         })
    }
}

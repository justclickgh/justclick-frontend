import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS,LOGIN_RESET } from "./types/login_types"
import axios from 'axios';
import { loginPath } from "../../utils/network_utils/endpoints";
export const loginRequest = ()=>{
    return {
        type:LOGIN_REQUEST
    }
}

export const loginSuccess = ()=>{
    return {
        type:LOGIN_SUCCESS,
    

    }
}

export const loginFailure = (error)=>{
    return{
        type:LOGIN_FAILURE,
        payload:error
    }
}

export const reset = ()=>{
    return {
        type :LOGIN_RESET
    }
}


export const login = (data)=>dispatch=>{
    const config = {
        headers : {
            "Content-Type":'application/json'
        }
    }
    dispatch(loginRequest())
    axios.post(loginPath,data,config).then(res=>{
        console.log(res.data.user.user);
        localStorage.setItem('authToken', JSON.stringify(res.data.user.token))
        localStorage.setItem('loggedIn',JSON.stringify(true))
        localStorage.setItem('userData',JSON.stringify(res.data.user.user))
        dispatch(loginSuccess())
        dispatch(reset())
    }).catch(err=>{
        if(err.response){
            if(err.response.status === 400){
                console.log(err.response);
                dispatch(loginFailure("Login failed! Invalid credentials"))

            }if(err.response.status === 401){
                console.log(err.response.data.non_field_errors[0]);
                dispatch(loginFailure(err.response.data.non_field_errors[0]))
            }
        }
        else if(err.request){
            console.log(err.request);
            dispatch(loginFailure("Network error. Chack internet connection and try again"))
        }
        dispatch(reset())

    })

}


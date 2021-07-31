import axios from 'axios';
import getAuthToken from '../../utils/get_auth_token';
import { curUserPath } from '../../utils/network_utils/endpoints';
import { GET_CURENT_USER_REQUEST, GET_CURENT_USER_SUCCESS, GET_CURENT_USER_FAILURE } from "./types/curent_user_types"

const curUserRequest = ()=>{
    return {
        type:GET_CURENT_USER_REQUEST
    }
}

const curUserSuccess = ( user)=>{
    return{
        type:GET_CURENT_USER_SUCCESS,
        payload:user
    }
}

const curUserFailure = (error)=>{
    return{
        type:GET_CURENT_USER_FAILURE,
        payload:error
    }
}


export const getCurrentUser = ()=>dispatch=>{
    
    dispatch(curUserRequest())
    const token = getAuthToken()
    if(token !== null){
        const config = {
            headers : {
                "Content-Type":'application/json',
                'Authorization':`Bearer ${token}`
            }}
    

    axios.get(curUserPath,config).then(res=>{
        console.log(res.data);
        dispatch(curUserSuccess(res.data))
        localStorage.setItem('userData',JSON.stringify(res.data))
    }).catch(err=>{
        if(err.response){
            console.log(err.response);
            dispatch(curUserFailure(err.response.data))

        }else if(err.request){
            console.log(err.request);
            dispatch(curUserFailure("Network error! Please check internet connection and reload page"))
        }
    })}else{
        dispatch(curUserFailure("You are logged out. Please log in"))

    }

}
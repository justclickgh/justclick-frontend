import { REGISTRATION_FAILURE, REGISTRATION_REQUEST, REGISTRATION_RESET, REGISTRATION_SUCCESS } from "./types/registration_types"
import axios from 'axios'
// import { adminRegistrationPath } from "../../utils/network_utils/endpoints"
export const registrationRequest = ()=>{
    return{
        type:REGISTRATION_REQUEST
    }
}

export const registrationSuccess = ()=>{
    return{
        type:REGISTRATION_SUCCESS
    }
}

export const registrationFailure = (error)=>{
    return{
        type:REGISTRATION_FAILURE,
        payload:error
    }
}

export const reset = ()=>{
    return{
        type:REGISTRATION_RESET
    }
}

export const register = (data = {}, path = null)=>dispatch=>{
    dispatch(registrationRequest())
    const config = {
        headers : {
            "Content-Type":'application/json'
        }
    }
    axios.post(path,data,config).then(res=>{
        dispatch(registrationSuccess())
        console.log(res.data);
        dispatch(reset())
    }).catch(err=>{
        if(err.response){
            console.log(err.response)
            if(err.response.status === 400){
                console.log(err.response);
                dispatch(registrationFailure(err.response.data))
            }
            else if(err.response.status === 500) {
                dispatch(registrationFailure({error:"Unexpected error"}))
            }
        }else if(err.request){
            console.log(err.request);
            dispatch(registrationFailure({error:"Timeout. Chack internet connection and try again"}))
        }
        
        dispatch(reset())
    })
}
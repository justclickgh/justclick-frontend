import { message } from 'antd'
import axios from 'axios'
import getAuthToken from '../../utils/get_auth_token'
import { GET_CURRENT_USER_PROFILE_FAILURE, GET_CURRENT_USER_PROFILE_REQUEST, GET_CURRENT_USER_PROFILE_SUCCESS } from "./types/cur_user_profile"
import {curUserProfilePath} from '../../utils/network_utils/endpoints'

const getProfileRequest = ()=>{
    return{
        type: GET_CURRENT_USER_PROFILE_REQUEST
    }
}

export const getProfileSuccess = profile=>{
    return {
       
            type: GET_CURRENT_USER_PROFILE_SUCCESS,
            payload: profile
        
    }
}


const getProfileFailure = ()=>{
    return {
        type: GET_CURRENT_USER_PROFILE_FAILURE
    }
}



export const getProfile = ()=>dispatch=>{
    
    dispatch( getProfileRequest())
    const token = getAuthToken()
    if(token !== null){
        const config = {
            headers : {
                'Authorization':`Bearer ${token}`
            }
        }
        
        axios.get(curUserProfilePath,config).then(res=>{
            dispatch(getProfileSuccess(res.data))
            console.log(res.data)
        }).catch(err=>{
            // console.log(err);
            if (err.response){
                message.error(err.response.data.detail)
            }else if(err.request){
                message.error("Network error")
            }
            else{
                console.log(err);
            message.error("Error")

            }
            dispatch(getProfileFailure())
        })
        }else{
            message.error("Session exprired")
        }
}


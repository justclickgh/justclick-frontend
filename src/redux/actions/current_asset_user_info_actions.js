import { message } from 'antd'
import axios from 'axios'
import getAuthToken from '../../utils/get_auth_token'
import { currentOwnerUploads } from '../../utils/network_utils/endpoints'

import { FETCH_CURRENT_ASSET_USER_EARNING_FAILURE, FETCH_CURRENT_ASSET_USER_EARNING_REQUEST, FETCH_CURRENT_ASSET_USER_EARNING_SUCCESS, POST_CURRENT_USER_ASSET_FAILURE, POST_CURRENT_USER_ASSET_REQUEST } from "./types/cur_asset_owner_info"

const fetch_cur_asset_user_request = ()=>{
    return {
        type:FETCH_CURRENT_ASSET_USER_EARNING_REQUEST
    }
}

const fetch_cur_asset_user_success = earnings=>{
    return {
        type:FETCH_CURRENT_ASSET_USER_EARNING_SUCCESS,
        payload:earnings
    }
}


const fetch_cur_asset_user_failure = ()=>{
    return {
        type:FETCH_CURRENT_ASSET_USER_EARNING_FAILURE
    }
}

const post_assets_request = ()=>{
    return {
        type:POST_CURRENT_USER_ASSET_REQUEST
    }
}
// const post_assets_success = (assets)=>{
//     return {
//         type:POST_CURRENT_USER_ASSET_SUCCESS,
//         payload:assets
//     }
// }
const post_assets_failuire = (error)=>{
    return {
        type: POST_CURRENT_USER_ASSET_FAILURE,
        payload:error
    }
}

export const postAssets = (data,path)=>dispatch=>{
        const token = getAuthToken()
    if(token !== null){
        dispatch(post_assets_request())
        const config = {
            headers : {
                "Content-Type":'application/json',
                "Authorization":`Bearer ${token}`
            }
            
        }
        axios.post(path,data,config).then(res=>{
            console.log(res.data);
            dispatch(res.data.data)
        }).catch(error=>{
            if (error.response){
                if(error.response.status === 400){
                    dispatch(post_assets_failuire(error.response))
                } else{
                    dispatch(post_assets_failuire())
                    message.error(error.response.data.detail)
                }
            }
        })
    }else {
        message.error("Session expired, Login and try again")
    }
}

export const fetchCurrentUserAsset = data=>dispatch=>{
        const token = getAuthToken()
    if(token !== null){
        dispatch(fetch_cur_asset_user_request())
        const config = {
            headers : {
                "Content-Type":'application/json',
                "Authorization":`Bearer ${token}`
            }
            
        }
        axios.get(currentOwnerUploads,config).then(res=>{
            console.log(res.data)
            dispatch(fetch_cur_asset_user_success(res.data.data))
        }).catch(error=>{
            if(error.response){
                dispatch(fetch_cur_asset_user_failure())
                message.error(error.response.data.detail)
            } else if(error.request){
                message.error("Network error")
            }
        })
    }else{
        message.error("Session expired, Login and try again")
    }
}
import { message } from 'antd'
import axios from 'axios'
import getAuthToken from '../../utils/get_auth_token'
import { assetsPath } from '../../utils/network_utils/endpoints'
import {GET_ALL_ASSETS_REQUEST,GET_ALL_ASSETS_SUCCESS,GET_ALL_ASSETS_FAILURE} from './types/assets_types'

const getAllAssetsRequest = ()=>{
    return {
        type:GET_ALL_ASSETS_REQUEST
    }
}
const getAllAssetsSuccess =  (assets)=>{
    return {
        type:GET_ALL_ASSETS_SUCCESS,
        payload:assets
    }
}

const getAllAssetsFailure = ()=>{
    return{
         TYPE: GET_ALL_ASSETS_FAILURE

    }
}

export const fetchAllAssets = ()=>dispatch =>{
    const token = getAuthToken()
    if(token !== null){
        dispatch(getAllAssetsRequest())
        // const config = {
        //     headers : {
        //         "Content-Type":'application/json',
        //         "Authorization":`Bearer ${token}`
        //     }
        // }
    axios.get(assetsPath).then(res=>{
        console.log(res.data);
        dispatch(getAllAssetsSuccess(res.data.data))
    }).catch(error=>{
        dispatch(getAllAssetsFailure())
        if (error.response){
            message.error(error.response.data.detail)
        } else if (error.request){
            message.error("Network error, check internet connection and try again")
        }
    })



}else{
    message.error("Session expired,please login")
}
}
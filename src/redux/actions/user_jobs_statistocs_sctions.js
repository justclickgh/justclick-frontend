import axios from 'axios'
import {message} from 'antd'

import { USER_JOB_STATISTICS_FAILURE, USER_JOB_STATISTICS_REQUEST, USER_JOB_STATISTICS_SUCCESS } from "./types/user_job_stats_types"
import { jobstatisticsPath } from '../../utils/network_utils/endpoints'
import getAuthToken from '../../utils/get_auth_token'

export const userJobStatisticsRequest = ()=>{
    return {
        type:USER_JOB_STATISTICS_REQUEST
    }
}

export const userJobStatisticsSuccess = (statistics)=>{
    return {
        type:USER_JOB_STATISTICS_SUCCESS,
        payload:statistics
    

    }
}

export const userJobStatisticsFailure = (error)=>{
    return{
        type:USER_JOB_STATISTICS_FAILURE,
        payload:error
    }
}





export const fetchJobStatistics= ()=>dispatch=>{
    const token = getAuthToken()
    if(token !== null){
        dispatch(userJobStatisticsRequest())
        const config = {
            headers : {
                "Content-Type":'application/json',
                "Authorization":`Bearer ${token}`
            }
        }
    axios.get(jobstatisticsPath,config).then(res=>{
        console.log(res.data);
        dispatch(userJobStatisticsSuccess(res.data.data))
    }).catch(error=>{
        dispatch(userJobStatisticsFailure())
        if(error.response){
            message.error(error.response.data.detail)
        } else if(error.request){
            message.error("Network Error. Check internet connection")
        }
    })
    }else{
        // dispatch(userJobStatisticsFailure())
        message.error("Session expired, PLease login again")
    }
}
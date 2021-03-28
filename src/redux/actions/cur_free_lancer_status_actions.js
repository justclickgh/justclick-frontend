import { message } from 'antd'
import axios from 'axios'
import getAuthToken from '../../utils/get_auth_token'
import { curFreelancerAppliedJobsPath,curFreelancerConfirmedApplidJobsPath, userCompletedTask } from '../../utils/network_utils/endpoints'

import { GET_ALL_APPLICATION_ACCEPTED_FAILURE, GET_ALL_APPLICATION_ACCEPTED_REQUEST, GET_ALL_APPLICATION_ACCEPTED_SUCCESS, GET_ALL_PENDING_FAILURE, GET_ALL_PENDING_REQUEST, GET_ALL_PENDING_SUCCESS } from "./types/cur_freelancer_jobs_status_types"

const getAllPendingJobApplicationsRequest = ()=>{
    return {
       type: GET_ALL_PENDING_REQUEST
    }
}
const getAllPendingJobApplicationsSuccess = (jobs_pending)=>{
    return {
       type: GET_ALL_PENDING_SUCCESS,
       payload : jobs_pending
    }
}
const getAllPendingJobApplicationsFailure = (error)=>{
    return {
       type: GET_ALL_PENDING_FAILURE,
       payload:error
    }
}






const getAllCompletedJobApplicationsRequest = ()=>{
    return {
       type: GET_ALL_PENDING_REQUEST
    }
}
const getAllCompletedJobApplicationsSuccess = jobs_completed=>{
    return {
       type: GET_ALL_PENDING_SUCCESS,
       payload : jobs_completed
    }
}

const getAllCompletedJobApplicationsFailure = (error)=>{
    return {
       type: GET_ALL_PENDING_FAILURE,
       payload:error
    }
}




const getAllAcceptedJobApplicationsRequest = ()=>{
    return {
       type: GET_ALL_APPLICATION_ACCEPTED_REQUEST
    }
}
const getAllAcceptedJobApplicationsSuccess = jobs_completed=>{
    return {
       type: GET_ALL_APPLICATION_ACCEPTED_SUCCESS,
       payload : jobs_completed
    }
}

const getAllAcceptedJobApplicationsFailure = (error)=>{
    return {
       type: GET_ALL_APPLICATION_ACCEPTED_FAILURE,
       payload:error
    }
}




 export const fetchPendingJobs = ()=>dispatch=>{
    const token = getAuthToken()
    if(token !== null){
        dispatch(getAllPendingJobApplicationsRequest())
        const config = {
            headers : {
                "Content-Type":'application/json',
                "Authorization":`Bearer ${token}`
            }
        }
    axios.get(curFreelancerAppliedJobsPath,config).then(res=>{
        console.log(res.data);
        dispatch(getAllPendingJobApplicationsSuccess(res.data.data))
    }).catch(error=>{
        dispatch(getAllPendingJobApplicationsFailure())
        if(error.response){
            message.error(error.response.data.detail)
        } else if(error.request){
            message.error("Network Error. Check internet connection")
        }
    })
    }else{
        dispatch(getAllPendingJobApplicationsFailure())
        message.error("Session expired, PLease login again")
    }
}






export const fetchAcceptedJobs= ()=>dispatch=>{
    const token = getAuthToken()
    if(token !== null){
        dispatch(getAllAcceptedJobApplicationsRequest())
        const config = {
            headers : {
                "Content-Type":'application/json',
                "Authorization":`Bearer ${token}`
            }
        }
    axios.get(curFreelancerConfirmedApplidJobsPath,config).then(res=>{
        console.log(res.data);
        dispatch(getAllAcceptedJobApplicationsSuccess(res.data.data))
    }).catch(error=>{
        dispatch(getAllAcceptedJobApplicationsFailure())
        if(error.response){
            message.error(error.response.data.detail)
        } else if(error.request){
            message.error("Network Error. Check internet connection")
        }
    })
    }else{
        dispatch(getAllAcceptedJobApplicationsFailure())
        message.error("Session expired, PLease login again")
    }
}


export const fetchCompletedJobs= ()=>dispatch=>{
    const token = getAuthToken()
    if(token !== null){
        dispatch(getAllCompletedJobApplicationsRequest())
        const config = {
            headers : {
                "Content-Type":'application/json',
                "Authorization":`Bearer ${token}`
            }
        }
    axios.get(userCompletedTask,config).then(res=>{
        console.log(res.data);
        dispatch(getAllCompletedJobApplicationsSuccess(res.data.data))
    }).catch(error=>{
        dispatch(getAllCompletedJobApplicationsFailure())
        if(error.response){
            message.error(error.response.data.detail)
        } else if(error.request){
            message.error("Network Error. Check internet connection")
        }
    })
    }else{
        dispatch(getAllCompletedJobApplicationsFailure())
        message.error("Session expired, PLease login again")
    }
}
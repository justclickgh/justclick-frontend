import { message } from 'antd';
import axios from 'axios';
import getAuthToken from '../../utils/get_auth_token';
import {appliedJobsPath, getUserJobsPath, JobDetailPath } from '../../utils/network_utils/endpoints';
import { DELETE_CURENT_USER_JOB_FAILURE, DELETE_CURENT_USER_JOB_REQUEST, DELETE_CURENT_USER_JOB_SUCCESS, FILTER_JOBS, GET_CURENT_USER_JOBS_FAILURE, GET_CURENT_USER_JOBS_PENDING_FAILURE, GET_CURENT_USER_JOBS_PENDING_REQUEST, GET_CURENT_USER_JOBS_PENDING_SUCCESS, GET_CURENT_USER_JOBS_REQUEST, GET_CURENT_USER_JOBS_SUCCESS, PAGINATE_JOBS, RESET_CURRENT_JOB_DATA, SEARCH_JOB, UPDATE_CURENT_USER_JOB_FAILURE, UPDATE_CURENT_USER_JOB_REQUEST, UPDATE_CURENT_USER_JOB_SUCCESS } from './types/current_user_jobs_types';

const curUserJobRequest = ()=>{
    return {
        type:GET_CURENT_USER_JOBS_REQUEST
    }
}

const curUserJobSuccess = ( jobs)=>{
    console.log("action creator");
    console.log(jobs);
    return{
        type:GET_CURENT_USER_JOBS_SUCCESS,
        payload:jobs
    }
}

const curUserJobFailure = (error)=>{
    return{
        type:GET_CURENT_USER_JOBS_FAILURE,
        payload:error
    }
}



export const updateCurUserJobrequest = ()=>{
    return{
        type:UPDATE_CURENT_USER_JOB_REQUEST,
    }
}

export const updateCurUserJobSuccess = (job)=>{
    return{
        type:UPDATE_CURENT_USER_JOB_SUCCESS,
        payload:job
    }
}

export const updateCurUserJobFailure = (error)=>{
    return{
        type:UPDATE_CURENT_USER_JOB_FAILURE,
        payload:error
    }
}

export const deleteCurJobUserRequest = ()=>{
    return{
        type:DELETE_CURENT_USER_JOB_REQUEST
    }
}

export const deleteCurUserJobSuccess = (job)=>{
    return{
        type:DELETE_CURENT_USER_JOB_SUCCESS,
        payload:job
    }
}

export const deleteCurUserJobFailure = (error)=>{
    return{
        type:DELETE_CURENT_USER_JOB_FAILURE,
        payload:error
    }
}

export const reset =()=>{
    return{
        type:RESET_CURRENT_JOB_DATA
    }
}

export const getPendingJobsRequest = ()=>{
    return {
        type: GET_CURENT_USER_JOBS_PENDING_REQUEST
    }
}

export const getPendingJobsSuccess = (jobs)=>{
    return{
        type:GET_CURENT_USER_JOBS_PENDING_SUCCESS,
        payload:jobs
    }
}

export const getPendingJobsFailure = (error)=>{
    return {
        type:GET_CURENT_USER_JOBS_PENDING_FAILURE,
        payload:error
    }
}





export const searchJobs = (query) =>{
    return {
        type:SEARCH_JOB,
        payload:query
    }
}

export const filterJobs = (query)=>{
    return{
        type:FILTER_JOBS,
        payload:query
    }
}

export const paginate = (page_number)=>{
    return {
        type:PAGINATE_JOBS,
        payload:page_number
    }
}



// const getCompletionRequests = ()=>{
//     return {
//         type:GET_CURENT_USER_JOBS_COMPLETE_REQUEST
//     }
// }

export const getALlCompletionRequests =()=>dispatch=>{

}

export const  getAllPendingJobs = ()=>dispatch=>{
    const token = getAuthToken()
    if(token !== null){
        console.log(token);
        dispatch(getPendingJobsRequest())
        const config = {
            headers : {
                "Content-Type":'application/json',
                "Authorization":`Bearer ${token}`
            }
        }
        axios.get(appliedJobsPath,config).then(res=>{
            console.log(res.data);
            dispatch(getPendingJobsSuccess(res.data.data))
        }).catch(error=>{
            if (error.response){
                console.log(error.response);
                dispatch(getPendingJobsFailure())
                message.error(error.response.data.detail)
            }else if (error.resquest){
                dispatch(curUserJobFailure("Network error! Please check internet connection and try referesh page"))
            }
        })
    }else{
        message.error("Action connot bbe completed because you are not logged in")    }
}


export const getCurUserJobs = ()=>dispatch=>{
    const token = getAuthToken()
    
    if(token !== null){
        console.log(token);
        dispatch(curUserJobRequest())
        const config = {
            headers : {
                "Content-Type":'application/json',
                "Authorization":`Bearer ${token}`
            }
        }
        axios.get(getUserJobsPath,config).then(res=>{
            console.log(res.data);
            console.log("Fetch succeesffull");
            dispatch(curUserJobSuccess(res.data))
            console.log("Dispatched");
            dispatch(reset())
        }).catch(err=>{
            if(err.response){
                console.log(err.response.data);
                dispatch(curUserJobFailure(err.response.data))
                // dispatch(reset())
            }else if(err.request){
                console.log(err.request);
                dispatch(curUserJobFailure("Network error! Please check internet connection and try referesh page"))
                dispatch(reset())
                
            }
            // dispatch(reset())
        })
    }else{
        message.error("Action connot bbe completed because you are not logged in")
        // dispatch(curUserJobFailure("Action connot bbe completed because you are not logged in"))
        // dispatch(reset())
    }

}


export const delteCuruserJob = (job)=>dispatch=>{
    const token = getAuthToken()
    if(token !== null){
        dispatch(deleteCurJobUserRequest())
        const config = {
            headers : {
                "Content-Type":'application/json',
                "Authorization":`Bearer ${token}`
            }
        }
        axios.delete(JobDetailPath(job.job_id),config).then(res=>{
            dispatch(deleteCurUserJobSuccess(job))
            dispatch(reset())
        }).catch(err=>{
            if(err.response){
                console.log(err.response.data);
                message.error(err.response.data)
                // dispatch(deleteCurUserJobFailure())
                // dispatch(reset())
            }else if(err.request){
                console.log(err.request);
                dispatch(deleteCurUserJobFailure("Network error! Please check internet connection and try referesh page"))
                dispatch(reset())
            }
        })
    }else{
        console.log("No token");
        dispatch(deleteCurUserJobFailure("Action connot be completed because you are not logged in"))

    }
}



export const updateJob = (job,data)=>dispatch=>{
    const token = getAuthToken()
    if(token !== null){
        dispatch(updateCurUserJobrequest())
        const config = {
            headers : {
                "Content-Type":'application/json',
                "Authorization":`Bearer ${token}`
            }
        }
        axios.patch(JobDetailPath(job.job_id),data,config).then(res=>{
            dispatch(updateCurUserJobSuccess(job))
            dispatch(reset())
        }).catch(err=>{
            if(err.response){
                console.log(err.response.data);
                dispatch(updateCurUserJobFailure(err.response.data))
                dispatch(reset())
            }else if(err.request){
                console.log(err.request);
                dispatch(updateCurUserJobFailure("Network error! Please check internet connection and try referesh page"))
                dispatch(reset())
            }
        })
    }else{
        console.log("No token");
        dispatch(updateCurUserJobFailure("Action connot be completed because you are not logged in"))

    }
}
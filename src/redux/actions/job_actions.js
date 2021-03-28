import { APPLY_JOB_FAILURE, APPLY_JOB_REQUEST, APPLY_JOB_SUCCESS, DELETE_JOB_FAILURE, DELETE_JOB_REQUEST, DELETE_JOB_SUCCESS, DISLIKE_JOB_FAILURE, DISLIKE_JOB_REQUEST, DISLIKE_JOB_SUCCESS, GET_JOB_FAILURE, GET_JOB_REQUEST, GET_JOB_SUCCESS, JOB_RESET, LIKE_JOB_FAILURE, LIKE_JOB_REQUEST, LIKE_JOB_SUCCESS, POST_JOB_FAILURE, POST_JOB_REQUEST, POST_JOB_SUCCESS, RATE_JOB_FAILURE, RATE_JOB_REQUEST, RATE_JOB_SUCCESS, UPDATE_JOB_FAILURE, UPDATE_JOB_REQUEST, UPDATE_JOB_SUCCESS } from "./types/job_types"
import axios from 'axios'
import {applyJobPath, dislikeJobPath, jobPath, likeJobPath ,ratejobPath} from "../../utils/network_utils/endpoints"
import getAuthToken from "../../utils/get_auth_token"
import { message } from "antd"

import { curUserSuccess } from "./curent_creative_user_actions"
export const getJobRequest = ()=>{
    return{
        type:GET_JOB_REQUEST
    }
}

export const getJobSuccess = (jobs)=>{
    return{
        type:GET_JOB_SUCCESS,
        payload:jobs
    }
}

export const getJobFailure = (error)=>{
    return{
        type:GET_JOB_FAILURE,
        payload:error
    }
}

export const postJobRequest = ()=>{
    return{
        type:POST_JOB_REQUEST,
    }
}

export const postJobSuccess = (job)=>{
    return{
        type:POST_JOB_SUCCESS,
        payload:job
    }
}

export const postJobFailure = (error)=>{
    return{
        type:POST_JOB_FAILURE,
        payload:error,
    }
}

export const updateJobrequest = ()=>{
    return{
        type:UPDATE_JOB_REQUEST,
    }
}

export const updateJobSuccess = (job)=>{
    return{
        type:UPDATE_JOB_SUCCESS,
        payload:job
    }
}

export const updateJobFailure = (error)=>{
    return{
        type:UPDATE_JOB_FAILURE,
        payload:error
    }
}

export const deleteJobRequest = ()=>{
    return{
        type:DELETE_JOB_REQUEST
    }
}

export const deleteJobSuccess = (job)=>{
    return{
        type:DELETE_JOB_SUCCESS,
        payload:job
    }
}

export const deleteJobFailure = (error)=>{
    return{
        type:DELETE_JOB_FAILURE,
        payload:error
    }
}

export const dislikeJobRequest = ()=>{
    return{
        type:DISLIKE_JOB_REQUEST
    }
}
export const dislikeJobSuccess = (like)=>{
    return{
        type:DISLIKE_JOB_SUCCESS,
        payload:like
    }
}

export const dislikeJobFailure = (error)=>{
    return{
        type:DISLIKE_JOB_FAILURE,
        payload:error
    }
}





export const likeJobRequest = ()=>{
    return{
        type:LIKE_JOB_REQUEST
    }
}
export const likeJobSuccess = (like)=>{
    return{
        type:LIKE_JOB_SUCCESS,
        payload:like
    }
}

export const likeJobFailure = (error)=>{
    return{
        type:LIKE_JOB_FAILURE,
        payload:error
    }
}





export const applyJobRequest = ()=>{
    return{
        type:APPLY_JOB_REQUEST
    }
}
export const applyJobSuccess = ()=>{
    return{
        type:APPLY_JOB_SUCCESS,
    }
}

export const applyJobFailure = ()=>{
    return{
        type:APPLY_JOB_FAILURE,
    }
}




export const rateJobRequest = ()=>{
    return{
        type:RATE_JOB_REQUEST
    }
}
export const rateJobSuccess = (job)=>{
    return{
        type:RATE_JOB_SUCCESS,
        payload:job
    }
}

export const rateJobFailure = (error)=>{
    return{
        type:RATE_JOB_FAILURE,
        payload:error
    }
}





export const reset =()=>{
    return{
        type:JOB_RESET
    }
}




export const applyJob = id => dispatch =>{
    const token = getAuthToken()
    if(token !== null){
        dispatch(applyJobRequest())
        const config = {
            headers : {
                "Content-Type":'application/json',
                "Authorization":`Bearer ${token}`
            }
        }
        axios.post(applyJobPath(id),{},config).then(res=>{
            dispatch(curUserSuccess(res.data.data))
            dispatch(applyJobSuccess())
        }).catch(err=>{
            if(err.response){
                message.error(err.response.data.detail)
                console.log(err.response.data.detail);
                
            }else if(err.request){
                console.log(err.request);
                message.error("Network error!")
                dispatch(likeJobFailure())
            }
        })
    }else{
        message.error("Action connot be completed because you are not logged in")
    }
}


export const likeJob = id =>dispatch=>{
       
    const token = getAuthToken()
    if(token !== null){
        dispatch(likeJobRequest())
        const config = {
            headers : {
                "Content-Type":'application/json',
                "Authorization":`Bearer ${token}`
            }
        }
        axios.get(likeJobPath(id),config).then(res=>{

            dispatch(likeJobSuccess(res.data))
            message.success("Succesfully liked a job")
        }).catch(err=>{
            if(err.response){
                message.error("Error Occured")
                console.log(err.response.data);
                dispatch(getJobFailure())
            }else if(err.request){
                console.log(err.request);
                message.error("Network error!")
                dispatch(likeJobFailure())
            }
        
        })
    }else{
        message.error("Action connot bbe completed because you are not logged in")
    }
}



export const rateJob =(id,data) =>dispatch=>{
    const token = getAuthToken()
    if(token !== null){
        dispatch(rateJobRequest())
        const config = {
            headers : {
                "Content-Type":'application/json',
                "Authorization":`Bearer ${token}`
            }
        
        }
        axios.post(ratejobPath(id),data,config).then(res=>{
            console.log(res.data);
            dispatch(rateJobSuccess(res.data))
            message.success("Succesfully rate a job")
        }).catch(err=>{
            if (err.response){
                console.log(err.response);
                if (err.response.status ===401){
                    dispatch(rateJobFailure())
                    message.error("Session has expired. Please login")
                }else{
                    dispatch(rateJobFailure())
                    message.error("Error occured")
                }

            }else if (err.request){
                dispatch(rateJobFailure())
                message.error("Network Error")
            
            }
        })

    }else {
        message.error("You are logged out")
    }
}


export const dislikeJob = id =>dispatch=>{
       
    const token = getAuthToken()
    if(token !== null){
        dispatch(dislikeJobRequest())
        const config = {
            headers : {
                "Content-Type":'application/json',
                "Authorization":`Bearer ${token}`
            }
        }
        axios.get(dislikeJobPath(id),config).then(res=>{

            dispatch(dislikeJobSuccess(res.data))
            message.success("Succesfully disliked a job")
        }).catch(err=>{
            if(err.response){
                message.error("Error Occured")
                console.log(err.response.data);
                dispatch(dislikeJobFailure())
            }else if(err.request){
                console.log(err.request);
                message.error("Network error!")
                dispatch(dislikeJobFailure())
            }
        
        })
    }else{
        message.error("Action connot bbe completed because you are not logged in")
    }
}





export const getJob = ()=>dispatch=>{
   
    const token = getAuthToken()
    if(token !== null){
        dispatch(getJobRequest())
        const config = {
            headers : {
                "Content-Type":'application/json',
                "Authorization":`Bearer ${token}`
            }
        }
        axios.get(jobPath,config).then(res=>{
            console.log(res.data);
            dispatch(getJobSuccess(res.data))
        }).catch(err=>{
            if(err.response){
                console.log(err.response.data);
                dispatch(getJobFailure(err.response.data))
            }else if(err.request){
                console.log(err.request);
                message.error("Network error!")
                dispatch(getJobFailure("Network error!"))
            }
        })
    }else{
        message.error("Action connot bbe completed because you are not logged in")
        dispatch(getJobFailure())
    }

}

export const postJob = (data)=>dispatch=>{
    dispatch(postJobRequest())
    console.log(data);
 
    try {
        const token = JSON.parse(localStorage.getItem('authToken'))
        const config = {
            headers : {
                "Content-Type":'application/json',
                "Authorization":`Bearer ${token}`
            }
        }
        console.log(token);
        axios.post(jobPath,data,config).then(res=>{
            console.log(res.data);
            dispatch(postJobSuccess(res.data))
            dispatch(reset())
        }).catch(err=>{
         
            if(err.response){
                if(err.response.status === 401){
                    console.log(err.response.data.detail);
                    message.error(err.response.data.detail)
                    dispatch(postJobFailure({error:err.response.data.detail}))                    
                }else{
                    message.error("Posting jobs failed")
                    console.log(err.response.data);
                    dispatch(postJobFailure(err.response.data))

                }

            }else if(err.request){
                console.log(err.request);
                message.error("Network error! Please check internet connection \nand try again")
                dispatch(postJobFailure({error:"Network error! Please check internet connection \nand try again"}))
            }
            dispatch(reset())
        })
        


    } catch (error) {
        dispatch(postJobFailure({error:"You have not loggeg in"}))
        
    }
 
}
import { POST_ESTIMATE_JOB_REQUEST, POST_ESTIMATE_JOB_SUCCESS, POST_ESTIMATE_JOB_FAILURE } from "./types/estimate_job_types"
import axios from 'axios'
import { extimateJobPath } from "../../utils/network_utils/endpoints"
const postEstimateJobRequest = ()=>{
    return{
        type:POST_ESTIMATE_JOB_REQUEST
    }
}
const postEstimateJobSuccess = (estimateJob)=>{
    return{
        type:POST_ESTIMATE_JOB_SUCCESS,
        payload:estimateJob
    }
}

const postEstimateJobFailure = (error)=>{
    return{
        type:POST_ESTIMATE_JOB_FAILURE,
        payload:error
    }
}

export const postEstimateJob = (data)=>dispatch=>{
    dispatch(postEstimateJobRequest())
    const config = {
        headers : {
            "Content-Type":'application/json',
        }
    }
    axios.post(extimateJobPath,data,config).then(res=>{
        console.log(res.data);
        dispatch(postEstimateJobSuccess(res.response.data))
    }).catch(err=>{
        if(err.response){
            dispatch(postEstimateJobFailure(err.response.data))
        }else if(err.request){
            console.log(err.request);
            dispatch(postEstimateJobFailure({error:"Network error! Please check internet connection try again"}))
        }
    })

}
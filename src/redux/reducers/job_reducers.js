const { POST_JOB_REQUEST, POST_JOB_SUCCESS, POST_JOB_FAILURE, JOB_RESET, GET_JOB_REQUEST, GET_JOB_SUCCESS, GET_JOB_FAILURE, DELETE_JOB_REQUEST, DELETE_JOB_SUCCESS, LIKE_JOB_SUCCESS, LIKE_JOB_REQUEST, DISLIKE_JOB_REQUEST, DISLIKE_JOB_SUCCESS, RATE_JOB_SUCCESS, RATE_JOB_REQUEST, RATE_JOB_FAILURE, DISLIKE_JOB_FAILURE, LIKE_JOB_FAILURE, APPLY_JOB_SUCCESS, APPLY_JOB_REQUEST, APPLY_JOB_FAILURE } = require("../actions/types/job_types");

const initState = {
    getLoading:false,
    postloading:false,
    updateLoading:false,
    deleteLoading:false,
    postSuccess:false,
    updateSuccess:false,
    deleteSuccess:false,
    getFailed:false,
    postFailed:false,
    updateFailed:false,
    deleteFailed:false,
    likeLoading:false,
    dislikeLoading:false,
    rateLoading:false,
    applyJobLoading:false,

    jobs : [],
    deleteMessage : "",
    updateMesage : "",
    getMessage : {},
    postMessage:{},
    postError:"",
}


const jobReducer = (state = initState,action)=>{
    switch (action.type) {
        case GET_JOB_REQUEST:
            return  {
                ...state,
                getLoading:true,
                getMessage:"",
                getFailed:false

            }
        case GET_JOB_SUCCESS:
            return{
                ...state,
                getLoading:false,
                jobs:action.payload,
                getMessage:"",
                getFailed:false
            }
        case GET_JOB_FAILURE:
            return{
                ...state,
                getLoading:false,
                getFailed:true,
                jobs:[],
                getMessage:action.payload
            }
        case LIKE_JOB_REQUEST:
            return{
                ...state,
                likeLoading:true
               
            }
        case LIKE_JOB_SUCCESS:
            return {
                ...state,
                likeLoading:false,
                jobs:action.payload
            }
        case LIKE_JOB_FAILURE:
            return {
                ...state,
                likeLoading:false,
                jobs:state.jobs
            }
        case DISLIKE_JOB_REQUEST:
            return{
                ...state,
                dislikeLoading:true
            }
        case DISLIKE_JOB_SUCCESS:
            return{
                ...state,
                dislikeLoading:false,
                jobs:action.payload
            }
        case DISLIKE_JOB_FAILURE:
            return {
                ...state,
                dislikeLoading:false,
                jobs:state.jobs
            }
        case RATE_JOB_REQUEST:
            return{
                ...state,
                rateLoading:true
            }
        case RATE_JOB_SUCCESS:
            return{
                ...state,
                rateLoading:false,
                jobs:action.payload
            }
        case RATE_JOB_FAILURE:
            return{
                ...state,
                rateLoading:false,
                jobs:state.jobs
            }
        case POST_JOB_REQUEST:
            
            return{
                ...state,
                postloading:true,
                postFailed:false,
                postSuccess:false,
                postMessage:"",  
            }
        case POST_JOB_SUCCESS:
            return{
                ...state,
                postloading:false,
                postSuccess:true,
                postFailed:false,
                postMessage:"",
                jobs:[...state.jobs,action.payload]
            }
        case POST_JOB_FAILURE:
            return{
                ...state,
                postloading:false,
                postSuccess:false,
                postFailed:true,
                postMessage:action.payload,
                postError:action.payload.error && action.payload.error
            }
        case DELETE_JOB_REQUEST:
            return{
                ...state,
                deleteLoading:true,
                deleteFailed:false,
                deleteSuccess:false,
                deleteMessage:"",
            }
        case DELETE_JOB_SUCCESS:
            return{
                ...state,
                deleteLoading:false,
                deleteFailed:false,
                deleteSuccess:true,
                deleteMessage:"",
                jobs:[...state.jobs.filter(job=>job.id !== action.payload.id)]
            }

        case APPLY_JOB_REQUEST:
            return {
                ...state,
                applyJobLoading:true
            }
        case APPLY_JOB_SUCCESS:
            return {
                ...state,
                applyJobLoading:false
            }
        case APPLY_JOB_FAILURE:
                return {
                    ...state,
                    applyJobLoading:false
                }
        case JOB_RESET:
            return{
                ...state,
                getLoading:false,
                postloading:false,
                updateLoading:false,
                deleteLoading:false,
                postSuccess:false,
                updateSuccess:false,
                deleteSuccess:false,
                getFailed:false,
                postFailed:false,
                updateFailed:false,
                deleteFailed:false,
                deleteMessage : "",
                updateMesage : "",
                updateMessage : {},
                postError:"",

            }
    
        default:
            return state;
    }
}

// const updateJob = (jobs,id)=>{
//     let job = jobs.find(job=>job.id === id)
//     job = {
//         ...jobs,
//         likes: jobs.likes +1
//     }
//     return job
// }
export default jobReducer;
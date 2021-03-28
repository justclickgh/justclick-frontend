// import jobs from "../../ui/views/dashnoard/components/jobs"
import { DELETE_CURENT_USER_JOB_FAILURE, DELETE_CURENT_USER_JOB_REQUEST, DELETE_CURENT_USER_JOB_SUCCESS, GET_CURENT_USER_JOBS_APPLIED_CONFIRMED_REQ_FAILURE, GET_CURENT_USER_JOBS_APPLIED_CONFIRMED_REQ_REQUEST, GET_CURENT_USER_JOBS_APPLIED_CONFIRMED_REQ_SUCCESS, GET_CURENT_USER_JOBS_FAILURE, GET_CURENT_USER_JOBS_PENDING_FAILURE, GET_CURENT_USER_JOBS_PENDING_REQUEST, GET_CURENT_USER_JOBS_PENDING_SUCCESS, GET_CURENT_USER_JOBS_REQUEST, GET_CURENT_USER_JOBS_SUCCESS, RESET_CURRENT_JOB_DATA ,GET_CURENT_USER_JOBS_COMPLETE_FAILURE, GET_CURENT_USER_JOBS_COMPLETE_REQUEST, GET_CURENT_USER_JOBS_COMPLETE_SUCCESS, SEARCH_JOB, FILTER_JOBS, PAGINATE_JOBS} from "../actions/types/current_user_jobs_types"

const page_number = 10

const initState = {
    loading:false,
    success:false,
    deleteLoading:false,
    updateLoading:false,
    failed:false,
    deleteFailed:false,
    updateFailed:false,
    deleteSuccess:false,
    updateSuccess:false,
    message : "",
    updateMessage:{},
    deleteMessage:"",
    jobs:[],
    page_data:[],
    filtered:[],

    completed_jobs:[],
    pedning_jobs:[],
    completed_jobs_request:[],
    job_application_confirmed:[],


    jobsAppliedcompletedRequestLoading:false,
    jobsAppliedConfirmedLoading:false,
    pendingRequestLoading:false


}


const curUserJobReducer = (state = initState,action)=>{
    switch (action.type) {
        case GET_CURENT_USER_JOBS_APPLIED_CONFIRMED_REQ_REQUEST:
            return {
                ...state,
                jobsAppliedcompletedRequestLoading:true
            }
        case GET_CURENT_USER_JOBS_APPLIED_CONFIRMED_REQ_SUCCESS:
            return{
                ...state,
                jobsAppliedcompletedRequestLoading:false,
                job_application_confirmed:action.payload,
                page_data: action.payload.slice(0,page_number),
                filtered:action.payload
            }
        case GET_CURENT_USER_JOBS_APPLIED_CONFIRMED_REQ_FAILURE:
            return{
                ...state,
                jobsAppliedcompletedRequestLoading:false,
            }
        case GET_CURENT_USER_JOBS_COMPLETE_REQUEST:
            return {
                ...state,
                jobsAppliedConfirmedLoading:true
            }
        case GET_CURENT_USER_JOBS_COMPLETE_SUCCESS:
            return {
                ...state,
                jobsAppliedConfirmedLoading:false,
                job_application_confirmed:action.payload
            }
            
        case GET_CURENT_USER_JOBS_COMPLETE_FAILURE:
            return {
                ...state,
                jobsAppliedConfirmedLoading:false
            }
        
        case GET_CURENT_USER_JOBS_PENDING_REQUEST:
            return {
                ...state,
                pendingRequestLoading:true

            }
        case GET_CURENT_USER_JOBS_PENDING_SUCCESS:
            return {
                ...state,
                pendingRequestLoading:true,
                completed_jobs:action.payload
            }
        case GET_CURENT_USER_JOBS_PENDING_FAILURE:
            return {
                ...state,
                pendingRequestLoading:false
            }
        
        case GET_CURENT_USER_JOBS_REQUEST:
            return  {
                ...state,
                loading:true,
                message:"",
                failed:false,
                success:false

            }
        case GET_CURENT_USER_JOBS_SUCCESS:
            console.log(action.payload);
            return{
                ...state,
                loading:true,
                jobs:action.payload,
                page_data: action.payload.slice(0,page_number),
                filtered:action.payload,
                message:"",
                failed:false,
                success:true
            }
        case GET_CURENT_USER_JOBS_FAILURE:

            return{
                ...state,
                loading:false,
                failed:true,
                jobs:[],
                message:action.payload
            }
        case DELETE_CURENT_USER_JOB_REQUEST:
            console.log(state);
            return{
                ...state,
                deleteLoading:true,
                deleteFailed:false,
                deleteSuccess:false,
                deleteMessage:"",
            }
        case DELETE_CURENT_USER_JOB_SUCCESS:
            return{
                ...state,
                deleteLoading:false,
                deleteFailed:false,
                deleteSuccess:true,
                deleteMessage:"",
                jobs:[...state.jobs.filter(job=>job.job_id !== action.payload.job_id)],
                filtered:[...state.filtered.filter(job=>job.job_id !== action.payload.job_id)],
                page_data:state.filtered.slice(0,page_number)
            }
        case DELETE_CURENT_USER_JOB_FAILURE:
            return{
                ...state,
                deleteLoading:false,
                deleteFailed:true,
                deleteSuccess:false,
                deleteMessage:action.payload,
            }
        case RESET_CURRENT_JOB_DATA:
            return{
                ...state,
                loading:false,
                deleteLoading:false,
                updateLoading:false,
                failed:false,
                deleteFailed:false,
                updateFailed:false,
                deleteSuccess:false,
                updateSuccess:false,
                message : "",
                updateMessage:{},
                deleteMessage:"",

            }
        case FILTER_JOBS:
            if(action.payload ==="pending"){
                return {
                    ...state,
                    filtered: state.jobs.filter(job=>job.status ===1),
                    page_data:state.jobs.filter(job=>job.status ===1).slice(0,page_number)
                }
            
            }
            else if(action.payload === "all"){
                return {
                    ...state,
                    filtered: state.jobs,
                    page_data:state.jobs.slice(0,page_number)
                }
            }
            else{
                return {
                    ...state,
                    filtered: state.jobs.filter(job=>job.status ===4),
                    page_data:state.jobs.filter(job=>job.status ===4).slice(0,page_number)

                }
            }
        case SEARCH_JOB:
            return{
                ...state,
                filtered: state.jobs.filter(job=> job.title.toLowerCase().includes(action.payload.toLowerCase())
                || job.description.toLowerCase().includes(action.payload.toLowerCase())
                ),
                page_data:state.jobs.filter(job=> job.title.toLowerCase().includes(action.payload.toLowerCase())
                || job.description.toLowerCase().includes(action.payload.toLowerCase())
                ).slice(0,page_number)
            }
        case PAGINATE_JOBS:
            const start = (action.payload-1)*page_number
            return{
                ...state,
                page_data:state.filtered.slice(start,start+page_number)
            }
        
        default:
            return state;
    }
}
export default curUserJobReducer;
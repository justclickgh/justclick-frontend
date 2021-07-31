import { GET_ALL_APPLICATION_ACCEPTED_FAILURE, GET_ALL_APPLICATION_ACCEPTED_REQUEST, GET_ALL_APPLICATION_ACCEPTED_SUCCESS, GET_ALL_COMPLETED_FAILURE, GET_ALL_COMPLETED_REQUEST, GET_ALL_COMPLETED_SUCCESS, GET_ALL_PENDING_FAILURE, GET_ALL_PENDING_REQUEST, GET_ALL_PENDING_SUCCESS } from "../actions/types/cur_freelancer_jobs_status_types"

const initialState = {
    getPendingLoading:false,
    getCompletedLoading:false,
    getAcceptedLoading:false,

    getPendingError:"",
    completedError:"",
    acceptedError:"",
    completedjobs : [],
    acceptedjobs:[],
    pendingJobs:[]
}




const currentFreelancerJobStatus =  (state = initialState, { type, payload }) => {
    switch (type) {

    case GET_ALL_PENDING_REQUEST:
        return {
             ...state,
             getPendingLoading:true
             }
    case GET_ALL_PENDING_SUCCESS:
        return {
            ...state,
            getPendingLoading:false,
            pendingJobs:payload,
            getPendingError:""
        }
    case GET_ALL_PENDING_FAILURE:
        return {
            ...state,
            getPendingLoading:false,
            getPendingError:payload,
            pendingJobs:[]
        }



        case GET_ALL_COMPLETED_REQUEST:
            return {
                 ...state,
                 getCompletedLoading:true
                 }
        case GET_ALL_COMPLETED_SUCCESS:
            return {
                ...state,
                getCompletedLoading:false,
                completedjobs:payload,
                completedError:""
            }
        case GET_ALL_COMPLETED_FAILURE:
            return {
                ...state,
                getCompletedLoading:false,
                completedError:payload,
                completedjobs:[]
            }




            case GET_ALL_APPLICATION_ACCEPTED_REQUEST:
                return {
                     ...state,
                     getAcceptedLoading:true
                     }

            case GET_ALL_APPLICATION_ACCEPTED_SUCCESS:
                return {
                    ...state,
                    getAcceptedLoading:false,
                    acceptedjobs:payload,
                    completedError:""
                }
            case GET_ALL_APPLICATION_ACCEPTED_FAILURE:
                return {
                    ...state,
                    getAcceptedLoading:false,
                    completedError:payload,
                    acceptedjobs:[]
                }
    



    default:
        return state
    }
}
export default currentFreelancerJobStatus
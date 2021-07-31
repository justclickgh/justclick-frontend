const { POST_ESTIMATE_JOB_REQUEST, POST_ESTIMATE_JOB_SUCCESS, POST_ESTIMATE_JOB_FAILURE } = require("../actions/types/estimate_job_types");

const initState = {
    postLoading:false,
    postingFailed:false,
    estimatedJobs:[], 
    postingSuccess:[],
    postError:"",
    personFullNameEror:[],
    descriptionError:[],
    personEmailError:[]

}


const estimatedJobReducer = (state = initState,action)=>{
    switch (action.type) {
        case POST_ESTIMATE_JOB_REQUEST:
            return{
                ...state,
                postLoading:true,
                postError:"",
                postingFailed:false,
                postingSuccess:true,
                fieldErrors:{},
                personFullNameEror:[],
                descriptionError:[],
                personEmailError:[]

            }

            
            case POST_ESTIMATE_JOB_SUCCESS:
                return{
                    ...state,
                    postLoading:false,
                    postingFailed:false,
                    postingSuccess:true,
                    estimatedJobs: [...state.estimatedJobs,action.payload],
                    postError:"",
                }
            case POST_ESTIMATE_JOB_FAILURE:
                return{
                    ...state,
                    postLoading:false,
                    postingFailed:true,
                    postingSuccess:false,
                    postError: action.payload.error &&action.payload.error,
                    personFullNameEror:action.payload.personFullNameEror &&action.payload.personFullNameEror,
                    descriptionError:action.payload.descriptionError &&action.payload.descriptionError,
                    personEmailError:action.payload.personEmailError &&action.payload.personEmailError,

                }
    
        default:
            return state;
    }
}

export default estimatedJobReducer;
import { USER_JOB_STATISTICS_FAILURE, USER_JOB_STATISTICS_REQUEST, USER_JOB_STATISTICS_SUCCESS } from "../actions/types/user_job_stats_types"

const initialState = {
total_number_of_jobs :0,
all_pending_jobs:0,
number_of_accepted:0,
all_freelancer_completed:0,
all_confirmed_completed:0,
fetch_loading:true
}

const user_job_statistics_reducer =  (state = initialState, { type, payload }) => {
    switch (type) {

    case USER_JOB_STATISTICS_REQUEST:
        return { 
            ...state,
            fetch_loading:true
        }
    case USER_JOB_STATISTICS_SUCCESS:
        return{
            ...state,
            fetch_loading:false,
            ...payload
        }
    case USER_JOB_STATISTICS_FAILURE:
        return {
            ...state,
            fetch_loading:false,
        }

    default:
        return state
    }
}
export default user_job_statistics_reducer
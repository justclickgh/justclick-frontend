import { GET_CURRENT_USER_PROFILE_FAILURE, GET_CURRENT_USER_PROFILE_REQUEST, GET_CURRENT_USER_PROFILE_SUCCESS } from "../actions/types/cur_user_profile"

const initialState = {
    loading:false,
    first_name:"",
    last_name:"",
    email:""
}

const current_user_profile_reducer =  (state = initialState, { type, payload }) => {
    switch (type) {

    case GET_CURRENT_USER_PROFILE_REQUEST :
        return { 
            ...state, 
            laoding:true
        }
    case GET_CURRENT_USER_PROFILE_SUCCESS:
        return {
            ...state,
            laoding:true,
            first_name:payload.profile.first_name,
            last_name:payload.profile.last_name,
            email:payload.email
        }
    case GET_CURRENT_USER_PROFILE_FAILURE:
        return {
            ...state,
            laoding:false
        }

    default:
        return state
    }
}
export default current_user_profile_reducer
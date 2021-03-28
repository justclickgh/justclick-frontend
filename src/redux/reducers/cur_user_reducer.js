import { GET_CURENT_USER_REQUEST, GET_CURENT_USER_SUCCESS, GET_CURENT_USER_FAILURE }from "../actions/types/curent_user_types";

const initState  = {
    loading:false,
    user:{},
    failed:false,
}

const curUserReducer =  (state= initState,action)=>{
    switch (action.type) {
        case GET_CURENT_USER_REQUEST:
            return{
                ...state,
                loading:true,
                failed:false
            }
        case GET_CURENT_USER_SUCCESS:
            return{
                ...state,
                loading:false,
                failed:false,
                user:action.payload
            }
        case GET_CURENT_USER_FAILURE:
            return{
                ...state,
                loading:false,
                failed:true,
                user:{},
            }
       
        default:
            return state;
    }
}

export default curUserReducer;
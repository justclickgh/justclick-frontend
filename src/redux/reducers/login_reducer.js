import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGIN_RESET } from "../actions/types/login_types";

const initState = {
    loading:false,
    failed:false,
    success:false,
    errorMessage:"",

}
const loginReducer = (state = initState,action)=>{
    switch (action.type) {
        case LOGIN_REQUEST:
            return{
                ...state,
                loading:true,
                failed:false,
                success:false,
                errorMessage:"",
            }
        case LOGIN_SUCCESS:
            return{
                ...state,
                loading:false,
                success:true,
                failed:false,
                errorMessage:""
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                loading:false,
                success:false,
                failed:true,
                errorMessage:action.payload,
            }
            case LOGIN_RESET:
                return{
                    ...state,
                    loading:false,
                    success:false,
                    failed:false,
                    errorMessage:""
                }
            
        default:
          return  state;
    }
}

export default loginReducer;

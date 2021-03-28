const { REGISTRATION_REQUEST, REGISTRATION_SUCCESS, REGISTRATION_FAILURE, REGISTRATION_RESET } = require("../actions/types/registration_types");

const initState = {
    loading:false,
    success:false,
    failed:false,
    errorMesssage:"",
    first_name_error:[" "],
    last_name_error:[" "],
    email_error:[" "],
    password_error:[" "],
    password_confirm_error:[" "],
}

const registrationReducer = (state = initState,action)=>{
    switch (action.type) {
        case REGISTRATION_REQUEST:
            return{
                ...state,
                loading:true,
                success:false,
                failed:false,
                errorMesssage:""
            }
            
        case REGISTRATION_SUCCESS:
            return{
                ...state,
                loading:false,
                success:true,
                failed:false,
                errorMessage:""
            }
        case REGISTRATION_FAILURE:
            return{
                ...state,
                loading:false,
                success:false,
                failed:true,
                first_name_error:action.payload.first_name?action.payload.first_name:[""],
                last_name_error:action.payload.last_name?action.payload.last_name:[""],
                email_error:action.payload.email?action.payload.email:[""],
                password_error:action.payload.password?action.payload.password:[""],
                errorMessage:action.payload.error?action.payload.error:""
            }
        case REGISTRATION_RESET:
            return{
                ...state,
                loading:false,
                success:false,
                failed:false,
                errorMessage:""
            }
    
        default:
            return state;
    }
}

export default registrationReducer;
// import { RetweetOutlined } from "@ant-design/icons";
import { CURRENT_CREATIVE_USER_RESET, GET_CURENT_CREATIVE_USER_FAILURE, GET_CURENT_CREATIVE_USER_REQUEST, GET_CURENT_CREATIVE_USER_SUCCESS, POST_PAST_EDUCATION_FAILURE, POST_PAST_EDUCATION_REQUEST, POST_PAST_EDUCATION_SUCCESS, POST_PAST_EMPLOYMENT_FAILURE, POST_PAST_EMPLOYMENT_REQUEST, POST_PAST_EMPLOYMENT_SUCCESS, SET_DESCRIPTION_REQUEST, SET_DESCRIPTION_SUCCESS, SET_EXPERIENCE_FAILURE, SET_EXPERIENCE_REQUEST, SET_EXPERIENCE_SUCCESS, SET_EXPERTISE_FAILURE, SET_EXPERTISE_REQUEST, SET_EXPERTISE_SUCCESS, UPLOAD_CV_SUCCESS } from "../actions/types/cur_creative_person_profile";

const initState  = {
    id:null,
    loading:false,
    cv:null,
    expertise:null,
    fist_name:"",
    last_name:"",
    email:"",
    experience:null,
    past_jobs:[],
    earning:null,
    education_histroy:[],

    past_images:[],
    is_Active:false,
    failed:false,
    success:false,
    description:null,
    jobs_completed:0,

    post_edication_history_loading:false,
    post_edication_history_success:false,
    programe_name_error:[""],
    school_name_error:[""],
    start_date_error:[""],
    end_date_error:[""],


    post_employement_histrory_loading:false,


    //Set expertise
    set_expertise_loading:false,
    set_expertise_success:false,
    set_expertise_failed:false,
    set_expertise_error:"",


    //set experience
    set_experience_loading:false,
    set_experience_success:false,
    set_experience_failed:false,
    set_experience_error:"",

    //set decription
    set_decription_loading:false,
    set_decription_success:false,
    set_decription_failed:false,
    set_decription_error:"",

    //upload cv
    set_upload_cv_loading:false,
    set_upload_cv_success:false,
    set_upload_cv_failed:false,
    set_upload_cv_error:"",



    //upload image
    set_upload_image_loading:false,
    set_upload_image_success:false,
    set_upload_image_failed:false,
    set_upload_image_error:""

}

const curCreativeUser =  (state= initState,action)=>{
    switch (action.type) {
        case GET_CURENT_CREATIVE_USER_REQUEST:
            return{
                ...state,
                loading:true,
                failed:false,
                success:false,
            }
        case GET_CURENT_CREATIVE_USER_SUCCESS:
            return{
                ...state,
                loading:false,
                failed:false,
                success:true,
                id:action.payload.id,
                expertise : action.payload.expertise,
                first_name : action.payload.user_profile.first_name,
                last_name : action.payload.user_profile.last_name,
                email : action.payload.user_profile.user.email,
                experience:action.payload.years_of_experience,
                cv:action.payload.cv,
                earning:action.payload.earning,
                education_histroy:action.payload.education_histroy,
                past_images:action.payload.past_images,
                past_jobs:action.payload.past_jobs,
                description:action.payload.description_of_past_experience,
                jobs_completed:action.payload.jobs_completed

            }
        case GET_CURENT_CREATIVE_USER_FAILURE:
            return{
                ...state,
                loading:false,
                failed:true,
                success:false,
            }
        case SET_EXPERTISE_REQUEST:
            return{
                ...state,
                set_expertise_loading:true,
                set_expertise_success:false,
                set_expertise_failed:false
            }
        case SET_EXPERTISE_SUCCESS:
            return{
                ...state,
                set_expertise_loading:false,
                set_expertise_success:true,
                set_expertise_failed:false,
                expertise:action.payload,
                set_expertise_error: ""
            }

        case SET_EXPERTISE_FAILURE:
            return{
                ...state,
                set_expertise_loading:false,
                set_expertise_success:false,
                set_expertise_failed:true,
                set_expertise_error: action.payload            
            }
        case SET_EXPERIENCE_REQUEST:
            return {
                ...state,
                set_experience_loading:true,
                set_experience_success:false,
                set_experience_failed:false,
            
            }
        case SET_EXPERIENCE_SUCCESS:
            return {
                ...state,
                set_experience_loading:false,
                set_experience_success:true,
                set_experience_failed:false,
                experience:action.payload,
                set_experience_error:""
            
            }
        case SET_EXPERIENCE_FAILURE:
            return {
                ...state,
                set_experience_loading:false,
                set_experience_success:false,
                set_experience_failed:true,
                set_experience_error:action.payload    
            }


        case SET_DESCRIPTION_REQUEST:
                return {
                    ...state,
                    set_decription_loading:true,
                    set_decription_success:false,
                    set_decription_failed:false,
                
                }
            case SET_DESCRIPTION_SUCCESS:
                return {
                    ...state,
                    set_decription_loading:false,
                    set_decription_success:true,
                    set_decription_failed:false,
                    description:action.payload,
                    set_decription_error:""
                
                }
            case UPLOAD_CV_SUCCESS:
                return {
                    ...state,
                    cv:action.payload
                }
            case POST_PAST_EDUCATION_REQUEST:
                return {
                    ...state,
                    post_edication_history_loading:true
                }
            case POST_PAST_EDUCATION_SUCCESS:
                return{
                    ...state,
                    post_edication_history_loading:false,
                    education_histroy:[...state.education_histroy,action.payload],
                    post_edication_history_success:true,
                }
            case POST_PAST_EDUCATION_FAILURE:
                return{
                    ...state,
                    post_edication_history_loading:false,
                    // programe_name_error:action.payload.programe_name?action.payload.programe_name:[""],
                    // school_name_error:action.payload.school_name?action.payload.school_name:[""],
                    // start_date_error:action.payload.start_date?action.payload.start_date:[""],
                    // end_date_error:action.payload.end_date?action.payload.end_date:[""],
                }
            case POST_PAST_EMPLOYMENT_REQUEST:
                return{
                    ...state,
                    post_employement_histrory_loading:true,
                }
            case POST_PAST_EMPLOYMENT_SUCCESS:
                return {
                    ...state,
                    post_employement_histrory_loading:false,
                    past_jobs:[...state.past_jobs,action.payload]
                }
            case POST_PAST_EMPLOYMENT_FAILURE:
                return {
                    ...state,
                    post_employement_histrory_loading:false
                    
                }
            
        
        case CURRENT_CREATIVE_USER_RESET:
            return{
                ...state,
                post_edication_history_success:false,
            //Set expertise
            set_expertise_loading:false,

            set_expertise_success:false,
            set_expertise_failed:false,
            set_expertise_error:"",


            //set experience
            set_experience_loading:false,
            set_experience_success:false,
            set_experience_failed:false,


                //set decription
            set_decription_loading:false,
            set_decription_success:false,
            set_decription_failed:false,
            set_decription_error:"",

            //upload cv
            set_upload_cv_loading:false,
            set_upload_cv_success:false,
            set_upload_cv_failed:false,


            //upload image
            set_upload_image_loading:false,
            set_upload_image_success:false,
            set_upload_image_failed:false

            }
       
        default:
            return state;
    }
}

export default curCreativeUser;
import { message } from 'antd';
import axios from 'axios';
import getAuthToken from '../../utils/get_auth_token';
import { creatEducationHistoryPath, createPastEmploymentPath, curentCreativePersonProfilePath,setDescriptionPath,setExperiencePath,setExpertisePath } from '../../utils/network_utils/endpoints';
import { CURRENT_CREATIVE_USER_RESET, GET_CURENT_CREATIVE_USER_FAILURE,POST_PAST_EDUCATION_REQUEST,
    POST_PAST_EDUCATION_SUCCESS,POST_PAST_EDUCATION_FAILURE, GET_CURENT_CREATIVE_USER_REQUEST, GET_CURENT_CREATIVE_USER_SUCCESS, SET_DESCRIPTION_FAILURE, SET_DESCRIPTION_REQUEST, SET_DESCRIPTION_SUCCESS, SET_EXPERIENCE_FAILURE, SET_EXPERIENCE_REQUEST, SET_EXPERIENCE_SUCCESS, SET_EXPERTISE_FAILURE, SET_EXPERTISE_REQUEST, SET_EXPERTISE_SUCCESS, UPLOAD_CV_SUCCESS, 
    
    UPLOAD_PAST_JOB_IMAGE_SUCCESS, POST_PAST_EMPLOYMENT_FAILURE } from './types/cur_creative_person_profile';

const curUserRequest = ()=>{
    return {
        type:GET_CURENT_CREATIVE_USER_REQUEST
    }
}

export const curUserSuccess = ( user)=>{
    return{
        type:GET_CURENT_CREATIVE_USER_SUCCESS,
        payload:user
    }
}

const curUserFailure = (error)=>{
    return{
        type:GET_CURENT_CREATIVE_USER_FAILURE,
        payload:error
    }
}



//Set Expertise

const setExpertiseRequest = ()=>{
    return {
        type:SET_EXPERTISE_REQUEST
    }
}

const setExpertiseSuccess = (expertise)=>{
    return{
        type:SET_EXPERTISE_SUCCESS,
        payload:expertise
    }
}

const setExpertiseFailure = (error)=>{
    return{
        type:SET_EXPERTISE_FAILURE,
        payload:error
    }
}

const setExperienceRequest= ()=>{
    return{
        type:SET_EXPERIENCE_REQUEST,
    }
}

const setExperienceSuccess = (experience)=>{
    return {
        type: SET_EXPERIENCE_SUCCESS,
        payload:experience
    }
}

const setExperienceFailure = (error)=>{
    return {
        type:SET_EXPERIENCE_FAILURE,
        payload:error
    }
}

const setDescriptionRequest = ()=>{
    return {
        type:SET_DESCRIPTION_REQUEST
    }
}

const setDescriptionSuccess = (description)=>{
    return {
        type:SET_DESCRIPTION_SUCCESS,
        payload:description
    }
}
const setDescriptionFailure = (error)=>{
    return {
        type:SET_DESCRIPTION_FAILURE,
        payload:error
    }
}


// const uploadPastImageRequest = ()=>{
//     return{
//         type:UPLOAD_PAST_JOB_IMAGE_REQUEST
//     }
// }

export const uploadPastImageSuccess=(image)=>{
    return {
        type:UPLOAD_PAST_JOB_IMAGE_SUCCESS,
        payload: image
    }
}

const postPastEducationRequest = ()=>{
    return {
        type:POST_PAST_EDUCATION_REQUEST
    }
}

const postPastEducationSuccess = (past_education)=>{
    return {
        type:POST_PAST_EDUCATION_SUCCESS,
        payload:past_education
    }
}

const postPastEducationFailure = (error)=>{
    return {
        type:POST_PAST_EDUCATION_FAILURE
    }
}

// const uploadCvRequest = ()=>{
//     return {
//         type:UPLOAD_CV_REQUEST
//     }
// }





export const uploadCvSuccess = (cv)=>{
    return {
        type:UPLOAD_CV_SUCCESS,
        payload:cv
    }
}


const postEmploymentRequest = ()=>{
    return {
        type:POST_PAST_EDUCATION_REQUEST
    }
}

const postEmploymentSuccess = (history)=>{
    return {
        type:POST_PAST_EDUCATION_SUCCESS,
        payload:history
    }
}

const postEmploymentFailure = (error)=>{
return {
    type:POST_PAST_EMPLOYMENT_FAILURE,
    payload:error
}
}

// const uploadCvFailure=(error)=>{
//     return {
//         type: UPLOAD_CV_FAILURE,
//         payload:error
//     }
// }
const reset = ()=>{
   return {
       type:CURRENT_CREATIVE_USER_RESET
   }
}




export const getCurrentCreativeUser = ()=>dispatch=>{
    
    dispatch(curUserRequest())
    const token = getAuthToken()
    if(token !== null){
        const config = {
            headers : {
                "Content-Type":'application/json',
                'Authorization':`Bearer ${token}`
            }}
    

    axios.get(curentCreativePersonProfilePath,config).then(res=>{
        console.log(res.data);
        dispatch(curUserSuccess(res.data))
        // localStorage.setItem('userData',JSON.stringify(res.data))
    }).catch(err=>{
        if(err.response){
            console.log(err.response);
            dispatch(curUserFailure(err.response.data))

        }else if(err.request){
            console.log(err.request);
            dispatch(curUserFailure("Network error! Please check internet connection and reload page"))
        }
    })}else{
        message.error("You are logged out. Please log in")

    }

}










export const setExpertise = (data)=>dispatch=>{
    console.log(data);
    dispatch( setExpertiseRequest())
    const token = getAuthToken()
    if(token !== null){
        const config = {
            headers : {
                'Authorization':`Bearer ${token}`
            }}
        axios.patch(setExpertisePath,data,config).then(res=>{
            dispatch(setExpertiseSuccess(res.data.expertise))
            dispatch(reset())
        }).catch(error=>{
            if(error.response){
                dispatch(setExpertiseFailure("Error occured, wrong data sent"))
                console.log(error.response);
            }else if(error.request){
                console.log(error.request);
                dispatch(setExpertiseFailure("You are logged out. Please log in"))
            }
            dispatch(reset())
        })
        }
    else{
        message.error("You are logged out. Please log in")

    }
    
}













export const setExperience = (data)=>dispatch=>{
    console.log(data);
    dispatch( setExperienceRequest())
    const token = getAuthToken()
    if(token !== null){
        const config = {
            headers : {
                'Authorization':`Bearer ${token}`
            }}
        axios.patch(setExperiencePath,data,config).then(res=>{
            dispatch(setExperienceSuccess(res.data.years_of_experience))
            dispatch(reset())
        }).catch(error=>{
            if(error.response){
                dispatch(setExperienceFailure("Error occured, wrong data sent"))
                console.log(error.response);
            }else if(error.request){
                console.log(error.request);
                dispatch(setExperienceFailure("You are logged out. Please log in"))
            }
            dispatch(reset())
        })
        }
    else{
        message.error("You are logged out. Please log in")

    }
    
}













export const setDescription = (data)=>dispatch=>{
    console.log(data);
    dispatch( setDescriptionRequest())
    const token = getAuthToken()
    if(token !== null){
        const config = {
            headers : {
                'Authorization':`Bearer ${token}`
            }}
        axios.patch(setDescriptionPath,data,config).then(res=>{
            dispatch(setDescriptionSuccess(res.data.description_of_past_experience))
            dispatch(reset())
        }).catch(error=>{
            if(error.response){
                dispatch(setDescriptionFailure("Error occured, wrong data sent"))
                console.log(error.response);
            }else if(error.request){
                console.log(error.request);
                dispatch(setDescriptionFailure("You are logged out. Please log in"))
            }
            dispatch(reset())
        })
        }
    else{
        message.error("You are logged out. Please log in")
    }
    
}


export const PostPastEducation =  (data,id)=>dispatch=>{
    console.log(data);
    dispatch(postPastEducationRequest())
    const token = getAuthToken()
    if(token !== null){
        const config = {
            headers : {
                'Authorization':`Bearer ${token}`
            }}
        axios.post(creatEducationHistoryPath(id),data,config).then(res=>{
            dispatch(postPastEducationSuccess(res.data))
            dispatch(reset())
            message.success("Ypu have successfully addded an education history")

        }).catch(error=>{
            if(error.response){
                dispatch(postPastEducationFailure(error.response.data))

                message.error("Error Occured, invalid data entered")

                
            }else if(error.request){
               dispatch( postPastEducationFailure())
               message.error("Network error,Please check internet conncetion and try later")
            }
            dispatch(reset())
        })
        }
    else{
       dispatch( postPastEducationFailure())
        message.error("You are logged out. Please log in")

    }
    
}











export const PostPastEmployement =  (data,id)=>dispatch=>{
    console.log(data);
    dispatch(postEmploymentRequest ())
    const token = getAuthToken()
    if(token !== null){
        const config = {
            headers : {
                'Authorization':`Bearer ${token}`
            }}
        axios.post(createPastEmploymentPath(id),data,config).then(res=>{
            dispatch(postEmploymentSuccess(res.data))
            dispatch(reset())
            message.success("You have successfully addded an employement history")

        }).catch(error=>{
            if(error.response){
                dispatch(postEmploymentFailure(error.response.data))

                message.error("Error Occured, invalid data entered")

                
            }else if(error.request){
               dispatch( postEmploymentFailure())
               message.error("Network error,Please check internet conncetion and try later")
            }
            dispatch(reset())
        })
        }
    else{
       dispatch( postEmploymentFailure())
        message.error("You are logged out. Please log in")

    }
    
}

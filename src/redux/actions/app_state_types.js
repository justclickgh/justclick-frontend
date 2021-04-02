import { SET_USER_TYPE } from "./types/app_state_types"

export const setUserType= type=>{
    return {
        type: SET_USER_TYPE,
        payload: type
    }
}
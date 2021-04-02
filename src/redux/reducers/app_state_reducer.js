import { SET_USER_TYPE } from "../actions/types/app_state_types"

const initialState = {
userType: null
}

const appStateducer = (state = initialState, { type, payload }) => {
    switch (type) {

    case SET_USER_TYPE:
        return { ...state, userType:payload}

    default:
        return state
    }
}
export default  appStateducer

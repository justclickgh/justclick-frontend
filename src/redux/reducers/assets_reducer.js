import { GET_ALL_ASSETS_FAILURE, GET_ALL_ASSETS_REQUEST, GET_ALL_ASSETS_SUCCESS } from "../actions/types/assets_types"

const initialState = {
    fetchLoading:false,
    assets:[],
    filtered_Assets:[]

}

const assetReducer  = (state = initialState, { type, payload }) => {
    switch (type) {

    case GET_ALL_ASSETS_REQUEST:
        return { 
            ...state, 
            fetchLoading:true
        }
    case GET_ALL_ASSETS_SUCCESS:
        return {
            ...state,
            fetchLoading:false,
            assets:payload
        }
    case GET_ALL_ASSETS_FAILURE:
        return {
            ...state,
            fetchLoading:false,
            assets:[]


        }

    default:
        return state
    }
}
export default assetReducer



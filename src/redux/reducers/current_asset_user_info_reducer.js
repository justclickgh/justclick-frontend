import {
    FETCH_CURRENT_ASSET_USER_EARNING_FAILURE,
    FETCH_CURRENT_ASSET_USER_EARNING_REQUEST,
    FETCH_CURRENT_ASSET_USER_EARNING_SUCCESS,
    FETCH_CURRENT_USER_ASSET_FAILURE,
    FETCH_CURRENT_USER_ASSET_REQUEST, 
    FETCH_CURRENT_USER_ASSET_SUCCESS, 
    POST_CURRENT_USER_ASSET_FAILURE, 
    POST_CURRENT_USER_ASSET_REQUEST, 
    POST_CURRENT_USER_ASSET_SUCCESS
} from "../actions/types/cur_asset_owner_info"

const initialState = {
    earning:null,
    earnings_loading:false,
    user_asset:[],
    fetch_assets_loading:false,
    post_assets_loading:false

}

const currentUserAssetUploadsREducer = (state = initialState, { type, payload }) => {
    switch (type) {

    case FETCH_CURRENT_ASSET_USER_EARNING_REQUEST:
        return { ...state, 
            earnings_loading:true
        }
    case FETCH_CURRENT_ASSET_USER_EARNING_SUCCESS:
        return {
            ...state,
            earning:payload,
            earnings_loading:false
        }
    case FETCH_CURRENT_ASSET_USER_EARNING_FAILURE:
        return{
            ...state,
            earnings_loading:false,
            earning:null
        }
    case FETCH_CURRENT_USER_ASSET_REQUEST:
        return {
            ...state,
            fetch_assets_loading:true
        }
    case FETCH_CURRENT_USER_ASSET_SUCCESS:
        return{
            ...state,
            fetch_assets_loading:false,
            user_asset:payload
        }
    case FETCH_CURRENT_USER_ASSET_FAILURE:
        return {
            ...state,
            fetch_assets_loading:false,
            user_asset:[]
        }
    case POST_CURRENT_USER_ASSET_REQUEST:
        return{
            ...state,
            post_assets_loading:true
        }
    case POST_CURRENT_USER_ASSET_SUCCESS:
        return {
            ...state,
            post_assets_loading:false,
            assets:[]
        }
    case POST_CURRENT_USER_ASSET_FAILURE:
        return {
            ...state,
            post_assets_loading:false,
        }

    default:
        return state
    }
}
export default currentUserAssetUploadsREducer
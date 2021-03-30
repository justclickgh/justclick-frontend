import {combineReducers} from 'redux'
import curUserJobReducer from './reducers/current_user_jobs_reducer';
import curUserReducer from './reducers/cur_user_reducer';
import estimatedJobReducer from './reducers/estimate_job_reducer';
import jobReducer from './reducers/job_reducers';
import loginReducer from './reducers/login_reducer';
import registrationReducer from './reducers/registration_reducer';
import curCreativeUser from './reducers/cur_creative_user_reducer'
import currentFreelancerJobStatus from './reducers/cur_freelancer_job_Status_reducer';
import user_job_statistics_reducer from './reducers/user_job_statistics_reducer';
import assetReducer from './reducers/assets_reducer';
import currentUserAssetUploadsREducer from './reducers/current_asset_user_info_reducer';
import current_user_profile_reducer from './reducers/current_user_profile_reducer';
import appStateducer from './reducers/app_state_reducer';

const rootReducer = combineReducers({
    login:loginReducer,
    register:registrationReducer,
    jobs:jobReducer,
    curUserJob:curUserJobReducer,
    curUser:curUserReducer,
    curCreativeUser:curCreativeUser,
    estimateJob:estimatedJobReducer,
    currentFreelancerJobStatus:currentFreelancerJobStatus,
    user_job_statistics:user_job_statistics_reducer,
    assets:assetReducer,
    currentUserAssets:currentUserAssetUploadsREducer,
    currentUserProfile:current_user_profile_reducer,
    appState: appStateducer,
})
 
export default rootReducer;
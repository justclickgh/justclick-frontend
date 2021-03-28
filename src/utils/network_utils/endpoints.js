import config from "../../config";

const getBasePath =()=>{
if( config.staging){
return "http://54.184.53.196"
}
else {
    return "http://127.0.0.1:8000"
}

}
export const basePath = getBasePath()

export const loginPath = `${basePath}/api/v1/auth/login`;
export const freelancerinPath = `${basePath}/api/v1/auth/freelancer-login`;
export const assetOwenrPath = `${basePath}/api/v1/auth/asset-owner-login`;
export const curUserProfilePath = `${basePath}/api/v1/auth/me`;
export const updateUserProfilePath = `${basePath}/api/v1/auth/update_user_profile`;
export const resetPasswordPath = `${basePath}/api/v1/auth/reset_password`;

export const userRegistrationPath = `${basePath}/api/v1/auth/register`;
export const adminRegistrationPath = `${basePath}/api/v1/auth/register_admin`;
export const creativePersonRegistrationPath =`${basePath}/api/v1/creative-person-profile/`;
export const curentCreativePersonProfilePath =`${creativePersonRegistrationPath}getCurrentUserProfile/`
export const setExpertisePath = `${creativePersonRegistrationPath}setExpertise/`
export const setExperiencePath = `${creativePersonRegistrationPath}setYearsOfExperience/`
export const setDescriptionPath = `${creativePersonRegistrationPath}setDescription/`
export const uploadCvPath = `${creativePersonRegistrationPath}uploadCv/`
export const uploadPastImage =`${creativePersonRegistrationPath}createPastImage/`
export const jobPath = `${basePath}/api/v1/jobs/`;
export const likeJobPath = id =>`${jobPath}${id}/like`;
export const ratejobPath = id =>`${jobPath}${id}/rate_job/`;
export const dislikeJobPath = id =>`${jobPath}${id}/dislike`;
export const applyJobPath = id =>`${jobPath}${id}/apply/`;
export const appliedJobsPath = `${jobPath}applied-jobs`
export const userCompletedTask = `${jobPath}user-completd`
export const curFreelancerAppliedJobsPath = `${appliedJobsPath}/user_job_pending`
export const curFreelancerConfirmedApplidJobsPath = `${appliedJobsPath}/user_job_pending`
export const curUserPath = `${basePath}/api/v1/auth/me`;
export const extimateJobPath  = `${jobPath}estimate/`;
export const getUserJobsPath = `${jobPath}user-jobs`;
export const createPastEmploymentPath = (id)=>`${creativePersonRegistrationPath}${id}/createPastJob/`
export const creatEducationHistoryPath  = (id)=>`${creativePersonRegistrationPath}${id}/creatEducationHistory/`
export const JobDetailPath = id=>`${jobPath}${id}`;
export const earningsDetail = id=>`${creativePersonRegistrationPath}earnings/${id}`
export const jobstatisticsPath = `${jobPath}current_user_statistics`
export const createPaymentRecpeintPath = `${basePath}/api/v1/payment/get-paid`
export const getPathPath =(recipentID)=> `${createPastEmploymentPath}/${recipentID}`


export const assetsPath = `${basePath}/api/v1/assets`
export const createAssetOwnerPath = `${assetsPath}/create_asset_owner`
export const createAssetPath = `${assetsPath}/create_asset`
export const currentOwnerUploads = `${assetsPath}/curent_owner_uploads`
export const createUiUxDesignInfoPath = id =>`${assetsPath}/create_ui_ux_design/${id}`
export const createPhotoInfoPath = id =>`${assetsPath}/create_photo_info/${id}`
export const createSourceCodeInfoPath = id =>`${assetsPath}/create_source_code_info/${id}`
export const createDesignTemplateInfoPath = id =>`${assetsPath}/create_design_template_info/${id}`
export const assetDetailPath = id =>`${assetsPath}/asset_detail/${id}`
export const assetPaymentPath = id=> `${assetsPath}/initiate_payment/8200e2ae-b079-4250-b5cf-f440f1d5e485`
export const verifyAssetPaymentPath = id =>`${assetsPath}/verify_payment/${id}`

export const add_photo_files = id =>`${assetsPath}/add_photo_files/${id}`
export const add_ui_ux_design_images = id =>`${assetsPath}/add_ui_ux_design_images/${id}`
export const add_design_file = id =>`${assetsPath}/add_design_file/${id}`


export const jobsPaymentPath = id=>`${jobPath}job_payment/${id}`



export const createDesignJobInfoPath = id=>`${jobPath}create_design_info/${id}`
export const createPhotoJobInfoPath = id => `${jobPath}${id}/create_photography_info/`
export const createPlanningJobInfoPath = id => `${jobPath}${id}/create_event_planninginfo/`
export const createDevelopemtJobInfoPath = id => `${jobPath}${id}/create_web_development_info/`


export const contactSendEmailPath =`${basePath}/api/v1/email-service/send_contact_email`



export const verify_payment_account = `${basePath}/api/v1/payment/resolve-account`

export const confirmJobsPath = reference=>`${jobPath}confirm_payment/${reference}`
export const getActiveJobsPath = `${jobPath}get_all_active_jobs`
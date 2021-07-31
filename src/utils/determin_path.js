const { default: UserDashboardPage } = require("../ui/pages/userDashBoard");
const { default: WorkerDashboard } = require("../ui/pages/wokrerDashboard");
const { default: getIsAuth } = require("./getIsAuth");
const { customErrorToast } = require("./ui_utils/custom_toast");




const getDashboardComponent = ()=>{
    const isLoggedIn = getIsAuth()

    if(isLoggedIn){
        try {
            const userData = JSON.parse(localStorage.getItem('userData'))
            if(userData.is_staff){
                console.log(userData)
                return WorkerDashboard
            }else{
                console.log(userData)
                return UserDashboardPage
            }
        } catch (error) {
            customErrorToast('You must be logged in')
            return UserDashboardPage
        }
    }else{
        customErrorToast('You must be logged in')
        return UserDashboardPage
    }
}

export default getDashboardComponent
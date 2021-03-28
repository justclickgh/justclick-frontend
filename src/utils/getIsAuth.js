 
const getIsAuth = ()=>{
    try {
        const isAuth = JSON.parse(localStorage.getItem('loggedIn'))
        // console.log(isAuth)
        if(isAuth){
            // console.log("heya");
            return true
        }else{
            return false
        }
    } catch (error) {
        return false
    }
}

export default getIsAuth;


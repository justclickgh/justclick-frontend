import getIsAuth from "./getIsAuth";


const handleRedirect = ()=>{
    const isLoggedIn = getIsAuth()
    console.log(isLoggedIn);
    
    if(!isLoggedIn){
        return true
    }
    return false
}

export default handleRedirect;
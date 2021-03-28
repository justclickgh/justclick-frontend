const getAuthToken = ()=>{
    let authToken = null
    try {
         authToken = JSON.parse(localStorage.getItem("authToken"))
    } catch (error) {
        authToken = null
    }
    return authToken
}
export default getAuthToken;
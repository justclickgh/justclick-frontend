const getLoacalObject =(key)=>{
    try {
        return JSON.parse(localStorage.getItem(key))
    } catch (error) {
        return null
        
    }
}

export const getLocalUserType =()=>{
    return getLoacalObject('user_tpe')
}
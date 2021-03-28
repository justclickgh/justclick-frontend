import { message } from "antd"
// import { useHistory } from "react-router-dom"



export  const logout = ()=>{
        // const history = useHistory()
        localStorage.removeItem('loggedIn')
        localStorage.removeItem('authToken')
       message.success("You have succesfully logged out")
    //    history.push('/login')
      }
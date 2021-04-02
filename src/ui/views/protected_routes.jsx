import React from 'react'
import { Redirect, Route } from 'react-router'
import getIsAuth from '../../utils/getIsAuth'

const ProtectedRoute = ({ component: Component,...rest}) => {
    return (
        <Route {...rest} render = {props=>{
            if(getIsAuth){
                return <Component {...props} />
            }else {
                return <Redirect to ={{
                    pathname:"/login"
                }}/>
            }
        }}/>

     
    )
}

export default ProtectedRoute

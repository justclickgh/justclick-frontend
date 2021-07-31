import { message } from 'antd'
import React from 'react'
import { Route, useHistory } from 'react-router'
import getIsAuth from '../../utils/getIsAuth'
import Login from './login'

const LoginRedirect = ({ match,...rest}) => {
    const history = useHistory()
    return (
        <Route {...rest} render = {props=>{
            if (getIsAuth()){
                message.success("You have already logged in")
                history.goBack()

            }
            else
                return <Login {...props}  />
              
        }} />
            
    )
}

export default LoginRedirect

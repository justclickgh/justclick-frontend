import React, { useEffect, useState } from 'react';
import { Menu} from 'antd';
import 'antd/dist/antd.css'
import {DashboardOutlined, DownloadOutlined} from '@ant-design/icons';
import getIsAuth from '../../../utils/getIsAuth';
import {  NavLink} from 'react-router-dom';

const RightMenu = ({mode}) => {
    const [loggedOut,setLoggedOut] = useState(false)
    useEffect(() => {
        const  isloggenIn = getIsAuth()
        setLoggedOut(isloggenIn)

    }, [])


    return !loggedOut? (
        <div>
     
             <Menu style = {{border:"none"}}  mode={mode}>
        <Menu.Item key="mail">
          <NavLink to="/login">Signin</NavLink>
        </Menu.Item>
        <Menu.Item key="app">
          <NavLink to="/signup">Signup</NavLink>
        </Menu.Item>
      </Menu>
        </div>
    ):(
        <Menu style = {{border:"none"}} mode={mode}>

       <Menu.Item title = "Dashboard"  href = "/dashboard" icon = {<DashboardOutlined />}>
             <NavLink to = "/dashboard">Dashboard</NavLink>
             </Menu.Item >

       <Menu.Item title = "Dashboard"  href = "/dashboard" icon = {<DownloadOutlined />}>
             <NavLink to = "/asset-owner-dashboard">Downloads</NavLink>
             </Menu.Item >
      </Menu>
    )
}

export default RightMenu

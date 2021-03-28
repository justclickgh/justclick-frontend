import React, { useEffect, useState } from 'react';
import { Menu} from 'antd';
import 'antd/dist/antd.css'
import {DashboardOutlined, DownloadOutlined} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import getIsAuth from '../../../utils/getIsAuth';
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
          <a href="/login">Signin</a>
        </Menu.Item>
        <Menu.Item key="app">
          <a href="/signup">Signup</a>
        </Menu.Item>
      </Menu>
        </div>
    ):(
        <Menu style = {{border:"none"}} mode={mode}>

       <Menu.Item title = "Dashboard"  href = "/dashboard" icon = {<DashboardOutlined />}>
             <Link to = "/dashboard">Dashboard</Link>
             </Menu.Item >

       <Menu.Item title = "Dashboard"  href = "/dashboard" icon = {<DownloadOutlined />}>
             <Link to = "/asset-owner-dashboard">Downloads</Link>
             </Menu.Item >
      </Menu>
    )
}

export default RightMenu

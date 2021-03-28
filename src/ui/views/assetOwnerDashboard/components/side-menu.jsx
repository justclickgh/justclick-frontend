import React from 'react'
import {  Divider, Menu } from 'antd'
import {Link} from 'react-router-dom'
import logo from '../../../../assets/images/logo-2.webp'
// import {useHistory} from 'react-router-dom'
// import { DashboardOutlined } from '@ant-design/icons'
import '../styles/index.css'
const SideMenu = () => {
    return (
       
            <Menu id = "side-bar" mode = "vertical-left"  >
               
                <img className = "logo" src={logo} alt="" srcset=""/>
                <Divider/>
                 <Link to = "/" ><p className = "pl-3" >Home</p></Link>
                 <Divider/>
                <Menu.Item     key = "1" >
                    
                     <Link to = "/asset-owner-dashboard">
                    Statistics
                     </Link>
                </Menu.Item>
               
                <Menu.Item  key = "2" >
                     <Link to = "/asset-owner-dashboard/assets">
                    Assets
                     </Link>
                </Menu.Item>
                <Menu.Item key  = "3" > 
                 <Link to = "/asset-owner-dashboard/earnings">
                Earnings    
                </Link>
                </Menu.Item>
            </Menu>
      
    )
}

export default SideMenu

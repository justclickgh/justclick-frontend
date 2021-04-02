import React, { useEffect, useState } from 'react';
import { Button,  Dropdown, Menu} from 'antd';
import 'antd/dist/antd.css'
import {DashboardOutlined, PoundCircleOutlined} from '@ant-design/icons';
import getIsAuth from '../../../utils/getIsAuth';
import {  Link, NavLink} from 'react-router-dom';

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

       <Menu.Item title = "Dashboard"  href = "/dashboard" icon = {<DashboardOutlined style = {{fontSize:"1.2rem"}} />}>
             <NavLink to = "/dashboard">Dashboard</NavLink>
             </Menu.Item >


             <Dropdown arrow overlay = {(
               <Menu>
                 <Menu.SubMenu key = "0.1" title = "Freelancer" >
                     <Menu.Item key  = "0">
                   <Link to = "/freelancer" >Getting Started</Link>
                 </Menu.Item>
                 <Menu.Item key  = "1">
                   <Link to = "/freelancer/register" >Freelancer registration</Link>
                 </Menu.Item>
                 </Menu.SubMenu>


                  <Menu.SubMenu key = "0.2" title = "Upload assets" >
                     <Menu.Item key  = "0">
                   <Link to = "/asset_owner" >Getting Started</Link>
                 </Menu.Item>
                 <Menu.Item key  = "1">
                   <Link to = "/asset_owner/register" >Assets Uploader registration</Link>
                 </Menu.Item>
                 </Menu.SubMenu>

                
               </Menu>
             )}  >
               <Button style = {{border:"none",background:"none",boxShadow:"none"}} icon ={<PoundCircleOutlined style = {{fontSize:"1.2rem"}} />} > Busuiness Center</Button>
             </Dropdown>
      </Menu>
    )
}

export default RightMenu

import React, { Component } from 'react';
import LeftMenu from './LeftMenu'
import RightMenu from './RightMenu'
import { Drawer, Button, Divider } from 'antd';
import './navbar.css'
import logo from '../../../assets/images/logo-2.webp';
import { MenuOutlined } from '@ant-design/icons';
import {Link}  from 'react-router-dom'

class Navbar extends Component {
  state = {
    current: 'mail',
    visible: false
  }
  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };
onClose = () => {
    this.setState({
      visible: false,
    });
  };

  
render() {
    return (
        <>
        <nav className="menuBar">
          <div className="logo">
          <Link class="navbar-brand ml-auto" to="#">
          <img alt = "img" width = "100%"  src={logo} />
        </Link>
          </div>
          <div className="menuCon">
            <div className="leftMenu">
              <LeftMenu mode = "horizontal" />
            </div>
            <div className="rightMenu">
                <RightMenu mode = "horizontal" />
            </div>
            <Button  style = {{ background:"none", border:"1px solid black", }} className="barsMenu" type="primary " onClick={this.showDrawer}>
              {/* <span className="barsBtn"></span> */}
              <MenuOutlined  style = {{color:"black",fontSize:"1.5rem"}} />
              
            </Button>
            <Drawer
            //   title={ <div className="logo">
            //   <Link class="navbar-brand ml-auto" to="/">
            //   {/* <img alt = "img"  width = '100%' src={logo} /> */}
            // </Link>
            //   </div>}
            
              placement="left"
              closable={false}
              onClose={this.onClose}
              visible={this.state.visible}
            >
             <Link class="navbar-brand ml-auto" to="/">
             <img alt = "img"  width = '80%' src={logo} />
             </Link>
              <Divider/>
              <LeftMenu mode = "vertical" />
              <RightMenu  mode = "vertical" />
            </Drawer>
        </div>
        </nav>
        </>
    );
  }
}
export default Navbar;
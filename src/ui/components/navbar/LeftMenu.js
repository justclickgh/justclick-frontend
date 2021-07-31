import React, { Component } from 'react';
import { Menu } from 'antd';
// import '../stepsPart2/node_modules/antd/dist/antd.css'
import './navbar.css'
import {  NavLink} from 'react-router-dom';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
class LeftMenu extends Component {
  render() {
    return (
   <Menu style = {{border:"none"}} mode={this.props.mode}>
       <Menu.Item key="mail">
          <NavLink to="/">Home</NavLink>
        </Menu.Item>
        <SubMenu title={<span>Services</span>}>
          <MenuItemGroup >
            <Menu.Item key="setting:1"><NavLink to="/jobs">Jobs</NavLink></Menu.Item>
            <Menu.Item key="setting:2"><NavLink to="/services/photography">Photography</NavLink></Menu.Item>
            <Menu.Item key="setting:3"><NavLink to="/services/graphic-design">Graphic Design</NavLink></Menu.Item>
            {/* <Menu.Item key="setting:4"><NavLink to="/services/mobile-and-web-developement">Web & Mobile Dev.</NavLink></Menu.Item> */}
            <Menu.Item key="setting:5"><NavLink to="/services/event-planning">Event Planning</NavLink></Menu.Item>
          </MenuItemGroup>

       
        
        </SubMenu>
    
        <SubMenu key = "10" title = {<span>Assets</span>}>
              <Menu.Item key="setting2:1">
                <NavLink  to = "/assets" > How it works  </NavLink>
            </Menu.Item>
            <Menu.Item key="setting2:2">
                <NavLink to = "/assets/graphic-design-template" > Graphic Design Templates  </NavLink>
            </Menu.Item>
              <Menu.Item key="setting2:3">
                <NavLink to = "/assets/source-codes" > Source Codes </NavLink>
            </Menu.Item>
              <Menu.Item key="setting2:4">
                <NavLink to = "/assets/ui-ux-designs" > UI/UX Designs </NavLink>
            </Menu.Item>
              <Menu.Item key="setting2:5">
                <NavLink  to = "/assets/photos" > Photographs</NavLink>
            </Menu.Item>
          </SubMenu>
        <SubMenu title={<span>More</span>}>
          <MenuItemGroup >
            <Menu.Item key="setting:3"><NavLink to="/about-us">About us</NavLink></Menu.Item>
            <Menu.Item key="setting:4"><NavLink to="/contact-us">Contact us</NavLink></Menu.Item>
            <Menu.Item key="setting:5"><NavLink to="/term-and-conditions">Terms & Condition</NavLink></Menu.Item>
          </MenuItemGroup>
        
        </SubMenu>
      </Menu>
    );
  }
}
export default LeftMenu;
import React, { Component } from 'react';
import { Menu } from 'antd';
// import '../stepsPart2/node_modules/antd/dist/antd.css'
import './navbar.css'
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
class LeftMenu extends Component {
  render() {
    return (
   <Menu style = {{border:"none"}} mode={this.props.mode}>
       <Menu.Item key="mail">
          <a href="/">Home</a>
        </Menu.Item>
        <SubMenu title={<span>Services</span>}>
          <MenuItemGroup >
            <Menu.Item key="setting:1"><a href="/jobs">Jobs</a></Menu.Item>
            <Menu.Item key="setting:2"><a href="/services/photography">Photography</a></Menu.Item>
            <Menu.Item key="setting:3"><a href="/services/graphic-design">Graphic Design</a></Menu.Item>
            {/* <Menu.Item key="setting:4"><a href="/services/mobile-and-web-developement">Web & Mobile Dev.</a></Menu.Item> */}
            <Menu.Item key="setting:5"><a href="/services/event-planning">Event Planning</a></Menu.Item>
          </MenuItemGroup>

       
        
        </SubMenu>
    
        <SubMenu key = "10" title = {<span>Assets</span>}>
              <Menu.Item key="setting2:1">
                <a  href = "/assets" > How it works  </a>
            </Menu.Item>
            <Menu.Item key="setting2:2">
                <a href = "/assets/graphic-design-template" > Graphic Design Templates  </a>
            </Menu.Item>
              <Menu.Item key="setting2:3">
                <a href = "/assets/source-codes" > Source Codes </a>
            </Menu.Item>
              <Menu.Item key="setting2:4">
                <a href = "/assets/ui-ux-designs" > UI/UX Designs </a>
            </Menu.Item>
              <Menu.Item key="setting2:5">
                <a  href = "/assets/photos" > Photographs</a>
            </Menu.Item>
          </SubMenu>
        <SubMenu title={<span>More</span>}>
          <MenuItemGroup >
            <Menu.Item key="setting:3"><a href="/about-us">About us</a></Menu.Item>
            <Menu.Item key="setting:4"><a href="/contact-us">Contact us</a></Menu.Item>
            <Menu.Item key="setting:5"><a href="/term-and-conditions">Terms & Condition</a></Menu.Item>
          </MenuItemGroup>
        
        </SubMenu>
      </Menu>
    );
  }
}
export default LeftMenu;
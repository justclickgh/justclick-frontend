import { NotificationOutlined } from '@ant-design/icons'
import React from 'react'
import profile from '../../../../assets/images/profile.png'

const HeaderContent = () => {
    return (
        <div className  = "header-content">
            <div className="full-name-component">
                <p>Thomas Sarpong</p>
            </div>
            <NotificationOutlined />
           <div className="img-component">
           <img width = "5%" src={profile} alt="" srcset=""/>
           </div>
        </div>
    )
}

export default HeaderContent

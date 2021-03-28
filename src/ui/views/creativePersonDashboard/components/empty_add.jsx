import React from 'react'
import empty_image from '../../../../assets/images/empty_white.png'
import '../../../../assets/css/empty_add.css'
import { Button } from 'antd'
const EmptyAdd = ({label,onClick,btn_label}) => {
    return (
        <div>
            <div className="image-part">
                <img  src={empty_image} alt="" srcset=""/>
            </div>
            <div className="footer-part">
                <p className = "text-center p-2"> {label} </p>
            </div>
            <div className=" text-center button-part">
                <Button onClick = {onClick}>{btn_label}</Button>
            </div>
            
        </div>
    )
}

export default EmptyAdd

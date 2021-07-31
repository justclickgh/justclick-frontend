import React from 'react'
import '../../../../assets/css/empty_add.css'
import { Button } from 'antd'


const empty_image = 'https://justclick-backend-statics.s3.amazonaws.com/fe-statics/images/empty_white.png'
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

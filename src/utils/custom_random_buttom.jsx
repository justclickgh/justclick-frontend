import React from 'react'
import '../assets/css/custom_random_buttom.css'

const CustomRandomButtom = ({label,onclick}) => {
    return (
    <button className = "rounded-botton" onclick = {onclick} >{label}</button>
    )
}

export default CustomRandomButtom

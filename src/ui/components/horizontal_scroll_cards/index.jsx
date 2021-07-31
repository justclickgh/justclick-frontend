import React from 'react'
import {   Image } from 'antd'
import './index.css'
import { Card } from 'react-bootstrap'
import { testimonies } from '../../../utils/generate_Testimonials'
const TestimonialCard = ({image}) => {
    return (
        <Card  cover = {<Image src = {image} />}  style = {{width:"300px"}} >
                <Image width = "100%" src = {image} />
        </Card>
    )
}

const HorizontalScrollCards = () => {
    return (
        <div className = "my-contanter">
            <div className="wrapper-2">
                {
                   testimonies.map(testimony=>(
                       <>
                       <div className="item">
                           <TestimonialCard image = {testimony.image}  date = {testimony.date} />
                       </div>
                       
                       </>
                   ))
                }
            </div>
        </div>
    )
}

export default HorizontalScrollCards

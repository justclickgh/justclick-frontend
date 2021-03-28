import {  RightOutlined } from '@ant-design/icons'
import { Image } from 'antd'
import React from 'react'
import { Col,Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../styles/projects-part.css'


import photo3 from '../../../../assets/images/photography3.jpg'
import photo2 from '../../../../assets/images/photography2.jpg'
import photo1 from '../../../../assets/images/photography1.jpg'

export const projects = [1,2,3,4,5,6]

const projects2 = [
    {
        id:1,
        image:photo1
    },
        {
        id:2,
        image:photo2
    },
        {
        id:3,
        image:photo3
    },
        {
        id:4,
        image:photo1
    },
]


const PhotographyProjectsPart = () => {
    return (
        <div className = "my-5">
            <div className="top-part my-2 container" >
                <h6 >
                    Photgraphy Projects
                </h6>

                <Link>
                    <small style = {{color:"green",lineHeight:"0"}} >View All <RightOutlined  style = {{color:"green",lineHeight:"0",fontSize:"1rem"}}/> </small>
                </Link>
            </div>

            <div className="container">
                <Row className = "mx-auto" >
                    {projects2.slice(0,3).map(project => <Col key ={project.id}  className = "my-2" xs = "12" sm = "6" md = "6"  lg = "4" >
                        <Image height = "100%" src = {project.image}  />
                    </Col>)}
                </Row>
               
            </div>
            
        </div>
    )
}

export default PhotographyProjectsPart

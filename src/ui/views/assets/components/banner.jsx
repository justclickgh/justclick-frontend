import { Button } from 'antd'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../styles/top-part.css'

const design2 = 'https://justclick-backend-statics.s3.amazonaws.com/fe-statics/design2.png'
const Banner = () => {
    return (
            
        <div className = "mx-auto" style = {{width:"80%"}} >

               
            <Row>
                <Col  xs = "12" sm = "6">
                    <img width="100%" src={design2} alt="" srcset=""/>
                </Col>
                <Col className xs = "12" sm = "6">
                    <h1 className = "main-title" >Download assets</h1>
                    <div className="inner-part">
                         <p className = "title-paragraphy">Get downloads of free source code, design templates, ui and Ux design for both pro and free version. </p>
                        <Link to="/assets" >
                            <Button shape="round" style={{ color: "#fff", backgroundColor: "green", border: "none" }} size="large" >
                                Get Started
                         </Button>
                         </Link>
                         
                    </div>
                   

                </Col>
               
            </Row>
        </div>
            
    )
}

export default Banner

import React from 'react'
import {Col, Container, Row } from 'react-bootstrap'
import '../../../assets/css/intro_part.css'
import { Button } from 'antd'
import { Link } from 'react-router-dom'


const creative = 'https://justclick-backend-statics.s3.amazonaws.com/fe-statics/creative.png'

const IntroPart = () => {
    return (
        <div style = {{height:"50vh"}} className = "mt-4">
          <Container className = "main-container" >
          <Row>
 
              
                <Col xs = "12" sm = "6" lg = "6" >
                    <img height = "80%" className = "starter-image"src={creative} alt="" srcset=""/>
                </Col>
                <Col xs = "12" sm = "6" lg = "6" >
                    <div><h2 className = "main-title" > Work with highly-efficient freelance talent from around the world.</h2></div>
                    <div>
                        <p>Take control of your project with JUSTCLICKGH
                            <br/> Pay securely and confidently.
                        </p>
                    </div>
                        <Link to="/dashboard/jobs" >
                            <Button  shape="round" style={{ color: "white", backgroundColor: "green", height: "50px", width: "150px", paddingTop: ".5em" }} >Hire Us</Button>

                    </Link>
               
                </Col>
            </Row>
          </Container>
        </div>
    )
}

export default IntroPart

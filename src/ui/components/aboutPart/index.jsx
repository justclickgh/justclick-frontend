import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CustomRandomButtom from '../../../utils/custom_random_buttom'
import '../../../assets/css/intro_part.css'

const creative = 'https://justclick-backend-statics.s3.amazonaws.com/fe-statics/images/creative.png'

const AboutPart = () => {
    return (
        <div className = "mt-4">
        <Container>
        <Row>

            
              <Col xs = "12" sm = "6" lg = "6" >
                  <img className = "starter-image"src={creative} alt="" srcset=""/>
              </Col>
              <Col xs = "12" sm = "6" lg = "6" >
                  <div><h2> About Justclick </h2></div>
                  <div>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio doloribus itaque animi cu  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio doloribus itaque animi cu Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio doloribus itaque animi cu</p>
                  </div>
                  <CustomRandomButtom label = "Hire us" onclick = {(e)=>{}} />
              </Col>
          </Row>
        </Container>
      </div>
    )
}

export default AboutPart

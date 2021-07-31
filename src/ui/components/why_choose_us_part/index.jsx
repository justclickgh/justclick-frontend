import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CustomRandomButtom from '../../../utils/custom_random_buttom'

const problemSolving = "https://justclick-backend-statics.s3.amazonaws.com/fe-statics/problem_solving.png"
const WhyChooseUsePart = () => {
    return (
           <div className = "my-5">
          <Container className = "my-5">
          <Row>
                <Col xs = "12" sm = "6" lg = "6" >
                    <img className = "starter-image"src={problemSolving} alt="" srcset=""/>
                </Col>
                <Col xs = "12" sm = "6" lg = "6" >
                    <div><h2>Why choose us </h2></div>
                    <div>
                        <p>We give you the best Designs as well as flexible,affordable & secured  payment. Good Designs elevates a business and builds recognition and loyalty.</p>
                        
                    </div>
                    <CustomRandomButtom label = "Hire us" onclick = {(e)=>{}} />
                </Col>
            </Row>
          </Container>
        </div>

       
    )
}

export default WhyChooseUsePart

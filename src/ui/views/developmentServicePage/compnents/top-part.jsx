import React from 'react'
import { Col, Row } from 'react-bootstrap'
import '../styles/top-part.css'


const design2 = 'https://justclick-backend-statics.s3.amazonaws.com/fe-statics/design2.png'
const TopPart = () => {
    return (
            
        <div className = "mx-auto" style = {{width:"80%"}} >

               
            <Row>
                <Col  xs = "12" sm = "6">
                    <img width="100%" src={design2} alt="" srcset=""/>
                </Col>
                <Col className xs = "12" sm = "6">
                    <h1 className = "main-title" >Web & Mobile Developer</h1>
                    <p className = "title-paragraphy">Meet our skilled mobile and web developers  and espperience their best jobs done.</p>

                </Col>
               
            </Row>
        </div>
            
    )
}

export default TopPart

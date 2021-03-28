import { Button } from 'antd'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import design2 from '../../../../assets/images/illustration_design.jpg'
import '../styles/top-part.css'
const TopPart = () => {
    return (
            
        <div className = "mx-auto" style = {{width:"80%"}} >

               
            <Row>
                <Col className = "m-auto"  xs = "12" sm = "6">
                    <img width="100%" src={design2} alt="" srcset=""/>
                </Col>
                <Col xs = "12" sm = "6">
                    <h3 className = "main-title" >Get the Best Graphic Designers in Ghana</h3>
                    <p className = "title-paragraphy">Graphic designers are trained to be able to inform, persuade, direct, organize, entertain and attract attention with their designs. They combine art and technology in order to communicate a message. 
                    They do this through the strategic placement of images and text.
                    </p>
                     <Button href = "/services/graphic-design/all-jobs"  id = "footer-btn" className = "mr-1"     style = {{backgroundColor:" rgb(70, 170, 70)",color:"#fff",width:"300px",height:"45px",paddingTop:".5em"}}  shape = "round" >See Our Best works</Button>


                </Col>
                
               
            </Row>

        </div>
            
    )
}

export default TopPart

import { Card, Divider } from 'antd'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './index.css'
import Carousel from "react-multi-carousel";
import { testimonies } from '../../../utils/generate_Testimonials'
import "react-multi-carousel/lib/styles.css";

const TestimonialPart = () => {

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
   
    return (
        <>
        <div style = {{backgroundColor:"rgb(250,250,250)"}} className = "">

        
        <div className="container">
           <Row>
           <Col sm = "12">
               <h3 className = "header text-center " >
                   Testimonials
               </h3>
               <Divider/>
            </Col> 

           <Col sm = "12">
               <Carousel
               autoPlay
               responsive = {responsive}
               >
                   {testimonies.map(testimony=>
                    <Card>
                        <img alt = "testimony" width = "100%" src = {testimony.image}/>
                    </Card>
                    )}

               </Carousel>
            {/* <HorizontalScrollCards  /> */}
            </Col>
            </Row> 
        </div>
        </div>
        </>
    ) 
           
           
}

export default TestimonialPart

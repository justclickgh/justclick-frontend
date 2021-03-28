import { Button, Card, Divider } from 'antd'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import photo from '.././../../../assets/images/photo.png'
import ui_ux_design from '.././../../../assets/images/ui_ux_design.png'
import source_codes from '.././../../../assets/images/source_codes.png'
import logo_design from '.././../../../assets/images/logo_design.png'
import Banner from './banner'


const GettingStarted = () => {
    return (
        <div>
            <Banner/>
        <div className = "bg-light py-3 my-4">
            <Row>
                <Col sm = "12" xs = "12" >
                    <h2 className = "mt-5 text-center" >Getting Started</h2>

                </Col>
                <Col  sm = "12" xs = "12">
                    <p  className =  "container text-center pb-3" > Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam rem ipsum eum fugiat necessitatibus corporis </p>
                </Col>
            </Row>
            <Row className = "container mx-auto ">
                <Col xs = "12" sm = "6" lg = "3" >
                    <Card 
                    
                    
                    cover = {<img alt = "img" width = "100%" src = {photo} />}
                     className = "px-1 my-1"
                      hoverable 
                      title = "Photography Assets" 
                      >  
                        
                        <Row>
                            <Col>

                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio esse consequatur veritatis quis praesentium, laboriosam minima sequi </p>
                            </Col>
                        </Row>
                        <Divider/>
                            <Button  href = "/assets/photos" style = {{backgroundColor:"#3CA859",color:"#fff"}} size = "large" shape = "round">
                                  Download Photos
                              </Button>                    
                            </Card>
                </Col>
                        <Col xs = "12" sm = "6" lg = "3" >
                    <Card 
                    
                    
                    cover = {<img alt = "img" width = "100%" src = {source_codes} />}
                     className = "px-1 my-1"
                      hoverable 
                      title = "Download Source codes" 
                      >  
                        
                        <Row>
                            <Col>

                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio esse consequatur veritatis quis praesentium, laboriosam minima sequi </p>
                            </Col>
                        </Row>
                        <Divider/>
                            <Button href = "/assets/source-codes"  style = {{backgroundColor:"#3CA859",color:"#fff"}} size = "large" shape = "round">
                                  Download codes
                              </Button>                    
                            </Card>
                </Col>
                        <Col xs = "12" sm = "6" lg = "3" >
                    <Card 
                    
                    
                    cover = {<img alt = "img" width = "100%" src = {logo_design} />}
                     className = "px-1 my-1"
                      hoverable 
                      title = "Download Design Templates" 
                      >  
                        
                        <Row>
                            <Col>

                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio esse consequatur veritatis quis praesentium, laboriosam minima sequi </p>
                            </Col>
                        </Row>
                        <Divider/>
                            <Button href = "/assets/graphic-design-template" style = {{backgroundColor:"#3CA859",color:"#fff"}} size = "large" shape = "round">
                                  Download designs
                              </Button>                    
                            </Card>
                </Col>
                        <Col xs = "12" sm = "6" lg = "3" >
                    <Card 
                    
                    
                    cover = {<img alt = "img" width = "120%" src = {ui_ux_design} />}
                     className = "px-1 my-1"
                      hoverable 
                      title = "UI/UX Designs & Assets" 
                      >  
                        
                        <Row>
                            <Col>

                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio esse consequatur veritatis quis praesentium, laboriosam minima sequi  , laboriosam minima sequi  , laboriosam minima sequi v , laboriosam minima sequi , laboriosam minima sequi , laboriosam minima sequi </p>
                            </Col>
                        </Row>
                        <Divider/>
                            <Button href = "href/ui-ux-designs" style = {{backgroundColor:"#3CA859",color:"#fff"}} size = "large" shape = "round">
                                  Download designs
                              </Button>                    
                            </Card>
                </Col>

                
            </Row>
            
            
            
        </div>
        </div>
    )
}

export default GettingStarted

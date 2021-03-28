import { Avatar, Button, Card, Comment, Rate, Tooltip } from 'antd'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import desing1 from '../../../../assets/images/design_image_1.JPG'
import {planned_items} from '../../eventPlanningServicePage/components/event-planners'
const DesignersPart = () => {
    return (
        <div className = "container my-5 bg-light">
            <div className="my-5 p-3">
                <Row>
                    <Col>
                <h5>Meet our top developers </h5>

                    </Col>
                    <Col>
                          <Button style = {{color:"green",border:"none",position:"absolute",right:"15%"}} >
                                View all
                        </Button>
                    </Col>
                </Row>
                <Row>
                    {planned_items.slice(0,6).map(item=>
                    <Col  className = "my-2"  xs = "12" sm = "6" lg ="4" >

                        <Card  className = "p-4" >
                            <Comment
                             avatar = {<Avatar  src = {desing1} /> } 
                             author = "Thomas Sarpong"
                             content = "Web developer with over 5 years wroking experience and has worked on 900 projects"
                            datetime = {`Joined on 19-12-2020`}
                             >
                                 <Row>
                                     <Col sm = "4" >
                                     <p>Rate - </p>
                                     
                                     </Col>
                                     <Tooltip title = "from 5 reviews" >
                                     <Col>
                                        <Rate  style = {{fontSize:".9rem",color:"green"}} defaultValue = "4" />
                                     </Col>
                                     </Tooltip>
                                 </Row>

                             </Comment>
                        </Card>
                    </Col>
                        )}
                    
                </Row>
          
            </div>            
        </div>
    )
}

export default DesignersPart

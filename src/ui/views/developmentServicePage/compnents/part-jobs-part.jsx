import { Image ,Button,Card, Divider, Rate} from 'antd'
import React from 'react'
import {  Col, Row } from 'react-bootstrap'
import desing1 from '../../../../assets/images/ui-1.webp'
import {planned_items} from '../../eventPlanningServicePage/components/event-planners'

const PastJobsPart = () => {
    return (
        <div className = "container mt-5 bg-light">
            <div className="mt-5 p-3">
                <Row>
                    <Col>
                <h5>Highly rated jobs</h5>

                    </Col>
                    <Col>
                          <Button style = {{color:"green",border:"none",position:"absolute",right:"15%"}} >
                                View all
                        </Button>
                    </Col>
                </Row>
          
            </div>

            <Row>
                {planned_items.slice(0,3).map(item=>                
                <Col  className = "my-2"  xs = "12" sm = "6" lg ="4" >
                <Card  cover = {<Image  preview = {true} width = "100%" src={desing1} alt="" srcset=""/>} >
                    <Card.Meta title = "Some title given randmly" description  = " sit amet consectetur, adipisicing elit. Labore modi nemo amet, fugit totam error maxime quis beatae cumque quidem eaque, corporis dicta, itaque optio commodi."  />
                    <Divider/>
                    <small>Posted at: 20-12-2020 </small>
                    <span className = "ml-3"> <small>Rate </small> -</span>
                    <Rate className = "ml-2" defaultValue = {4} style = {{fontSize:".9rem",color:"green"}} />
                    <br/>
                    <small>Posted by: Thomas Sarpong</small>
                </Card>
                
                </Col>)}

            </Row>
            
        </div>
    )
}

export default PastJobsPart

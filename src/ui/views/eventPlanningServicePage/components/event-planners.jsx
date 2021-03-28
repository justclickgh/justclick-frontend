import { Button, Card,Image, Rate,Tag } from 'antd'

import React from 'react'
import { Col,Row } from 'react-bootstrap'
import photo from '../../../../assets/images/photgraphy.jpg'


export const planned_items = [
    {
        id:1,
        name:"Kingsley Adotey",
        prifile_image:photo,
        jobs_done:15,
        rate:4,
        tags:[
            'Wedding planner',
            'Party planner',
            'Event planner'
        ],
        description:"We plan events for you. We are the best becouse we everything the best way"
    },
      {
        id:2,
        name:"Jesus Freak Ideas Event",
        prifile_image:photo,
        jobs_done:20,
        rate:4,
        description:"We unsure you are linked to the best vendors in the country. We plan you events with and for you every step of the way because we do everything the right way",
        tags:[
            'Wedding planner',
            'Party planner',
            'Event planner'
        ],
    },
    {
        id:3,
        name:"Ristle",
        prifile_image:photo,
        jobs_done:15,
        rate:4,
        description:"Boutique and wedding events. Styling, design, decoration and more",
        tags:[
            'Wedding planner',
            'Party planner',
            'Event planner'
        ],
    },
      {
        id:2,
        name:"Ash Evevnts",
        prifile_image:photo,
        jobs_done:20,
        rate:4,
        description:"Wedding events. Styling, design, decoration and more",
        tags:[
            'Wedding planner',
            'Party planner',
            'Event planner'
        ],    },

]


const EventPlanners = () => {
    return (
        <div className="">

        
        <div className = "container py-5"  >
        <Row className = "mt-5">
                    <Col xs = "8" sm = "6" >
                        <h6>Meet our highly Skilled Top Event Planners </h6>

                    </Col>
                    <Col xs = "4" sm = "6">
                          <Button href = "/services/event-planning/all-planners" style = {{color:"green",border:"none",position:"absolute",right:"15%"}} >
                                View all
                        </Button>

                    </Col>
            </Row>
            <Row>
                {planned_items.slice(0,3).map(item=>      
            <Col  className = "my-2"  xs = "12" sm = "6" lg ="4"  >
                <Card style = {{height:"420px"}} hoverable cover = { <Image  width = "100%" src={photo} alt="" srcset=""/>}  >
                   <h6>{item.name}</h6>
                   <p className = "" style = {{lineHeight:".8rem",letterSpacing:".0001rem", fontSize:".85rem"}} >{item.description}</p>
                    <Row>
                        <Col xs  = "5" sm=  "5" >
                        <p style = {{lineHeight:".8rem",letterSpacing:".0001rem", fontSize:".85rem"}}><b><Tag color = "green" >Event Planner</Tag> </b></p>
                        </Col>
                        <Col>
                        <p style = {{lineHeight:".8rem",letterSpacing:".0001rem", fontSize:".85rem"}}><b>{item.jobs_done} </b> jobs done</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col l xs  = "2" sm=  "2"  >
                            Rate
                        </Col>
                        <Col>
                           <Rate disabled defaultValue = {item.rate}  style ={{color:"green",fontSize:".7rem"}}/>
                        </Col>
                        <Col>
                        <Button style = {{ color:"green",borderColor:"green" }} shape = "round"  >Hire us</Button>
                        </Col>
                    </Row>
                    
                    
                </Card>
                
                </Col>)}


            </Row>

            
        </div>
        </div>
    )
}

export default EventPlanners

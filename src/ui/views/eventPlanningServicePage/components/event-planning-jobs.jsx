

import { Image ,Button,Card, Rate, Tag} from 'antd'
import React from 'react'

import { Col, Row } from 'react-bootstrap'
import wedding_planning from '../../../../assets/images/wedding_planning.jpeg'
import wedding_planning2 from '../../../../assets/images/wedding_planning2.jpeg'
import party_planning from '../../../../assets/images/party_planning2.jpeg'
import party_planning2 from '../../../../assets/images/party_planning2.jpeg'
import event_planning from '../../../../assets/images/event_planning3.jpeg'
import event_planning2 from '../../../../assets/images/event_planning2.jpeg'
import event_planning3 from '../../../../assets/images/event_planning3.jpeg'


export const planned_designs =[
    {
        id:1,
        name:"Jesus Freak Ideas Event",
        image:wedding_planning,
        tags:[
            'Planning',
            'Event planning',
            'Wedding planning'
        ]
    },
        {
        id:2,
        name:"Kingsley Adotey",
        image:wedding_planning2,
        tags:[
            'Planning',
            'Event planning',
            'Wedding planning'
        ]
    },
        {
        id:3,
        name:"Ristle",
        image:party_planning,
        tags:[
            'Planning',
            'Event planning',
            'Party planning'
        ]
    },
        {
        id:4,
        name:"Jesus Freak Ideas Event",
        image:party_planning2,
        tags:[
            'Planning',
            'Event planning',
            'Party planning'
        ]
    },
        {
        id:5,
        name:"Ristle",
        image:event_planning,
        tags:[
            'Planning',
            'Event planning',
        ]
    },
        {
        id:6,
        name:"Kingsley Adotey",
        image:event_planning2,
        tags:[
            'Planning',
            'Event planning',
        ]
    },
        {
        id:7,
        name:"Jesus Freak Ideas Event",
        image:event_planning3,
        tags:[
            'Planning',
            'Event planning',
        ]
    }
]

const EventPlanningJobs = () => {
    return (
        <div className = "container mt-5 bg-light">
            <div className="mt-5  p-3">
                <Row>
                    <Col>
                <h6>Past completed jobs by our best designers </h6>

                    </Col>
                    <Col>
                          <Button href = "/services/event-planning/all-jobs" style = {{color:"green",border:"none",position:"absolute",right:"15%"}} >
                                View all
                        </Button>
                    </Col>
                </Row>
          
            </div>

            <Row>


            <Row>
                {planned_designs.slice(0,3).map(item=>      
            <Col  className = "my-2"  xs = "12" sm = "6" lg ="4"  >
                <Card hoverable cover = { <Image  height= "250px" width = "100%" src={item.image} alt="" srcset=""/>}  >
                   <p className = "" style = {{lineHeight:".8rem",letterSpacing:".0001rem", fontSize:".85rem"}} >
                       {item.tags.map(tag=><Tag color ="green" >{tag}</Tag>)}
                   </p>
                    <Row>
                        <Col xs  = "5" sm=  "5" >
                        <p style = {{lineHeight:".8rem",letterSpacing:".0001rem", fontSize:".85rem"}}><b>Planner </b></p>
                        </Col>
                        <Col>
                        <p style = {{lineHeight:".8rem",letterSpacing:".0001rem", fontSize:".85rem"}}>{item.name}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col l xs  = "5" sm=  "5"  >
                            Rate
                        </Col>
                        <Col>
                        
                           <Rate disabled defaultValue = {4}  style ={{color:"green",fontSize:".9rem"}}/>


                        </Col>
                    </Row>
                    
                    
                </Card>
                
                </Col>)}


            </Row>
               
            </Row>
            
        </div>
    )
}

export default EventPlanningJobs

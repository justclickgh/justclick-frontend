import { Image, Button, Card, Rate, Tag } from 'antd'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
const desing1 = 'https://justclick-backend-statics.s3.amazonaws.com/fe-statics/Christopher.jpg'
const desing2 = 'https://justclick-backend-statics.s3.amazonaws.com/fe-statics/Brown Curtis.jpg'
const desing3 = 'https://justclick-backend-statics.s3.amazonaws.com/fe-statics/Kingsley.jpg'
const desing4 = 'https://justclick-backend-statics.s3.amazonaws.com/fe-statics/Phil Ayaric.jpg'
// import {items} from '../../eventPlanningServicePage/components/event-planners'


const items = [
    {
        id:1,
        name:"Kingsley Adotey",
        prifile_image:desing3,
        jobs_done:15,
        rate:4,
        speciality: [
            "Marketing & Advertising Graphic Designer",
            "Packaging Graphic designer",
            "Illustration Graphic designer"
        ]
    },
      {
        id:2,
        name:"Brown Curtis Odartey Lamptey Jnr.",
        prifile_image:desing2,
        jobs_done:20,
        rate:4,
        speciality: [
            "Marketing & Advertising Graphic Designer",
            "Packaging Graphic designer",
            "Illustration Graphic designer"
        ]
    },
    {
        id:3,
        name:"Phil Ayaric",
        prifile_image:desing4,
        jobs_done:15,
        rate:4,
        speciality: [
            "Marketing & Advertising Graphic Designer",
            "Packaging Graphic designer",
            "Illustration Graphic designer"
        ]
    },
      {
        id:2,
        name:"Christopher Tetteh",
        prifile_image:desing1,
        jobs_done:15,
        rate:4,
        speciality: [
            "Marketing & Advertising Graphic Designer",
            "Packaging Graphic designer",
            "Illustration Graphic designer"
        ]
    },

]


const DesignersPart = () => {
    return (
        <div className = "container my-5 bg-light">
            <div className="my-5 p-3">
                <Row>
                    <Col>
                <h5>Meet our highly rated designers </h5>

                    </Col>
                    <Col>
                          <Button style = {{color:"green",border:"none",position:"absolute",right:"15%"}} >
                                View all
                        </Button>
                    </Col>
                </Row>
                <Row>
                    {items.slice(0,6).map(item=>
               <Col  className = "my-2"  xs = "12" sm = "6" lg ="4"  >
                <Card hoverable  cover = { <Image  height = "300px" src={item.prifile_image} alt="" srcset=""/>}  >
                   <h6>{item.name}</h6>
                   <p className = "" style = {{lineHeight:".8rem",letterSpacing:".0001rem", fontSize:".85rem"}} >
                       
                       {item.speciality.slice(0,3).map(spec=> <Tag color = "green"  className = "mt-1" > {spec} </Tag> )}
                       
                        </p>
                    <Row>
                        <Col xs  = "5" sm=  "5" >
                        <p style = {{lineHeight:".8rem",letterSpacing:".0001rem", fontSize:".85rem"}}><b>Photographer </b></p>
                        </Col>
                        <Col>
                        <p style = {{lineHeight:".8rem",letterSpacing:".0001rem", fontSize:".85rem"}}><b>{item.jobs_done} </b> jobs done</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col  xs  = "2" sm=  "2"  >
                            Rate'-
                        </Col>
                        <Col  >
                        <Rate disabled defaultValue = {item.rate}  style ={{color:"green",fontSize:".7rem"}}/>

                        </Col>
                        <Col>
                            <Button shape = "round" style = {{color:"green",borderColor:"green"}} >Hire me</Button>
                        </Col>
                    </Row>
                    
                    
                </Card>
                
                </Col>
                        )}
                    
                </Row>
          
            </div>            
        </div>
    )
}

export default DesignersPart

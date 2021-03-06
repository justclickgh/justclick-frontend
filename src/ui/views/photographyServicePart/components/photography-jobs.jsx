

import { Image ,Button,Card, Rate, Tag} from 'antd'
import React from 'react'

import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const arerial_photography =  'https://justclick-backend-statics.s3.amazonaws.com/fe-statics/10 6. Arerial Photography.jpeg'
const food_photography =  'https://justclick-backend-statics.s3.amazonaws.com/fe-statics/food_photography.jpg'
const docmentation_photography =  'https://justclick-backend-statics.s3.amazonaws.com/fe-statics/9 5. Documentary Photography.jpg'
const event_photography =  'https://justclick-backend-statics.s3.amazonaws.com/fe-statics/8 4. Event Photography.jpg'
const commecial_photography =  'https://justclick-backend-statics.s3.amazonaws.com/fe-statics/11 7. Commercial Photography.jpg'
const coperate_photography =  'https://justclick-backend-statics.s3.amazonaws.com/fe-statics/12 8. Corperate Photography.jpg'
const potrait_photography =  'https://justclick-backend-statics.s3.amazonaws.com/fe-statics/7 3. Portrait Photography.jpg'


export  const photo_items = [
    {
        id:1,
        name:"Isaac K. Narh",
        prifile_image:arerial_photography,
        jobs_done:15,
        rate:4,
        speciality: [
            "Aeriel Photography",
            "photography",
        ]
    },
      {
        id:2,
        name:"Jeremiah Dzorkpe-Yevenyo",
        prifile_image:food_photography,
        jobs_done:20,
        rate:4,
        speciality: [
            "Food photography",
            "photography",
        ]
    },
    {
        id:3,
        name:"Michael Yeboah",
        prifile_image:docmentation_photography,
        jobs_done:20,
        rate:4,
        speciality: [
            "Photography",
            "Documentary photography",
        ]
    },
      {
        id:2,
        name:"Isaac K. Narh",
        prifile_image:event_photography,
        jobs_done:20,
        rate:4,
        speciality: [
            "Event photography",
            "photography",
        ]
    },
      {
        id:2,
        name:"Jeremiah Dzorkpe-Yevenyo",
        prifile_image:commecial_photography,
        jobs_done:20,
        rate:4,
        speciality: [
            "Commecial photography",
            "photography",
        ]
    },
      {
        id:2,
        name:"Michael Yeboah",
        prifile_image:coperate_photography,
        jobs_done:20,
        rate:4,
        speciality: [
            "Coperate photography",
            "photography",
        ]
    },
      {
        id:2,
        name:"Isaac K. Narh",
        prifile_image:potrait_photography,
        jobs_done:20,
        rate:4,
        speciality: [
            "Potrait photography",
            "photography",
        ]
    },
]

const PhotographyJobs = () => {
    return (
        <div className = "container mt-5 bg-light">
            <div className="mt-5  p-3">
                <Row>
                    <Col>
                <h6>Past completed jobs by our best photographs </h6>

                    </Col>
                    <Col>
                        <Link to="/services/photography/list-photographs" >
                            <Button style={{ color: "green", border: "none", position: "absolute", right: "15%" }} >
                                View all
                        </Button>
                    </Link>
                          
                    </Col>
                </Row>
          
            </div>

            <Row>
                {photo_items.slice(0,3).map(item=>
                    
        <Col  className = "my-2"  xs = "12" sm = "6" lg ="4" >
                <Card style = {{height:"400px" }} cover = {<Image  preview = {true} width = "100%" src={item.prifile_image} alt="" srcset=""/>}>
                    <p className = "" style = {{lineHeight:".8rem",letterSpacing:".0001rem", fontSize:".85rem"}} >
                        Tags:  {item.speciality.map(spec=><Tag color = "green" >{spec}</Tag>)}
                    </p>
                    <Row>
                        <Col xs  = "5" sm=  "5" >
                        <p style = {{lineHeight:".8rem",letterSpacing:".0001rem", fontSize:".85rem"}}><b>Photographer </b></p>
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
                        <Rate defaultValue = {4}  style ={{color:"green",fontSize:".9rem"}}/>

                        </Col>
                    </Row>                    
                </Card>
                
                </Col>
                    
                    )}

            </Row>
            
        </div>
    )
}

export default PhotographyJobs

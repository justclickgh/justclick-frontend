

import { Image ,Button,Card, Rate, Tag} from 'antd'
import React from 'react'

import { Col, Row } from 'react-bootstrap'
import arerial_photography from '../../../../assets/images/10 6. Arerial Photography.jpeg'
import food_photography from '../../../../assets/images/food_photography.jpg'
import docmentation_photography from '../../../../assets/images/9 5. Documentary Photography.jpg'
import event_photography from '../../../../assets/images/8 4. Event Photography.jpg'
import commecial_photography from '../../../../assets/images/11 7. Commercial Photography.jpg'
import coperate_photography from '../../../../assets/images/12 8. Corperate Photography.jpg'
import potrait_photography from '../../../../assets/images/7 3. Portrait Photography.jpg'


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
                          <Button href = "/services/photography/list-photographs" style = {{color:"green",border:"none",position:"absolute",right:"15%"}} >
                                View all
                        </Button>
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

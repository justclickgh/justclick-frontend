import { Button, Card,Image, Rate, Tag } from 'antd'
import React from 'react'
import { Col,Row } from 'react-bootstrap'
import photo from '../../../../assets/images/Julius.jpg'
import photo2 from '../../../../assets/images/Isaac.jpg'
import photo3 from '../../../../assets/images/Jeremaih.jpg'
import photo4 from '../../../../assets/images/Micheal.jpeg'

const items = [
    {
        id:1,
        name:"Isaac K. Narh",
        prifile_image:photo2,
        jobs_done:15,
        rate:4,
        speciality: [
            "Aeriel Photography",
            "Event Photography",
            "Food photography",
            "Wedding photography"
        ]
    },
      {
        id:2,
        name:"Jeremiah Dzorkpe-Yevenyo",
        prifile_image:photo3,
        jobs_done:20,
        rate:4,
        speciality: [
            "Potrait Photography",
            "Event Photography",
            "Food photography",
            "Documentary photography",
            "Wedding photography",
            "Videography"
        ]
    },
    {
        id:3,
        name:"Michael Yeboah",
        prifile_image:photo4,
        jobs_done:20,
        rate:4,
        speciality: [
            "Aeriel Photography",
            "Event Photography",
            "Food photography",
            "Wedding photography"
        ]
    },
      {
        id:4,
        name:"Julius Amoako",
        prifile_image:photo,
        jobs_done:20,
        rate:4,
        speciality: [
            "Potrait Photography",
            "Event Photography",
            "Food photography",
            "Documentary photography",
            "Wedding photography",
            "Videography"
        ]
    },

]
const Photographers = () => {
    return (
        <div className = "container" >
                    <Row className = "mt-5">
                    <Col sm = "7" >
                        <h6>Meet our highly Skilled Top Photographers </h6>

                    </Col>
                    <Col sm = "4">
                          <Button href = "/services/photography/list-photographers" style = {{color:"green",border:"none",position:"absolute",right:"15%"}} >
                                View all
                        </Button>

                    </Col>
            </Row>

            <Row>
                {items.slice(0,4).map(item=>
                    
            <Col  className = "my-2"  xs = "12" sm = "6" lg ="4"  >
                <Card hoverable  cover = { <Image  height = "300px" src={item.prifile_image} alt="" srcset=""/>}  >
                   <h6>{item.name}</h6>
                   <p className = "" style = {{lineHeight:".8rem",letterSpacing:".0001rem", fontSize:".85rem"}} >
                       
                      Tags: {item.speciality.slice(0,3).map(spec=> <Tag color = "green"  className = "mt-1" > {spec} </Tag> )}
                       
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
                        <Col l xs  = "2" sm=  "2"  >
                            Rate
                        </Col>
                        <Col>
                        <Rate disabled defaultValue = {item.rate}  style ={{color:"green",fontSize:".8rem"}}/>

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
    )
}

export default Photographers

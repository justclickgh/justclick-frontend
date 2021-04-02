import React from 'react'
import Banner from './banner'
import { Col, Container, Row } from 'react-bootstrap'
import { Button, Card, Image } from 'antd'
import { DownloadOutlined, EyeOutlined } from '@ant-design/icons'

const photo1 = 'https://justclick-backend-statics.s3.amazonaws.com/fe-statics/photography1.jpg'
const photo2 = 'https://justclick-backend-statics.s3.amazonaws.com/fe-statics/photography2.jpg'
const photo3 = 'https://justclick-backend-statics.s3.amazonaws.com/fe-statics/photography3.jpg'

export const photos = [
    {
        "id":1,
        "title":"Some random title here",
        "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, dicta laboriosam natus voluptatum asperiores quidem possimus voluptatem. Necessitatibus fugiat maiores eaque, tenetur facere corrupti quisquam ipsa reprehenderit delectus libero labore?",
        "image":photo1
    },
       {
        "id":2,
        "title":"Some random title here",
        "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, dicta laboriosam natus voluptatum asperiores quidem possimus voluptatem. Necessitatibus fugiat maiores eaque, tenetur facere corrupti quisquam ipsa reprehenderit delectus libero labore?",
        "image":photo2
    },
       {
        "id":3,
        "title":"Some random title here",
        "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, dicta laboriosam natus voluptatum asperiores quidem possimus voluptatem. Necessitatibus fugiat maiores eaque, tenetur facere corrupti quisquam ipsa reprehenderit delectus libero labore?",
        "image":photo3
    },
       {
        "id":4,
        "title":"Some random title here",
        "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, dicta laboriosam natus voluptatum asperiores quidem possimus voluptatem. Necessitatibus fugiat maiores eaque, tenetur facere corrupti quisquam ipsa reprehenderit delectus libero labore?",
        "image":photo1
    },
       {
        "id":5,
        "title":"Some random title here",
        "description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, dicta laboriosam natus voluptatum asperiores quidem possimus voluptatem. Necessitatibus fugiat maiores eaque, tenetur facere corrupti quisquam ipsa reprehenderit delectus libero labore?",
        "image":photo2
    },
]

const Photo = () => {
    return (
        <div>
            <Banner/>
            <div className=" bg-light ">

            
            <div className="text-center container mt-5">
                <h3 className = "py-5" > All photos </h3>

            </div>
            <Container>

            <Row>
                {photos.map(photo=><Col className = "my-1" xs = "12" sm = "12" md = "6" lg = "4" key = {photo.id} >
                    <Card cover = {<Image width = "100%" height = "300px" src = {photo.image} />} >
                        <p>{photo.title}</p>
                        <div style = {{width:"100%",height:"60px",overflow:"hidden"}}  >
                            <Row>
                                <Col xs = "11" sm = "11">
                                    <small style = {{textOverflow:"ellipsis"}} >{photo.description}</small>

                                </Col>
                                
                            </Row> 
                        </div>
                        <hr/> 
                        <Row>
                            <Col xl = "8" sm = "8" >
                                    <small>{`posted at: 12-12-2021`}</small> <br/>
                                    <small>{`posted by: Thomas Sarpong`}</small>

                            </Col>
                            <Col xl = "4" sm = "4" >
                                <Row>
                                    <Col xs = "6" sm = "6" >
                                        <Button  href = {`/assets/photos/${photo.id}`} style = {{borderColor:"green",padding:".4em",border:"none"}} >
                                            <EyeOutlined style = {{color :"green",fontSize :"1.2rem"}}   />
                                        </Button>
                                    </Col>
                                    <Col className = "mr-1" xs = "5" sm = "5" >
                                        <Button  style = {{borderColor:"green",padding:".4em",border:"none"}} >
                                            <DownloadOutlined style = {{color :"green",fontSize :"1.2rem"}}  />
                                        </Button>
                                    </Col>

                                </Row>

                            </Col>
                        </Row>
                        </Card>
                </Col>)}
            </Row>
        </Container>
        </div>
            
        </div>
    )
}

export default Photo

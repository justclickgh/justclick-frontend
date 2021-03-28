import { Image,Button, Card } from 'antd'
import React from 'react'
import { Col , Row} from 'react-bootstrap'
import {DownloadOutlined,HeartOutlined,ShareAltOutlined,CommentOutlined, EyeOutlined} from '@ant-design/icons'
import {photos} from './photo'


const PhotoDetail = ({match}) => {
    return (
        <div className = "container" >
          <div className="mx-2">

          
            <Row>
                <Col xs = "12" sm = "12" md = "12" lg ="7" >
                    <Image src = {photos[match.params.photo_id -1].image} />
                </Col>                
                <Col xs = "12" sm = "12" md = "12" lg = "5" >
                    <h2 className = " mt-5 " >The title for some here some</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente consectetur debitis necessitatibus molestiae fuga nihil neque tempora, nesciunt harum corporis voluptas maiores nam adipisci voluptates error rem dolor quo blanditiis.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam unde dolorem quaerat vitae quibusdam ducimus. Labore non assumenda, nobis, voluptas ex doloremque cumque omnis blanditiis amet qui maiores facere explicabo?
                    </p>
                    <div className="my-3">
                    <Button shape = "circle" style = {{ border:"none",fontSize:"1rem" }}  >
                        <HeartOutlined/>
                    </Button>
                     <Button shape = "circle" style = {{ border:"none",fontSize:"1rem" }}  >
                        <ShareAltOutlined/>
                    </Button>
                         <Button shape = "circle" style = {{ border:"none",fontSize:"1rem" }}  >
                        <CommentOutlined/>
                    
                    </Button>

                    <span className = "pl-3" >posted by: {`Thomas Sarpong`}</span>
                    </div>
                    <Button shape = "round" style = {{width:"100%",height : "2.5rem",borderColor:"green",color:"green"}} > <DownloadOutlined style = {{ fontSize:"1.3rem" }} /> Download</Button>
                    
                </Col>
         
            </Row>
            </div>
            <div className="bg-light mt-5 my-4  p-3">
                <h3 className = "text-center mb-5  " >
                    Similar Designs
                </h3>

                <Row>
                        {photos.map(code=><Col key = {code.id} className = "my-2" xs = "12" sm = "6" lg = "4" >
                        <Card hoverable cover = {<Image src = {code.image}  />} >
                        <p>{code.title}</p>
                        <div style = {{width:"100%",height:"60px",overflow:"hidden"}}  >
                            <Row>
                                <Col xs = "11" sm = "11">
                                    <small style = {{textOverflow:"ellipsis"}} >{code.description}</small>

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
                                        <Button  href = {`/assets/photos/${code.id}`} style = {{borderColor:"green",padding:".4em", border:"none+"}} >
                                            <EyeOutlined style = {{color :"green",fontSize :"1.2rem"}}  />
                                        </Button>
                                    </Col>
                                    <Col className = "mr-1" xs = "5" sm = "5" >
                                        <Button style = {{borderColor:"green",padding:".4em"}} >
                                            <DownloadOutlined style = {{color :"green",fontSize :"1.2rem"}}  />
                                        </Button>
                                    </Col>

                                </Row>

                            </Col>
                        </Row>
                  
                        </Card>
                        </Col>)}
                </Row>

            </div>
        </div>
    )
}

export default PhotoDetail

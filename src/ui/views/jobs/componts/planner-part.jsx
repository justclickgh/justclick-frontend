import { RightOutlined } from '@ant-design/icons'
import { Card, Image } from 'antd'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../styles/projects-part.css'
import { projects } from './photography-part'

const PlanningProjectsPart = () => {
    // const [state, setstate] = useState()
    return (
        <div className = "my-5">
            <div className="top-part my-2 container" >
                <h5 >
                    Event Planning Projects
                </h5>

                <Link>
                <small style = {{color:"green",lineHeight:"0"}} >View All <RightOutlined  style = {{color:"green",lineHeight:"0",fontSize:"1rem"}}/> </small>
                </Link>
                
            </div>

            <div className="container">

                <Row>
                    {projects.map(project => <Col className = "my-2" xs = "12" sm = "6" md = "6"  lg = "4" >
                    <Card hoverable cover = {<Image src = "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"  />} >
                        <Card.Meta title = "Some random title here" description = {<p style = {{height:"40px",fontSize:".7rem",textOverflow:"ellipsis" }} >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque doloremque assumenda omnis excepturi nisi, aspernatur aut incidunt porro maxime quae inventore quia hic expedita amet rem quaerat voluptate, ipsam placeat. </p>} />
                    </Card>
                    </Col>)}
                </Row>
               
            </div>
            
        </div>
    )
}

export default PlanningProjectsPart

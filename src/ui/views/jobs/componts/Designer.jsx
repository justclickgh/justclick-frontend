import { RightOutlined } from '@ant-design/icons'
import {  Image } from 'antd'
// import Meta from 'antd/lib/card/Meta'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../styles/projects-part.css'
// import { projects } from './photography-part'


import photo3 from '../../../../assets/images/design-7.JPG'
import photo2 from '../../../../assets/images/design-2.JPG'
import photo1 from '../../../../assets/images/design-3.JPG'
import photo4 from '../../../../assets/images/design-4.JPG'


const projects = [
    {
        id:1,
        image:photo1
    },
        {
        id:2,
        image:photo2
    },
        {
        id:3,
        image:photo3
    },
        {
        id:4,
        image:photo4
    },
]


const GraphicDesignerProjectsPart = () => {
    // const [state, setstate] = useState()
    return (
        <div className = "my-5">
            <div className="top-part my-2 container" >
                <h6 >
                    Graphic Designer Projects
                </h6>

                <Link>
                <small style = {{color:"green",lineHeight:"0"}} >View All <RightOutlined  style = {{color:"green",lineHeight:"0",fontSize:"1rem"}}/> </small>
                </Link>
            </div>

            <div className="container">
                <Row>
                    {projects.slice(0,3).map(project => <Col className = "my-2" xs = "12" sm = "6" md = "6"  lg = "4" >
                        <Image height = "100%" src = {project.image}  />
                    </Col>)}
                </Row>
               
            </div>
            
        </div>
    )
}

export default GraphicDesignerProjectsPart

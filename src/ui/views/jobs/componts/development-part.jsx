import { RightOutlined } from '@ant-design/icons'
import { Card, Image } from 'antd'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../styles/projects-part.css'
import photo3 from '../../../../assets/images/ui-1.webp'
import photo2 from '../../../../assets/images/ui-2.webp'
import photo1 from '../../../../assets/images/ui-3.webp'
import photo4 from '../../../../assets/images/ui-2.webp'


const projects = [
    {
        id:1,
        title:"An enterprice admin dashboard",
        description:"Has a user friendly interface that allows easy tracking if products",
        image:photo1
    },
        {
        id:2,
        title:"An enterprice admin dashboard",
        description:"Has a user friendly interface that allows easy tracking if products",

        image:photo2
    },
        {
        id:3,
        title:"An enterprice admin dashboard",
        description:"Has a user friendly interface that allows easy tracking if products",

        image:photo3
    },
        {
        id:4,
        title:"An enterprice admin dashboard",
        description:"Has a user friendly interface that allows easy tracking if products",

        image:photo4
    },
]


const DevelopmentProjectsPart = () => {
    // const [state, setstate] = useState()
    return (
        <div className = "my-5">
            <div className="top-part my-2 container" >
                <h5 >
                    Web  & Mobile App Dev Projects
                </h5>

                <Link>
                <small style = {{color:"green",lineHeight:"0"}} >View All <RightOutlined  style = {{color:"green",lineHeight:"0",fontSize:"1rem"}}/> </small>
                </Link>
            </div>

            <div className="container">
                <Row>
                    {projects.slice(0,4).map(project => <Col className = "my-2" xs = "12" sm = "6" md = "6"  lg = "4" >
                    <Card hoverable cover = {<Image src = {project.image} />} >
                        <Card.Meta title = {project.title} description = {<p style = {{height:"40px",fontSize:".7rem",textOverflow:"ellipsis" }} >{project.description} </p>} />
                    </Card>
                    </Col>)}
                </Row>
         
               
            </div>
            
        </div>
    )
}

export default DevelopmentProjectsPart

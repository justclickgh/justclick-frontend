import { Image ,Button,Card, Tag} from 'antd'
import React from 'react'
import { Col, Row } from 'react-bootstrap'


const desing2 =  'https://justclick-backend-statics.s3.amazonaws.com/fe-statics/design-2.JPG'
const desing3 =  'https://justclick-backend-statics.s3.amazonaws.com/fe-statics/design-3.JPG'
const desing4 =  'https://justclick-backend-statics.s3.amazonaws.com/fe-statics/design-4.JPG'
const desing5 =  'https://justclick-backend-statics.s3.amazonaws.com/fe-statics/17 Visual Identity.jpg'
const desing6 =  'https://justclick-backend-statics.s3.amazonaws.com/fe-statics/design-7.JPG'

const publication_design =  'https://justclick-backend-statics.s3.amazonaws.com/fe-statics/19 publication Design.jpg'
const packaging_design =  'https://justclick-backend-statics.s3.amazonaws.com/fe-statics/20 Packaging Design.jpg'
const advertisment_design =  'https://justclick-backend-statics.s3.amazonaws.com/fe-statics/design-4.JPG'
const visual_identity =  'https://justclick-backend-statics.s3.amazonaws.com/fe-statics/17 Visual Identity.jpg'
const motion_design =  'https://justclick-backend-statics.s3.amazonaws.com/fe-statics/21 motion Design.jpg'
const evironment_design =  'https://justclick-backend-statics.s3.amazonaws.com/fe-statics/22 Enviromental Design.jpg'
const illustrotion_design =  'https://justclick-backend-statics.s3.amazonaws.com/fe-statics/illustration_design.jpg'


export const design_items = [
        {
        id:1,
        name:"Kingsley Adotey",
        prifile_image:evironment_design,
        tags : [
            'Environment design',
            'Graphic design'
        ]
        
    },
    {
        id:1,
        name:"Kingsley Adotey",
        prifile_image:illustrotion_design,
        tags : [
            'Illustration design',
            'Graphic design'
        ]
        
    },
      {
        id:2,
        name:"Brown Curtis Odartey Lamptey Jnr.",
        prifile_image:motion_design,
        tags : [
            'Motion design',
            'Graphic design'
        ]

    },
    {
        id:3,
        name:"Phil Ayaric",
        prifile_image:visual_identity,
        tags : [
            'Visual identity design',
            'Graphic design'
        ]
    },
      {
        id:4,
        name:"Brown Curtis Odartey Lamptey Jnr.",
        prifile_image:advertisment_design,
        tags : [
            'Advertisment design',
            'Graphic design'
        ]

    },

      {
        id:5,
        name:"Brown Curtis Odartey Lamptey Jnr.",
        prifile_image:packaging_design,
        tags : [
            'Packaging design',
            'Graphic design'
        ]

    },

      {
        id:7,
        name:"Brown Curtis Odartey Lamptey Jnr.",
        prifile_image:publication_design,
        tags : [
            'Publication design',
            'Graphic design'
        ]
    },
          {
        id:7,
        name:"Brown Curtis Odartey Lamptey Jnr.",
        prifile_image:desing6,
        tags : [
            'Illustration design',
            'Graphic design'
        ]
    },
          {
        id:7,
        name:"Brown Curtis Odartey Lamptey Jnr.",
        prifile_image:desing5,
        tags : [
            'Illustration design',
            'Graphic design'
        ]
    },
          {
        id:7,
        name:"Brown Curtis Odartey Lamptey Jnr.",
        prifile_image:desing4,
        tags : [
            'Illustration design',
            'Graphic design'
        ]
    },
              {
        id:7,
        name:"Brown Curtis Odartey Lamptey Jnr.",
        prifile_image:desing3,
        tags : [
            'Illustration design',
            'Graphic design'
        ]
    },
              {
        id:7,
        name:"Brown Curtis Odartey Lamptey Jnr.",
        prifile_image:desing2,
        tags : [
            'Illustration design',
            'Graphic design'
        ]
    },

    


]



const PastJobsPart = () => {
    return (
        <div className = "container mt-5 bg-light">
            <div className="mt-5 p-3">
                <Row>
                    <Col>
                <h5>Past completed jobs by our best designers </h5>

                    </Col>
                    <Col>
                          <Button href = "/services/graphic-design/all-jobs" style = {{color:"green",border:"none",position:"absolute",right:"15%"}} >
                                View all
                        </Button>
                    </Col>
                </Row>
          
            </div>

            <Row>
                {design_items.slice(0,6).map(item=>                
                <Col  className = "my-2"  xs = "12" sm = "6" lg ="4" >
                {/* <Card   > */}
                    
                    <Card style = {{height:"370px"}}   cover = {<Image   preview = {true} height = "250px" src={item.prifile_image} alt="" srcset=""/>} >
                        <Card.Meta
                        title = {<Row>
                            <Col sm = "3" > Designer - </Col>
                            <Col>{item.name}</Col>
                        </Row>}
                        description = {<p>
                           Tags: {item.tags.map(tag=><Tag color = "green" >{tag}</Tag>)}
                        </p>}
                        />
                    </Card>
                    
                {/* </Card> */}
                
                </Col>)}

            </Row>
            
        </div>
    )
}

export default PastJobsPart

import React, { useState } from 'react'
import { Button, Card, Divider, Empty, Image, Input, Pagination } from 'antd';
import { Container,Col ,Row} from 'react-bootstrap'; 
import { ShoppingCartOutlined,EyeOutlined } from '@ant-design/icons';
import Banner from './banner';

const ui2 = "https://justclick-backend-statics.s3.amazonaws.com/fe-statics/ui-2.webp"
const ui3 = "https://justclick-backend-statics.s3.amazonaws.com/fe-statics/ui-3.webp"
export const uiUxs = [
  {
    id:1,
    image:"https://justclick-backend-statics.s3.amazonaws.com/fe-statics/ui-1.webp",
    title:"Some title gaiven random",
    tags:[
      'ui/ux design',
      'mobile app',
      'mobile design',
      
    ]
  },
    {
    id:2,
    image:ui2,
    title:"Some title gaiven random",
        tags:[
      'ui/ux design',
      'mobile app',
      'mobile design',
      
    ]

  },
      {
    id:3,
    image:ui3,
  title:"Some title gaiven random",
      tags:[
      'ui/ux design',
      'web app',
      'wec design',
      'dashboard'
      
    ]
  },
      {
    id:4,
    image:"https://justclick-backend-statics.s3.amazonaws.com/fe-statics/ui-1.webp",
  title:"Some title gaiven random",
      tags:[
    'ui/ux design',
    'mobile app',
    'mobile design',
    
  ]
  },
      {
    id:5,
    image:ui2,
  title:"Some title gaiven random",
        tags:[
      'ui/ux design',
      'mobile app',
      'mobile design',
      
    ]
  },
      {
    id:6,
    image:ui2,
  title:"Some title gaiven random",
        tags:[
      'ui/ux design',
      'mobile app',
      'mobile design',
      
    ]
  },
      {
    id:7,
    image:ui3,
  title:"Some title gaiven random",
        tags:[
      'ui/ux design',
      'mobile app',
      'mobile design',
      
    ]
  },
        {
    id:7,
    image:ui2,
  title:"Some title gaiven random",
        tags:[
      'ui/ux design',
      'mobile app',
      'mobile design',
      
    ]
  },
        {
    id:7,
    image:ui3,
  title:"Some title gaiven random",
        tags:[
      'ui/ux design',
      'mobile app',
      'mobile design',
      
    ]
  },
        {
    id:7,
    image:"https://justclick-backend-statics.s3.amazonaws.com/fe-statics/ui-1.webp",
  title:"Some title gaiven random",
        tags:[
      'ui/ux design',
      'mobile app',
      'mobile design',
      
    ]
  },
        {
    id:7,
    image:ui3,
  title:"Some title gaiven random",
        tags:[
      'ui/ux design',
      'mobile app',
      'mobile design',
      
    ]
  },
        {
    id:7,
    image:ui2,
  title:"Some title gaiven random",
        tags:[
      'ui/ux design',
      'mobile app',
      'mobile design',
      
    ]
  },
        {
    id:7,
    image:ui3,
  title:"Some title gaiven random",
        tags:[
      'ui/ux design',
      'mobile app',
      'mobile design',
      
    ]
  },
        {
    id:7,
    image:ui3,
  title:"Some title gaiven random",
        tags:[
      'ui/ux design',
      'mobile app',
      'mobile design',
      
    ]
  },
        {
    id:7,
    image:ui2,
  title:"Some title gaiven random",
        tags:[
      'ui/ux design',
      'mobile app',
      'mobile design',
      
    ]
  },
        {
    id:7,
    image:"https://justclick-backend-statics.s3.amazonaws.com/fe-statics/ui-1.webp",
  title:"Some title gaiven random",
        tags:[
      'ui/ux design',
      'mobile app',
      'mobile design',
      
    ]
  },
        {
    id:7,
    image:ui2,
  title:"Some title gaiven random",
        tags:[
      'ui/ux design',
      'mobile app',
      'mobile design',
      
    ]
  },
        {
    id:7,
    image:ui3,
  title:"Mobile App with",
        tags:[
      'ui/ux design',
      'mobile app',
      'mobile design',
      
    ]
  },

]


const UiUxDesignPart = () => {
  const page_size = 5

  // const [data,setData] = useState(uiUxs)

  const [state,setState] = useState({
    filterd:uiUxs.slice(0,page_size),
    total_item: uiUxs.length,
    data:uiUxs
  })


  
    return (
      <div>
        <Banner/>
        <Divider/>
        <div className="p-3 container">
          <Row>
            <Col>
                <h4 className = "text-center" >Search Design  by Title</h4>
            </Col>
            <Col>
            <Input.Search onChange = {(e)=>{
              console.log(e);
            setState(
            {
              filterd: uiUxs.filter(item=>item.title.toLocaleLowerCase().includes(e.target.value.toLowerCase())).slice(0,page_size),
              total_item:uiUxs.filter(item=>item.title.toLocaleLowerCase().includes(e.target.value.toLowerCase())).length,
              data:uiUxs.filter(item=>item.title.toLocaleLowerCase().includes(e.target.value.toLowerCase()))
            }
            )
          }}  />

            </Col>

          </Row>

        </div>
   
        <Divider/>
        <div className = "my-5" >
          
          <Container>
            <h3>UI/UX DESIGNS</h3>
            
                  <Row>
                    { state.filterd.length ===0?<Empty className = "mx-auto" > Or <br/> No match for query</Empty> : state.filterd.map(design=>                      
                    <Col className ="my-2" xs = "12" sm = "6" lg = "4" md = "6"  xl = "4">
                          <Card hoverable cover = {<Image src = {design.image} />}  
                      
                          >
                            <p>{design.title}</p>
                            <small>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic culpa debitis fuga, illo voluptates ipsa natus est laborum quide</small>
                            {/* <Divider/> */}
                            <div className = "my-1"/>
                            <hr/>
                            <Row>
                                 <Col className = "my-3" xs = "8" sm = "8">
                                    <small>{`posted at: 12-12-2021`}</small> <br/>
                                    <small>{`posted by: Thomas Sarpong`}</small>
                                </Col>
                                <Col xs = "4" sm = "4">
                                  <Row>
                                    <Col sm = "6">
                                      <Button shape =  "circle" style = {{border:"none" , fontSize:"1.2rem"}}  > <ShoppingCartOutlined /> </Button>

                                    </Col>
                                                                        
                                    <Col sm = "6">

                                      <Button shape =  "circle" style = {{border:"none" , fontSize:"1.2rem"}}  > <EyeOutlined /> </Button>

                                    </Col>
                                  </Row>

                                </Col>
                            </Row>
                          </Card>
                      </Col>)}
                    

                  </Row>
                  <div className="my-3">
                  <Pagination total = {state.data.length}  pageSize = {page_size} onChange = {(page,pageSize)=>{
                    let next_page = page -1
                    let start = (next_page * page_size )
                    console.log(start);
                    setState({
                      ...state,
                      filterd: state.data.slice(start,start + page_size)
                    })
                  }} />
                  </div>
              

                       
            </Container>
        </div>
        </div>
    )
}

export default UiUxDesignPart



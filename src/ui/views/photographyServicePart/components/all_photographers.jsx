import { Button, Card, Divider, Empty, Form, Image, Input, Pagination, Rate, Tag } from 'antd'
import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import photo from '../../../../assets/images/Julius.jpg'
import photo2 from '../../../../assets/images/Isaac.jpg'
import photo3 from '../../../../assets/images/Jeremaih.jpg'
import photo4 from '../../../../assets/images/Micheal.jpeg'

import { searchthroughArray } from '../../../../utils/search-through-array'

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






const AllPhotographers = () => {
    const page_item_number = 10
     const [state, setstate] = useState({
         filtered:items,
         page_data: items.slice(0,page_item_number)
     })




const search = e=>{
    console.log(state.filtered.length)
    setstate({
        ...state,
        filtered: items.filter(item=>e.target.value.toLowerCase().includes(
            item.name.toLowerCase()
        )||
        searchthroughArray(item.speciality,e.target.value)
        ),
        page_data:items.filter(item=>item.name.toLowerCase().includes( e.target.value.toLowerCase())
        ||searchthroughArray(item.speciality,e.target.value)
        ).slice(0,page_item_number)
        
    
    })
}
    return (
        <div className = "container mt-5" >
            <Row>
                <Col>
                    <h6>List of Photographers</h6>
                </Col>
                <Col>
                    <Form.Item label = "Search" >
                        <Input.Search onChange = {search} />
                    </Form.Item> 
                </Col>
            </Row>
            <Divider/>
            <Row >
                {state.page_data.length ===0? <div className = "my-5 mx-auto" >
                <Empty/>
                </div>:state.page_data.map(item=>
                    
            <Col  className = "my-2"  xs = "12" sm = "6" lg ="4"  >
                <Card hoverable  cover = { <Image  width = "100%" src={item.prifile_image} alt="" srcset=""/>}  >
                   <h6>{item.name}</h6>
                   <p className = "" style = {{lineHeight:".8rem",letterSpacing:".0001rem", fontSize:".85rem"}} >
                       
                       {item.speciality.slice(0,3).map(spec=> <Tag color = "green"  className = "mt-1" > {spec} </Tag> )}
                       
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
            <Row>
                <Col hidden = {state.filtered.length === 0} sm = "12">
                <Pagination 
                onChange = {(page_num,page_size)=>{
                    const start = (page_num-1) * page_size
                    setstate(
                        {
                            ...state,
                            page_data:state.filtered.slice(start,start + page_size)

                        }
                    )
                }}
                className = "mx-5"  total = {state.filtered.length} />

                </Col>
            </Row>
        </div>
    )
}

export default AllPhotographers

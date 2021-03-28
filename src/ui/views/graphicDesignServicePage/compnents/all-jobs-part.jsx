import { Card, Divider, Empty, Form, Image, Input, Pagination, Rate, Tag } from 'antd'
import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { searchthroughArray } from '../../../../utils/search-through-array'
import { design_items } from './part-jobs-part'



const AllJobsPart = () => {
    const page_item_number = 9
     const [state, setstate] = useState({
         filtered:design_items,
         page_data: design_items.slice(0,page_item_number)
     })




const search = e=>{
    console.log(state.filtered.length)
    setstate({
        ...state,
        filtered: design_items.filter(item=>e.target.value.toLowerCase().includes(
            item.name.toLowerCase()
        )||
        searchthroughArray(item.tags,e.target.value)
        ),
        page_data:design_items.filter(item=>item.name.toLowerCase().includes( e.target.value.toLowerCase())
        ||searchthroughArray(item.tags,e.target.value)).slice(0,page_item_number)

    })
}
    return (
        <div className = "container mt-5" >
            <Divider/>
            <Row>
                <Col>
                    <h6>List of top photographs</h6>
                </Col>
                <Col>
                    <Form.Item label = "Search" >
                        <Input.Search placeholder = "Search by photographer name or tag" onChange = {search} />
                    </Form.Item> 
                </Col>
            </Row>
            <hr/>
            <Row >
                {state.page_data.length === 0? <div className = "my-5 mx-auto" >
                <Empty/>
                </div>:state.page_data.map(item=>
                    
                <Col  className = "my-2"  xs = "12" sm = "6" lg ="4" >
                <Card style = {{height:"450px"}} cover = {<Image  preview = {true} width = "100%" src={item.prifile_image} alt="" srcset=""/>}>
                    <p className = "" style = {{lineHeight:".8rem",letterSpacing:".0001rem", fontSize:".85rem"}} > Tags: {item.tags.map(spec=><Tag color = "green" >{spec} </Tag>)}</p>
                    <Row>
                        <Col xs  = "5" sm=  "5" >
                        <p style = {{lineHeight:".8rem",letterSpacing:".0001rem", fontSize:".85rem"}}><b>Photographer </b></p>
                        </Col>
                        <Col>
                        <p style = {{lineHeight:".8rem",letterSpacing:".0001rem", fontSize:".85rem"}}> {item.name} </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col l xs  = "5" sm=  "5"  >
                            Rate
                        </Col>
                        <Col>
                        <Rate disabled defaultValue = {4}  style ={{color:"green",fontSize:".9em"}}/>

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

export default AllJobsPart
                  
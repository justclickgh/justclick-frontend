import { Avatar, Breadcrumb, Button, Card, Form, Input, List, Modal, Progress, Select, Skeleton} from 'antd'
import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { DeleteOutlined, EditOutlined, PlusCircleOutlined } from '@ant-design/icons'
import { connect } from 'react-redux'

// const item = [1,2,3,4,5,6,6,7,8,9]

const AssetsPage = ({assets}) => {
    const [state,setState] = useState({
        add_modal_visible : false
    })
    const handleAddModalVisible = ()=>{
        setState({
            ...state,
            add_modal_visible:true
        })
    }
    const handleAddModalCancel = ()=>{
        setState({
            ...state,
            add_modal_visible:false
        })
    }

    const addListModal = <Modal title = "Add Asset" onCancel = {handleAddModalCancel} visible = {state.add_modal_visible}  >
        <Form>
            <Form.Item label = "Title" >
                <Input />
            </Form.Item>
            <Form.Item label = "Price" >
                <Input type = "number" />
            </Form.Item>

            <Form.Item label = "Description" >
                <Input.TextArea rows = {4} />
            </Form.Item>

            <Form.Item label = "Type" >
                <Select>
                    <Select.Option value = "design_template" >
                            Design Template
                    </Select.Option>
                    <Select.Option value = "source_code" >
                            Source Code
                    </Select.Option>
                    <Select.Option value = "ui_ux_design" >
                            UI/UX Design
                    </Select.Option>
                    <Select.Option value = "photos" >
                            Photos
                    </Select.Option>                
                </Select>

            </Form.Item>
        <div hidden  className="design-template-viaible">
            <div className="my-4">
                <h6 className = "text-center" >Design information</h6>
            </div>
            <Form.Item label = "Cover image" >
                <Input type = "file" accept = ".jpg" />
            </Form.Item>
            <Form.Item label = "Zip file" >
                <Input type = "file" accept = ".zip" />
            </Form.Item>
            <Form.Item label = "Zip file extension" >
                <Select >
                    <Select.Option>
                        Pdf
                    </Select.Option>
                 <Select.Option>
                        Png
                    </Select.Option>
                 <Select.Option>
                        Vector
                    </Select.Option>
                </Select>
            </Form.Item>
        </div>


        <div hidden   className="ui-ux-disgn-visible">
            <div className="my-4">
                <h6 className = "text-center" >Design information</h6>
            </div>
            <Form.Item label = "Cover images" >
                <Input type = "file" accept = ".jpg/.png" />
            </Form.Item>
            <Form.Item label = "Zip file" >
                <Input type = "file" accept = ".zip" />
            </Form.Item>

        </div>


        <div hidden  className="source-code-viaible">
            <div className="my-4">
                <h6 className = "text-center" >Source Code information</h6>
            </div>
            <Form.Item label = "Application Screenshots" >
                <Input type = "file" accept = ".jpg" />
            </Form.Item>
           <Form.Item label = "Application Prototype's Url" >
                <Input type = "url" />
            </Form.Item>
           <Form.Item label = "Application Prototype" >
                <Input type = "file" accept = ".zip" />
            </Form.Item>

            <Form.Item label = "Zip file" >
                <Input type = "file" accept = ".zip" />
            </Form.Item>
 
            <Form.Item label = "Application type" >
                <Select >
                    <Select.Option>
                        Website
                    </Select.Option>
                 <Select.Option>
                        Mobile Application
                    </Select.Option>
                 <Select.Option>
                        Desktop Application
                    </Select.Option>
                </Select>
            </Form.Item>
        </div>
        



        <div   className="pohto-viaible">
            <div className="my-4">
                <h6 className = "text-center" >Photo information</h6>
            </div>
            <Form.Item label = "Image" >
                <Input type = "file" accept = ".jpg" />
            </Form.Item>

            <Form.Item label = "Zip file" >
                <Input type = "file" accept = ".zip" />
            </Form.Item>
        </div>

        </Form>
        <Progress/>
    </Modal>

    return (
        <div style = {{height :"100vh"}} className = "bg-light" >
            {addListModal}
                   < Breadcrumb className = "p-3" >
                   <Breadcrumb.Item>
                        Dashboard
                   </Breadcrumb.Item>
                   <Breadcrumb.Item>
                        Assets
                   </Breadcrumb.Item>
                   </Breadcrumb>

                    <Container>
{/* 
                    <Row>
                        <Col xs = "12" sm = "6" >
                            <Card lassName = "my-3" >
                                <Statistic
                                title = "Total Assets"
                                />
                            </Card>
                            
                        </Col>
                            <Col xs = "12" sm = "6" >
                            <Card lassName = "my-3" >
                               <Statistic
                                title = "Total Downloads"
                                />
                            </Card>
                        </Col>
                    </Row> */}
                    <Container className = "my-3" >
                        <Card title =  {<Row>

                                <Col sm = "9" >
                                    <h5>List of Assets</h5>
                                </Col>
                                <Col>
                                    <Button onClick = {handleAddModalVisible} shape = "circle" style = {{border:"none"}} >  <PlusCircleOutlined style = {{ fontSize:"1.5rem",color:"green" }} /> </Button>
                                </Col>

                        </Row>} >
                            <List
                            dataSource = {assets.user_asset.slice(0,4)}

                            itemLayout = "horizontal"
                            renderItem = {item=>(
               
                                    <List.Item actions = {[
                                        <Button shape = "circle" style = {{border:"none"}} >  <EditOutlined style = {{ fontSize:"1.2rem",color:"green" }} /> </Button>,
                                        <Button shape = "circle" style = {{border:"none"}} >  <DeleteOutlined style = {{ fontSize:"1.2rem",color:"red" }} /> </Button>,
                                    ]} >
                                <Skeleton
                                loading = {false}
                                >
                                    <List.Item.Meta 
                                    avatar = {<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                    title = "some title thrwon in here"
                                    description = {<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo assumenda ut vitae, dolor est facere alias obcaecati, quo deserunt aliquam perspiciatis deleniti, quasi iusto laborum aliquid veritatis illum suscipit ad.</p>}
                                    
                                    />

                                    
                                </Skeleton>
                                     

                                </List.Item>
                            )}
                            
                            >
                          

                            </List>

                        </Card>
                    </Container>
                     </Container>
        </div>
    )
}

const mapStateToPRops = state=>{
   return { 
       assets:state.currentUserAssets
   }
}
export default connect(mapStateToPRops)(AssetsPage)

import React, { useState } from 'react'
import Layout from '../../layout/insex'
import { Col, Row } from 'react-bootstrap'


import { Button, Card, Form, Input,  notification, Progress } from 'antd'
import { useForm } from '../../../utils/hooks/use_form'
import axios from 'axios'
import { contactSendEmailPath } from '../../../utils/network_utils/endpoints'


const about2 = 'https://justclick-backend-statics.s3.amazonaws.com/fe-statics/about2.png'
const mail = 'https://justclick-backend-statics.s3.amazonaws.com/fe-statics/email_us.png'
const call = 'https://justclick-backend-statics.s3.amazonaws.com/fe-statics/call.png'
// import map from '../../../assets/images/map.png'

const address = 'https://justclick-backend-statics.s3.amazonaws.com/fe-statics/address.png'
const ContactUs = () => {
    const [values,handleChange] = useForm({
        message:"",
        email:"",
        subject:"",
        attatchment:""
    })
    const [state,setState] = useState({
        upload_progress:0,
        file:null,
        message:[],
        email:[],
        subject:[],
        attatchment:[],
        loading:false
    })
    const sendMail = (e)=>{
        e.preventDefault()  
        setState({
            ...state,
            loading:true
        })      
        const conf = {
            onUploadProgress: ProgressEvent=>{
            setState({
                ...state,
                upload_progress: ProgressEvent.loaded/ProgressEvent.total
            })
        } ,
            headers:{
                "Content-Type":"application/json"
            }
        }
        const fd  = new FormData()
        fd.append('email',values.email)
        fd.append('subject',values.subject)
        fd.append('message',values.message)
        fd.append('attatchment',state.attatchment)
        setState({
            ...state,
            message:[],
            email:[],
            subject:[],
            attatchment:[]
        })
        axios.post(contactSendEmailPath,fd,conf).then(res=>{
            notification.success(
                {
                    message:res.data.message
                }
            )
              setState({
            ...state,
            loading:false
        }) 
        }).catch(error=>{
            setState({
            ...state,
            loading:false
        }) 
            if(error.response){
                console.log(error.response);
                const data = error.response.data
                if(error.response.status ===400){
                    setState({
                        ...state,
                        subject:data.subject?data.subject:[],
                        message:data.message?data.message:[],
                        email:data.email?data.email:[],
                        attatchment:data.attatchment?data.attatchment:[]
                    })
                }
                else{
                    notification.error({
                        message:data.error
                    })
                }

            }else if(error.request){
                notification.error({
                    message:"Network error"
                })
            }
        })

    }
    return (
        <div>
            <Layout>
                <div className="banner container">
                    <Row>
                        <Col xs = "12" sm = "6" >
                            <img width = "100%" src={about2} alt="" srcset=""/>
                        
                        </Col>
                    <Col className = "px-3 my-auto" xs = "12" sm = "6" >
                        <h2 className = "text-center" >Contact Us</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam id cum tenetur sequi, modi quo similique ipsa! Odio nostrum nihil labori Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quisquam vero, ab quibusdam atque debitis. Aperiam quia placeat deserunt facere? Autem nihil repellat iusto, aliquam fugit saepe itaque cum quae.</p>
                        </Col>
                    </Row>
                </div>

                <div className="content container mt-5 ">
                    <div className="my-5">
                   <h2 className = "text-center pb-4" >Have Some Questions?</h2>
                        <Row>
                            <Col xs = "12" sm = "6" > 
                                <img width = "100%" src={mail} alt="" srcset=""/>
                            </Col>
                                <Col className = "my-auto" xs = "12" sm = "6" > 
                                <Form>
                                    <Form.Item 
                                    help = {state.email.map(text=>text)}
                                    validateStatus = {state.email.length>=1?"error":"success"}

                                    rules = {[
                                        {
                                            required:true,
                                            message:"Email field is required"
                                        },
                                        {
                                            type:'email',
                                            message:"Enter a valid email"
                                        }
                                    ]}
                                    name = "email"
                                    label = "Email Address">
                                        <Input name ="email" value = {values.email} onChange = {handleChange} type = "email"/>
                                    </Form.Item>
                                    <Form.Item 
                                    validateStatus = {state.subject.length>=1?"error":"success"}
                                    help = {state.subject.map(text=>text)}
                                    name = "subject"
                                    rules = {[
                                        {
                                            required:true,
                                            message:"Subject field is required"
                                        }
                                    ]}
                                    
                                    label = " Email Subject" >
                                        <Input value = {state.subject} onChange = {handleChange} name = "subject" type = "text"/>
                                    </Form.Item>
                                    <Form.Item
                                    help = {state.message.map(text=>text)}
                                    validateStatus = {state.message.length>=1?"error":"success"}
                                    name = "message"
                                    rules = {[
                                        {
                                            required:true,
                                            message:"Message fields is required"
                                        }
                                    ]}
                                    label = "Email message" >
                                        <Input.TextArea name = "message" value = {values.message} onChange = {handleChange} rows = "4" />
                                    </Form.Item>
                                    <Form.Item
                                    validateStatus = {state.attatchment.length>=1?"error":"success"}

                                    help = {state.attatchment.map(text=>text)}
                                    label = "File Attatchment" >
                                        
                                        <Input onChange = {e=>{
                                            // console.log(e.target.files[0]);
                                            setState({
                                                ...state,
                                                file:e.target.files[0]
                                            })
                                        }} type = "file" />
                                    </Form.Item>
                                    <div hidden = {state.upload_progress ===0} >
                                        <Progress  percent = {state.upload_progress} />
                                    </div>

                                    <Button loading  = {state.loading} onClick = {sendMail} htmlType = "submit" shape = "round" style = {{color :"#63BF4B",borderColor:"#63BF4B",width : "70%",height :"50px",marginLeft:"100px",marginTop:"1em"}} type = "submit">Send Email</Button>

                                </Form>
                            </Col>
                        </Row>
                        <Row className = "my-5 p-4 bg-light ">
                            <Col className = "pt-5" sm = "12" >
                             <h2 className = "text-center my-3" >  Our Contacts</h2>

                            </Col>
                            <Col className  = "my-1" sm = "12" md = "6"  lg = "4">
                                <Card hoverable cover = {<img width  ="100%" src = {mail} alt = "mail" />} >
                                    <p>Email: justclickgh2020@gmail.com</p>
                                </Card>

                            </Col>
                            <Col className  = "my-1" sm = "12"  md = "6"  lg = "4" >
                                <Card hoverable cover = {<img alt = "sdas" width  ="100%" src = {call} />} >
                                    <p>Phone1 : +233 (0) 553 271 698</p>
                                    <p>Phone2 : +233 (0) 278 990 427</p>
                                    <div className="py-2"/>
                                </Card>

                            </Col>
                            <Col className  = "my-1" sm = "12"  md = "6" lg = "4" >
                                <Card hoverable cover = {<img alt = "asda" width  ="100%" src = {address} />} >
                                    <p>Address: Circle Kokomlemle, Accra </p>
                                </Card>

                            </Col>
                        </Row>

                        <Row className = "my-5" >
                            <Col className  = "my-1" sm = "12">
                                <h3 className = "text-center" >Find Us On Map</h3>
                            </Col>
                            {/* <Col xs = "12" sm = "6">
                                <img width = "100%" src={map} alt="" srcset=""/>
                            </Col> */}
                             <Col xs = "12" sm = "12">
                                 
                                 <Card hoverable >  
                                    <iframe title = "map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d249.34356868662732!2d8.8679401!3d-0.7270532!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9a01cf93ff85%3A0x3b6fd9b89c7ad508!2sAccra%20Digital%20Centre!5e0!3m2!1sen!2sgh!4v1612064132725!5m2!1sen!2sgh" 
                                    
                                    width="100%" height="450" frameborder="0" style={{border:"0"}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>                                 
                                </Card>
                             </Col>
                        </Row>
                    </div>





                </div>


            </Layout>
            
        </div>
    )
}

export default ContactUs

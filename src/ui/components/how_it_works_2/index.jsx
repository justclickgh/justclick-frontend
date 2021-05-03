import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import {CustomNoImageCard} from '../../../utils/ui_utils/card'
import { CheckOutlined, InfoCircleOutlined, PlusCircleOutlined, ProfileOutlined, UserAddOutlined } from '@ant-design/icons'


const register =  'https://justclick-backend-statics.s3.amazonaws.com/fe-statics/register.png'
const price =  'https://justclick-backend-statics.s3.amazonaws.com/fe-statics/price.png'
const account =  'https://justclick-backend-statics.s3.amazonaws.com/fe-statics/account.png'
const approval =  'https://justclick-backend-statics.s3.amazonaws.com/fe-statics/approval.png'
const email =  'https://justclick-backend-statics.s3.amazonaws.com/fe-statics/email.png'
const confirm =  'https://justclick-backend-statics.s3.amazonaws.com/fe-statics/confirm.png'


const HowItWorks2 = () => {
    return (
        <div className = "my-5 ">
            
           <Container className = "py-3">
               
            <Row>
                <Col sm = "12" xs = "12" md = "12" lg = "12">
                <h2 className = "text-center my-3">How It Works </h2>
                <p  className = "text-center my-3">There are couple of steps to complete as a creative person. Take time to complete all the steps below, start posting jobs and let get it done for you. </p>

                </Col>
                    <Col className = "my-2" xs = "12"  sm = "6" lg = "4">
                        <CustomNoImageCard bottonText = "Register" link = "/freelancer/register" img = {register} icon = {<UserAddOutlined className = "pr-1"/>} title = " Sign up" body = "First of all you need to sign up to be able to enjoy our services for free "  />
                    </Col>
                    <Col className = "my-2" xs = "12"  sm = "6" lg = "4">
                        <CustomNoImageCard img = {email} icon = {<PlusCircleOutlined className = "pr-1"/>} title = " Email Confirmation " body = "An email will be sent to the email provided during registration to confirm the email account. If email is not confirmed, account will be deactivated and deleted after 10 days" />
                    </Col>
                    <Col className = "my-2" xs = "12"  sm = "6" lg = "4">
                        <CustomNoImageCard img = {price} icon = {<InfoCircleOutlined className = "pr-1"/>} title = "Know The Price Upfront" body = "Find any service within minutes and know exactly what you’ll pay. No hourly rates, just a fixed price."  />
                    </Col>
                    <Col className = "my-2" xs = "12"  sm = "6" lg = "4">
                        <CustomNoImageCard img = {account} icon = {<ProfileOutlined className = "pr-1"/>} title = "Set up your Profile" body = "Customers have to provide all necessary information about the project. Every customer has only three (3) times to make changes."  />
                    </Col>
                    <Col className = "my-2" xs = "12"  sm = "6" lg = "4">
                        <CustomNoImageCard img = {approval} icon = {<PlusCircleOutlined className = "pr-1"/>} title = "Wait for Aproval" body = "Find any service within minutes and know exactly what you’ll pay. No hourly rates, just a fixed price."  />
                    </Col>
                    <Col className = "my-2" xs = "12"  sm = "6" lg = "4">
                        <CustomNoImageCard img = {confirm} icon = {<CheckOutlined className = "pr-1"/>} title = "You are part of us" body = "Find any service within minutes and know exactly what you’ll pay. No hourly rates, just a fixed price."  />
                    </Col>
                </Row>
           </Container>
        </div>
    )
}

export default HowItWorks2

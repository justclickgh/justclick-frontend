import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import {CustomNoImageCard} from '../../../utils/ui_utils/card'
import { CheckOutlined, InfoCircleOutlined, PlusCircleOutlined, ProfileOutlined, UserAddOutlined } from '@ant-design/icons'
import register from '../../../assets/images/register.png'
import post_job from '../../../assets/images/post_job.png'
import price from '../../../assets/images/price.png'
import account from '../../../assets/images/account.png'
import payment from '../../../assets/images/payment.png'

import confirm from '../../../assets/images/confirm.png'


const HowItWorks = () => {
    return (
        <div className = "my-5 bg-light">
            
        <Container className = "py-3">
               
            <Row>
                <Col sm = "12" xs = "12" md = "12" lg = "12">
                <h2 className = "text-center my-3">How It Works For Clients </h2>
                <p  className = "text-center my-3">There are couple of steps to complete as a client. Take time to complete all the steps below, start posting jobs and let get it done for you. </p>

                </Col>
                    <Col className = "my-2" xs = "12"  sm = "6" lg = "4">
                        <CustomNoImageCard img = {register} icon = {<UserAddOutlined className = "pr-1"/>} title = " Sign up" body = "First of all you need to sign up to be able to enjoy our services for free "  />
                    </Col>
                    <Col className = "my-2" xs = "12"  sm = "6" lg = "4">
                        <CustomNoImageCard img = {post_job} icon = {<PlusCircleOutlined className = "pr-1"/>} title = " Post a job: " body = "Your Posted details will be reviewed and taken as a contest by graphic designers across Ghana."  />
                    </Col>
                    <Col className = "my-2" xs = "12"  sm = "6" lg = "4">
                        <CustomNoImageCard img = {price} icon = {<InfoCircleOutlined className = "pr-1"/>} title = "Know The Price Upfront" body = "Find any service within minutes and know exactly what you’ll pay. No hourly rates, just a fixed price."  />
                    </Col>
                    <Col className = "my-2" xs = "12"  sm = "6" lg = "4">
                        <CustomNoImageCard img = {account} icon = {<ProfileOutlined className = "pr-1"/>} title = "Providing information" body = "Customers have to provide all necessary information about the project. Every customer has only three (3) times to make changes."  />
                    </Col>
                    <Col className = "my-2" xs = "12"  sm = "6" lg = "4">
                        <CustomNoImageCard img = {payment} icon = {<PlusCircleOutlined className = "pr-1"/>} title = "Make Payments" body = "Payment is released to the freelancer once you’re pleased and approved the work you get. Make 100% payment through JUSTCLICKGH once you post a job. Pay fixed-price and receive invoices through JUSTCLICKGH. Get 100% refunded for Graphic Designed jobs rejected."  />
                    </Col>
                    <Col className = "my-2" xs = "12"  sm = "6" lg = "4">
                        <CustomNoImageCard img = {confirm} icon = {<CheckOutlined className = "pr-1"/>} title = "Waite for Job completetion" body = "Find any service within minutes and know exactly what you’ll pay. No hourly rates, just a fixed price."  />
                    </Col>
                </Row>
           </Container>
        </div>
    )
}

export default HowItWorks

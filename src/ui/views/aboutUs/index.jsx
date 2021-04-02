import React from 'react'
import Layout from '../../layout/insex'
import { Col, Row } from 'react-bootstrap'

const about2 = 'https://justclick-backend-statics.s3.amazonaws.com/fe-statics/about_us.png'

const AboutUs = () => {
    return (
        <div>
            <Layout>
                <div className="banner container">
                    <Row>
                        <Col xs = "12" sm = "6" >
                            <img width = "100%" src={about2} alt="" srcset=""/>
                        
                        </Col>
                    <Col className = "px-3 my-auto" xs = "12" sm = "6" >
                        <h2 className = "text-center" >About Us</h2>
                        <p>Hi there. We’re JUSTCLICKGH, this creative platform makes it easy for talents and clients to work together to create designs they love. We connect more talented freelance with creative people, genius entrepreneurs, savvy businesses… anyone who needs great work.</p>
                        </Col>
                    </Row>
                </div>

                <div className="content container mt-5 ">

                <div className="my-5">
                    <h4>Our Mission</h4>
                    <ul>
                        <li>To place our clients and potential clients first in all our endeavors.
To emphasize the importance of time and speed in our service delivery without compromising on quality.
To research, design, download,develop and manage products that meet the day-to-day marketing and operational needs of our clients.</li>

                        <li>To enter into strategic relationship with other industry leaders in Ghana with the bid of providing our clients with very reliable and professional services.</li>
                        <li>We make use of up-to-date technologies in our service delivery
To keep our entire workforce abreast with new ICT developments
To bring designers, event planners, photographers, artists, businesses and individuals on one platform</li>
                            <li>To connects clients to prospective designers , event planners and photographers</li>
                    </ul>

                </div>

                <div className="my-5">
                    <h4> Our Values​</h4>
                    <ul>
                        <li> Trust, Professionalism and Speed </li>
                        <li>Client Focused</li>
                        <li> Teamwork and Collaboration</li>
                        <li></li>
                    </ul>
                </div>



                </div>


            </Layout>
            
        </div>
    )
}

export default AboutUs

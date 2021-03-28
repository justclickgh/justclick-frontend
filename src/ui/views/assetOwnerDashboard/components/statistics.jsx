import { Breadcrumb, Card, Statistic } from 'antd'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const StatisticsPage = () => {
    return (
        <div className = "bg-light" style = {{height:"100vh"}} >
                   < Breadcrumb className = "p-3" >
                   <Breadcrumb.Item>
                        Dashboard
                   </Breadcrumb.Item>
                   <Breadcrumb.Item>
                        Statistics
                   </Breadcrumb.Item>
                   </Breadcrumb>

                    <Container>

                    <Row>
                        <Col className = "mt-4 text-center"  xs = "12" sm = "6" >
                            <Card lassName = "my-3" >
                                <Statistic
                                title = "Total Assets"
                                />
                            </Card>
                            
                        </Col>
                            <Col className = "mt-4 text-center" xs = "12" sm = "6" >
                            <Card lassName = "my-3" >
                               <Statistic
                                title = "Total Downloads"
                                />
                            </Card>
                            
                        </Col>
                    </Row>
                     </Container>
        </div>
    )
}

export default StatisticsPage

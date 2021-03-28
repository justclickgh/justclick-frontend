import { Card } from 'antd'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Banner from './banner'

const DesignTemplate = () => {
    return (
        <div>
            <Banner/>
            <h1>Design Template</h1>
            <Row>
                <Col>
                <Card hoverable title = "Card title" >

                </Card>
                
                </Col>
            </Row>
  
        </div>
    )
}

export default DesignTemplate

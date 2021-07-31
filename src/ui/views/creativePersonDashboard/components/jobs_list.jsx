import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons'
import { Col, Row } from 'antd'
import React from 'react'

const JobsList = ({title,discription,}) => {
    return (
        <div>
            <Row>
          <Col xs = "12" sm = "12" md = "6" lg = "4">
          <Card
          style={{ width: 300, marginTop: 16 }}
          actions={[
            <SettingOutlined  disabled key="setting" />,
            <EditOutlined disabled key="edit" />,
            <EllipsisOutlined disabled key="ellipsis" />,
          ]}
        >

        </Card>
          </Col>
          </Row>
        </div>
    )
}

export default JobsList

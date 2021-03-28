import React from 'react'
import { Skeleton, Card } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import { connect } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
const { Meta } = Card;

class JobsCardSkeleton extends React.Component {
  state = {
    loading: true,
  };

  onChange = checked => {
    this.setState({ loading: !checked });
  };
  


  render() {
    return (
      <>
        <Row>
          <Col xs = "12" sm = "12" md = "6" lg = "4">
          <Card
          style={{ width: 300, marginTop: 16 }}
          actions={[
            <SettingOutlined disabled key="setting" />,
            <EditOutlined disabled key="edit" />,
            <EllipsisOutlined disabled key="ellipsis" />,
          ]}
        >
          <Skeleton  loading={true}  active>
            <Meta
              title="Card title"
              description="This is the description"
              paragraph = "Some paragraph here"
            />
          </Skeleton>
        </Card>
          </Col>
          <Col xs = "12" sm = "12" md = "6" lg = "4">
          <Card
          style={{ width: 300, marginTop: 16 }}
          actions={[
            <SettingOutlined disabled key="setting" />,
            <EditOutlined disabled key="edit" />,
            <EllipsisOutlined disabled key="ellipsis" />,
          ]}
        >
          <Skeleton  loading={true}  active>
            <Meta
            //   avatar={
            //     <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            //   }
              title="Card title"
              description="This is the description"
              paragraph = "Some paragraph here"
            />
          </Skeleton>
        </Card>
          </Col>
          <Col xs = "12" sm = "12" md = "6" lg = "4">
          <Card
          style={{ width: 300, marginTop: 16 }}
          actions={[
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
          ]}
        >
          <Skeleton  loading={true}  active>
            <Meta
            //   avatar={
            //     <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            //   }
              title="Card title"
              description="This is the description"
              paragraph = "Some paragraph here"
            />
          </Skeleton>
        </Card>
          </Col>
          
        </Row>
      </>
    );
  }
}



function mapStateToProps(state) {
  return {
      jobsData: state.curUserJob
  };
}

export default connect(mapStateToProps)(JobsCardSkeleton)


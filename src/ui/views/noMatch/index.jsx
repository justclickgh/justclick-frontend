import { Result, Button } from 'antd';
import React from 'react'
import { Link } from 'react-router-dom';
import Layout from '../../layout/insex';

const NoMatch = () => {
  return (

    <Layout>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={<Link to="/" ><Button type="primary">Back Home</Button></Link>}
      />,       </Layout>

  )
}

export default NoMatch

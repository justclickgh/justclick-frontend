import { Result, Button } from 'antd';
import React from 'react'
import Layout from '../../layout/insex';

const NoMatch = () => {
    return (
        
            <Layout>
             <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
                extra={<Button href = "/" type="primary">Back Home</Button>}
  />,       </Layout>
        
    )
}

export default NoMatch

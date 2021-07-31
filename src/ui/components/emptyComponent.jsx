import { Button, Result } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

const EmptyComponent = ({match}) => {
    return (
        <div>
             <Result
            status="404"
            title="No data"
            subTitle="Sorry, There is no data"
                extra={<Link to={match.url} ><Button type="primary">Reload</Button></Link>}
  />
        </div>
    )
}

export default EmptyComponent

import { Button, Result } from 'antd'
import React from 'react'

const EmptyComponent = ({match}) => {
    return (
        <div>
             <Result
            status="404"
            title="No data"
            subTitle="Sorry, There is no data"
            extra={<Button href = {match.url} type="primary">Reload</Button>}
  />
        </div>
    )
}

export default EmptyComponent

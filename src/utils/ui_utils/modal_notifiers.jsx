import { Modal, Result } from 'antd'
import React from 'react'

export const SuccessModalNotifiers = ({message,title,visible,setVisible,onClose}) => {
    return (
        <Modal
        visible = {visible}
        onOk = {onClose}
        onClose = {onClose}
        >
        <Result
            status="success"
            title={title}
            subTitle={message}
            extra={[
            <Button type="primary" key="console">
                Go Console
            </Button>,
            <Button key="buy">Buy Again</Button>,
            ]}
        />
        </Modal>
    )
}



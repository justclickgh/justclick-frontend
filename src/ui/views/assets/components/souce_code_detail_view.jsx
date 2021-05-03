import { Image, Button, Card, Modal, message, Empty } from 'antd'
import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { DownloadOutlined, HeartOutlined, ShareAltOutlined, CommentOutlined, EyeOutlined } from '@ant-design/icons'
import { codes } from './source-codes'
import axios from 'axios'
import { assetPaymentPath } from '../../../../utils/network_utils/endpoints'
import getAuthToken from '../../../../utils/get_auth_token'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
const SourceDetailView = ({ match, assetsData }) => {
    const [state, setState] = useState({
        payment_modal_visible: false
    })
    const handleCancel = () => {
        setState({
            ...state,
            payment_modal_visible: false
        })
    }
    const showPaymenetModal = () => {
        console.log("adsasdasd");
        setState({
            ...state,
            payment_modal_visible: true
        })
    }
    const handleSubmit = () => {
        const token = getAuthToken()
        if (token !== null) {
            console.log(token);
            const config = {
                headers: {
                    "Content-Type": 'application/json',
                    "Authorization": `Bearer ${token}`
                }
            }


            axios.post(assetPaymentPath('8200e2ae-b079-4250-b5cf-f440f1d5e485'), {}, config).then(res => {
                console.log(res.data);
                window.open(res.data.payment_url)

            }).catch(error => {
                if (error.response) {
                    console.log(error.response);

                    message.error(error.response.data.detail)

                } else if (error.request) {
                    message.error("Network error")
                }
            })
        } else {
            message.error("Session expired")
        }
        handleCancel()
    }
    const paymentModa = <Modal onOk={handleSubmit} onCancel={handleCancel} visible={state.payment_modal_visible} title="Payment">
        The Asset above is not not free. Pay for premium
    </Modal>
    return (
        <div className="container" >
            {console.log(assetsData)}
            {paymentModa}
            <div className="mx-2">


                <Row>
                    <Col xs="12" sm="12" md="12" lg="7" >
                        <Image src={codes[match.params.code_id - 1].image} />
                    </Col>
                    <Col xs="12" sm="12" md="12" lg="5" >
                        <h2 className=" mt-5 " >The title for some here some</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente consectetur debitis necessitatibus molestiae fuga nihil neque tempora, nesciunt harum corporis voluptas maiores nam adipisci voluptates error rem dolor quo blanditiis.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam unde dolorem quaerat vitae quibusdam ducimus. Labore non assumenda, nobis, voluptas ex doloremque cumque omnis blanditiis amet qui maiores facere explicabo?
                    </p>
                        <div className="my-3">
                            <Button shape="circle" style={{ border: "none", fontSize: "1rem" }}  >
                                <HeartOutlined />
                            </Button>
                            <Button shape="circle" style={{ border: "none", fontSize: "1rem" }}  >
                                <ShareAltOutlined />
                            </Button>
                            <Button shape="circle" style={{ border: "none", fontSize: "1rem" }}  >
                                <CommentOutlined />

                            </Button>

                            <span className="pl-3" >posted by: {`Thomas Sarpong`}</span>
                        </div>
                        <Button onClick={showPaymenetModal} shape="round" style={{ width: "100%", height: "2.5rem", borderColor: "green", color: "green" }} > <DownloadOutlined style={{ fontSize: "1.3rem" }} /> Download</Button>

                    </Col>

                </Row>
            </div>
            <div className="bg-light mt-5 my-4  p-3">
                <h3 className="text-center mb-5  " >
                    Similar Designs
                </h3>

                <Row>
                    {assetsData.assets.length === 0 ? <Empty className="mx-auto" /> : codes.map(code => <Col key={code.id} className="my-2" xs="12" sm="6" lg="4" >
                        <Card hoverable cover={<Image src={code.image} />} >
                            <p>{code.title}</p>
                            <div style={{ width: "100%", height: "60px", overflow: "hidden" }}  >
                                <Row>
                                    <Col xs="8" sm="8">
                                        <small style={{ textOverflow: "ellipsis" }} >{code.description}</small>

                                    </Col>

                                </Row>
                            </div>
                            <hr />
                            <Row>
                                <Col xl="8" sm="8" >
                                    <small>{`posted at: 12-12-2021`}</small> <br />
                                    <small>{`posted by: Thomas Sarpong`}</small>

                                </Col>
                                <Col xl="4" sm="4" >
                                    <Row>
                                        <Col xs="6" sm="6" >
                                            <Link to={`/assets/source-codes/${code.id}`}>
                                                <Button  style={{ borderColor: "green", padding: ".4em" }} >
                                                    <EyeOutlined style={{ color: "green", fontSize: "1.2rem" }} />
                                                </Button>
                                            </Link>

                                        </Col>
                                        <Col className="mr-1" xs="5" sm="5" >
                                            <Button onClick={showPaymenetModal} style={{ borderColor: "green", padding: ".4em" }} >
                                                <DownloadOutlined style={{ color: "green", fontSize: "1.2rem" }} />
                                            </Button>
                                        </Col>

                                    </Row>

                                </Col>
                            </Row>

                        </Card>
                    </Col>)}
                </Row>

            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        assetsData: state.assets

    }
}



const mapDispatchToProps = dispatch => {
    return {

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SourceDetailView)

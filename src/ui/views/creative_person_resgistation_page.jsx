import React, { useState } from 'react'
import Layout from '../layout/insex'
import '../../assets/css/asset_owner_registration.css'
import { Card, Form, Input, Select, Button, Result } from 'antd'
import { Col, Row } from 'react-bootstrap'
import { tags } from '../../utils/tags'

// const tailLayout = {
//     wrapperCol: { offset: 8, span: 16 },
// };


const FreelancerRegistrationPage = () => {
    const [state, setState] = useState({
        currentFs: 0,
        payment_mode: "momo"
    })
    const nextFs = () => {
        if (state.currentFs < 3) {
            setState({
                ...state,
                currentFs: state.currentFs + 1
            })
        }

    }
    const previousFs = () => {
        if (state.currentFs > 0) {
            setState({
                ...state,
                currentFs: state.currentFs - 1
            })

        }


    }
    const submit = e => {
        e.preventDefault()
        nextFs()
    }
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 8 },
    };

    return (
        <Layout>

            <div className="container" id="grad1">
                <div className="row justify-content-center mt-0">
                    <div className="col-11 col-sm-9 col-md-10 col-lg-7 text-center p-0 mt-3 mb-2">
                        <div className=" px-0 pt-4 pb-0 mt-3 mb-3">
                            <h2><strong>Set up asset freelancer account</strong></h2>
                            <p>Fill all form field to go to next step</p>


                            <div className="row">
                                <div className="col-md-12 mx-0">
                                    <Form
                                        {...layout}
                                        id="msform">
                                        <ul id="progressbar">
                                            <li className={`${state.currentFs >= 0 ? "active" : ""}`} id="account"><strong>Account</strong></li>
                                            <li className={`${state.currentFs >= 1 ? "active" : ""}`} id="personal"><strong>Tags</strong></li>
                                            <li className={`${state.currentFs >= 2 ? "active" : ""}`} id="payment"><strong>Payment mode</strong></li>
                                            <li className={`${state.currentFs === 3 ? "active" : ""}`} id="confirm"><strong>Finish</strong></li>
                                        </ul>

                                        <Card id="c-card" >
                                            <Form hidden={state.currentFs !== 0}>
                                                <div className="fieldset1">
                                                    <Form.Item

                                                        label="USERNAME"  >
                                                        <Input type="text" />
                                                    </Form.Item>
                                                    <Row>
                                                        <Col>
                                                            <Form.Item label="GENDER"  >
                                                                <Input type="text" />
                                                            </Form.Item>
                                                        </Col>
                                                        <Col>
                                                            <Form.Item label="AGE"  >
                                                                <Input type="number" />
                                                            </Form.Item>
                                                        </Col>
                                                    </Row>

                                                    <Row>
                                                        <Col>
                                                            <Form.Item label="PHONE NUMBER"  >
                                                                <Input type="number" />
                                                            </Form.Item>
                                                        </Col>
                                                        <Col>
                                                            <Form.Item label="EXPERTISE"  >
                                                                <Select type="text" >
                                                                    <Select.Option> PHOTOGRAPHY</Select.Option>
                                                                    <Select.Option>GRAPHIC DESIGNER</Select.Option>
                                                                    <Select.Option> DEVELOPER</Select.Option>
                                                                    <Select.Option> EVENT PLANNING</Select.Option>
                                                                </Select>
                                                            </Form.Item>
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col>
                                                            <Form.Item label="EXPERIENCE"  >
                                                                <Input type="number" />
                                                            </Form.Item>
                                                        </Col>
                                                        <Col>
                                                            <Form.Item label="Unit"  >
                                                                <Select>
                                                                    <Select.Option>
                                                                        Months
                                                                    </Select.Option>
                                                                    <Select.Option>
                                                                        Years
                                                                    </Select.Option>
                                                                </Select>
                                                            </Form.Item>
                                                        </Col>
                                                    </Row>


                                                    <Form.Item label="UPLOAD CV"  >
                                                        <Input type="file" />
                                                    </Form.Item>

                                                    <Form.Item style={{ textAlign: "start" }} help="Describe experiences in past jobs" label="DESCRIPTION"  >
                                                        <Input.TextArea rows="4" type="textarea" />
                                                    </Form.Item>


                                                </div>
                                                <Row style={{ marginLeft: "5em" }} >
                                                    <Col>
                                                        <Button
                                                            onClick={previousFs}
                                                            hidden={state.currentFs === 0}
                                                            style={{ width: "80%", borderColor: "red", color: "red" }}
                                                            shape="round"
                                                        >
                                                            Previous
                                                        </Button>

                                                    </Col>
                                                    <Col>
                                                        <Button
                                                            onClick={submit}
                                                            style={{ width: state.currentFs === 0 ? "100%" : "80%", borderColor: "green", color: "green" }}
                                                            shape="round" htmlType="submit"> {state.currentFs === 3 ? "Submit" : "Next"} </Button>

                                                    </Col>
                                                </Row>
                                            </Form>
                                            <Form hidden={state.currentFs !== 1} >
                                                <div className="fieldset1">
                                                    
                                                       
                                                            <Form.Item label="Tage"  >
                                                                <Select
                                                                mode = "multiple"
                                                                >
                                                            {tags.map(tag=><Select.Option key = {tag} >{tag.toLowerCase()}</Select.Option>)}
                                                                </Select>
                                                            </Form.Item>
                                                        
                                                    

                                                 

                                                </div>
                                                <Row style={{ marginLeft: "5em" }} >
                                                    <Col>
                                                        <Button
                                                            onClick={previousFs}
                                                            hidden={state.currentFs === 0}
                                                            style={{ width: "80%", borderColor: "red", color: "red" }}
                                                            shape="round"
                                                        >
                                                            Previous
                                                        </Button>

                                                    </Col>
                                                    <Col>
                                                        <Button
                                                            onClick={submit}
                                                            style={{ width: state.currentFs === 0 ? "100%" : "80%", borderColor: "green", color: "green" }}
                                                            shape="round" htmlType="submit"> {state.currentFs === 3 ? "Submit" : "Next"} </Button>

                                                    </Col>
                                                </Row>
                                            </Form>
                                            <Form hidden={state.currentFs !== 2} >

                                                <Form.Item label="PAYMENT MODE"  >
                                                    <Select type="text" >
                                                        <Select.Option> Mobile money </Select.Option>
                                                        <Select.Option> Bank account </Select.Option>
                                                    </Select>
                                                </Form.Item>

                                                {state.payment_mode === "momo" ? (
                                                    <Form.Item label="NETWORK"  >
                                                        <Input type="text" />
                                                    </Form.Item>
                                                ) : (
                                                    <Form.Item label="BANK"  >
                                                        <Input type="text" />
                                                    </Form.Item>

                                                )}
                                                <Form.Item label="ACCOUNT NUMBER"  >
                                                    <Input type="text" />
                                                </Form.Item>



                                                <Row style={{ marginLeft: "5em" }} >
                                                    <Col>
                                                        <Button
                                                            onClick={previousFs}
                                                            hidden={state.currentFs === 0}
                                                            style={{ width: "80%", borderColor: "red", color: "red" }}
                                                            shape="round"
                                                        >
                                                            Previous
                                                        </Button>

                                                    </Col>
                                                    <Col>
                                                        <Button
                                                            onClick={submit}
                                                            style={{ width: state.currentFs === 0 ? "100%" : "80%", borderColor: "green", color: "green" }}
                                                            shape="round" htmlType="submit"> {state.currentFs === 3 ? "Submit" : "Next"} </Button>

                                                    </Col>
                                                </Row>
                                            </Form>

                                            <div hidden={state.currentFs !== 3} className="finish">
                                                <Result
                                                    status="success"
                                                    title="Congratulations"
                                                    subTitle={(
                                                        <>
                                                            <p>You have succefully setup up an freelancer account. </p>
                                                            <small>Your account will be reviewed and confimed within 48 hours.</small>
                                                        </>
                                                    )}
                                                />
                                            </div>
                                        </Card>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default FreelancerRegistrationPage

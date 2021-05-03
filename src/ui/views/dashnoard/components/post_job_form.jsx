import { Form, Button, Input, Select, message, notification, DatePicker } from "antd"
// import { Col, Row } from "react-bootstrap"
import React, { useState } from 'react'
// import { InfoOutlined } from "@ant-design/icons"
import { usePaystackPayment } from 'react-paystack';
import { v4 as uuid4 } from 'uuid'
import axios from 'axios'
import { connect } from 'react-redux';
import { confirmJobsPath, createDesignJobInfoPath, createDevelopemtJobInfoPath, createPhotoJobInfoPath, createPlanningJobInfoPath, jobPath } from "../../../../utils/network_utils/endpoints"
import getAuthToken from "../../../../utils/get_auth_token"
// import TextArea from "antd/lib/input/TextArea"
import { postJob } from "../../../../redux/actions/job_actions"
import { useForm } from "../../../../utils/hooks/use_form"
import "../assets/post-forms.css"
import { Col, Row } from "react-bootstrap";


const PostJobPage = ({ jobsData }) => {
    const [values, handleChange] = useForm({
        title: "",
        description: "",
        posted_by: "",
        job_category: "",
        budget: "",
        prefered_tech: "",
        event_type: "",
        products_needed: "",
        city: "",
        longitude: "",
        latitude: "",
        programe_type: "",
        other_size_of_project: "",
    })
    const [fieldErrors, setError] = useState({
        description: [],
        title: [],
        due_date: [],
        budget: [],
        job_type: [],
        city: [],
        latitude: [],
        longitude: [],
        products_needed: [],
        programe_type: [],
        dev_type: [],
        prefared_technologies: [],
        size_of_project: [],
        other_size_of_project: [],
        design_format: [],
        event_type: []


    })
    const [state, setState] = useState({
        filtered: jobsData.jobs,
        // page_data: jobsData.jobs.slice(0,number_per_page),
        post_job_completed: 0,
        payment_failed: false,
        error_message: "",
        payment_loading: false,
        form_number: 2,
        temp: 1,
        job_id: "",
        sepc_design_size: "",
        amount: 0,
        reference: "",
        colors: ["Blue"]


    })


    const [selects, setSelects] = useState({
        dev_stack: "",
        dev_type: "",
        project_size: "",
        design_format: "",


    })




    const [dueDate, setDueDate] = useState(null)
    const [dueDateString, setDueDateString] = useState("")
    const [jobsCategory, setJobCategory] = useState("");
    const handleJobCategoryChange = (selected) => {
        console.log(selected);
        let form_number = 1
        if (selected === "WEB/MOBILE DEVELOPMENT") {
            form_number = 2
        }
        else if (selected === "GRAPHIC DESIGN") {
            form_number = 3
        }
        else if (selected === "EVENT PLANNING") {
            form_number = 4
        } else {
            form_number = 5
        }
        setState({
            ...state,
            temp: form_number
        })
        setJobCategory(selected)
    }
    const handleDateChange = (date, string) => {
        setDueDate(date)
        setDueDateString(string)
    }



    const fd = new FormData()
    const getColors = () => {
        let colors = []
        if (state.colors.length !== 0) {
            state.colors.map(color => {
                colors.push({
                    color: color
                })
                return colors
            })
        }
        return colors
    }

    const getInfoData = () => {
        switch (jobsCategory) {
            case 'PHOTOGRAPHY':
                fd.append('programe_type', values.event_type)
                fd.append('products_needed', values.products_needed)
                fd.append('city', values.city)
                fd.append('longitude', values.longitude)
                fd.append('latitude', values.latitude)
                return fd
            case 'WEB/MOBILE DEVELOPMENT':
                fd.append('job_type', selects.dev_stack)
                fd.append('dev_type', selects.dev_type)
                fd.append('prefared_technologies', values.prefered_tech)
                return fd
            case 'EVENT PLANNING':
                fd.append('programe_type', values.event_type)
                fd.append('products_needed', values.products_needed)
                fd.append('city', values.city)
                fd.append('longitude', values.longitude)
                fd.append('latitude', values.latitude)
                return fd

            default:
                fd.append('size_of_project', selects.project_size)
                fd.append('other_size_of_project', values.other_size_of_project)
                fd.append('design_format', selects.design_format)
                fd.append('colors', JSON.stringify(getColors()))
                const data = {
                    size_of_project: selects.project_size,
                    other_size_of_project: values.other_size_of_project,
                    design_format: selects.design_format,
                    colors: getColors()
                }

                return data;
        }
    }

    const getPath = () => {
        switch (jobsCategory) {
            case 'PHOTOGRAPHY':
                return createPhotoJobInfoPath(state.job_id)
            case 'WEB/MOBILE DEVELOPMENT':
                return createDevelopemtJobInfoPath(state.job_id)
            case 'EVENT PLANNING':
                return createPlanningJobInfoPath(state.job_id)
            default:
                return createDesignJobInfoPath(state.job_id)
        }
    }

    const postInfo = (e) => {
        e.preventDefault()
        const token = getAuthToken()
        if (token !== null) {
            const config = {
                headers: {
                    "Content-Type": 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            }
            // console.log(getPath());
            console.log(getInfoData());

            axios.post(getPath(), getInfoData(), config).then(res => {

                console.log(res.data)
                setState({
                    ...state,
                    post_job_completed: state.post_job_completed + 33,
                    form_number: 3,
                    amount: values.budget

                })
            }).catch(error => {
                if (error.response) {
                    console.log(error.response);
                    if (error.response.status === 400) {
                        const error_data = error.response.data
                        setError({
                            ...fieldErrors,
                            job_type: error_data.job_type ? error_data.job_type : [],
                            city: error_data.city ? error_data.city : [],
                            latitude: error_data.latitude ? error_data.latitude : [],
                            products_needed: error_data.products_needed ? error_data.products_needed : [],
                            programe_type: error_data.programe_type ? error_data.programe_type : [],
                            dev_type: error_data.dev_type ? error_data.dev_type : [],
                            prefared_technologies: error_data.prefared_technologies ? error_data.prefared_technologies : [],
                            size_of_project: error_data.size_of_project ? error_data.size_of_project : [],
                            other_size_of_project: error_data.other_size_of_project ? error_data.other_size_of_project : [],
                            design_format: error_data.design_format ? error_data.design_format : [],
                            event_type: error_data.programe_type ? error_data.programe_type : []
                        })
                    } else {
                        message.error(error.response.data.detail)
                    }

                } else if (error.request) {
                    message.error("Network error")
                }
            })


        } else {
            message.error("Session expired")
        }

    }

    const createJob = (e) => {
        e.preventDefault()
        const token = getAuthToken()
        if (token !== null) {
            const config = {
                headers: {
                    "Content-Type": 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            }
            const data = {
                title: values.title,
                description: values.description,
                job_category: jobsCategory,
                due_date: dueDateString,
                budget: values.budget
            }
            axios.post(jobPath, data, config).then(res => {
                console.log(res.data)
                setState({
                    ...state,
                    post_job_completed: state.post_job_completed + 33,
                    form_number: 2,
                    job_id: res.data.job_id
                })
                message.success('Job posted successfully')
            }).catch(error => {
                if (error.response) {
                    console.log(error.response);
                    const error_data = error.response.data
                    if (error.response.status === 400) {
                        setError({
                            ...fieldErrors,
                            title: error_data.title ? error_data.title : [],
                            budget: error_data.budget ? error_data.budget : [],
                            description: error_data.description ? error_data.description : [],
                            job_type: error_data.job_category ? error_data.job_category : [],
                            due_date: error_data.due_date ? error_data.due_date : []

                        })
                    }

                } else if (error.request) {
                    message.error("Network error")
                }
            })

        } else {
            message.error("Session expired")
        }
    }

    const handleSubmit = (e) => {
        console.log();
        e.preventDefault()
        const data = {
            title: values.title,
            description: values.description,
            job_category: jobsCategory,
            due_date: dueDateString,
            budget: values.budget
        }
        postJob(data)

    }
    // const handleLoadFailedMessage = () => {
    //     if (jobsData.failed) {
    //         message.error(jobsData.message)
    //     }
    // }
    // const handleSuccess = () => {
    //     if (allJobsData.postSuccess) {

    //         setVisible(false)
    //         message.success("You have successfully posted a job")
    //     }
    // }


    const conf = {
        reference: uuid4,
        amount: values.budget * 100,
        email: "email@asds.com",
        currency: "GHS",
        publicKey: 'pk_test_051ba69b3f125bfcdb6dc133e72b04c8436ffbb4',
    }

    const onClose = () => {
        message.error("Payment canceled")
        console.log('closed')
    }




    const onSuccess = () => {
        notification.success({
            description: "Payment made succesfully"
        })
        const token = getAuthToken()

        const config = {
            headers: {
                "Content-Type": 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }
        console.log(state.reference);
        axios.get(confirmJobsPath(state.job_id), config).then(res => {

            console.log(res);
        }).catch(err => {
            console.log(err.response);
        })

    };

    const initiatePayment = () => {
        initializePayment(onSuccess, onClose)
        // setVisible(false)
    }

    const initializePayment = usePaystackPayment(conf);



    return (
        <div className="post-job">
            <div className="container-fluid" id="grad1">
                <div className="row justify-content-center mt-0">
                    <div className="col-11 col-sm-9 col-md-7 col-lg-6 text-center p-0 mt-3 mb-2">
                        <div className="card px-0 pt-4 pb-0 mt-3 mb-3">
                            <h2><strong>Sign Up Your User Account</strong></h2>
                            <p>Fill all form field to go to next step</p>
                            <div className="row">
                                <div className="col-md-12 mx-0">

                                    <ul id="progressbar">
                                        <li className="active" id="account"><strong>Account</strong></li>
                                        <li id="personal"><strong>Personal</strong></li>
                                        <li id="payment"><strong>Payment</strong></li>
                                        <li id="confirm"><strong>Finish</strong></li>
                                    </ul>
                                    <div className="form container">
                                        <Form hidden={state.form_number !== 1} id="msform">
                                            <Form.Item name="title" label="TItle" rules={[{
                                                required: true,
                                                message: "Job title is required"
                                            }]} >
                                                <Input

                                                />
                                            </Form.Item>
                                            <Form.Item
                                                label="Category"
                                                name="category"
                                            >
                                                <Select>
                                                    <Select.Option value="graphic_design" > Graphic Design </Select.Option>
                                                    <Select.Option value="development" > Web/Mobile App development </Select.Option>
                                                    <Select.Option value="photography" > Photography</Select.Option>
                                                    <Select.Option value="plainning" > Event PLanning</Select.Option>
                                                </Select>

                                            </Form.Item>

                                            <Row>
                                                <Col sm="6">
                                                    <Form.Item
                                                        name="budget"
                                                        label="Budget"
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message: "Must provide job's budget"
                                                            }
                                                        ]}
                                                    >
                                                        <Input type="number" />

                                                    </Form.Item>
                                                </Col>
                                                <Col sm="6">
                                                    <Form.Item label="Due data" name="due_date" >
                                                        <DatePicker />
                                                    </Form.Item>
                                                </Col>
                                            </Row>
                                            <Button htmlType="submit" shape="round" id="bt1"  > Next </Button>
                                        </Form>

                                        {/* Category forms*/}
                                        <Form>

                                        </Form>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )


}


function mapStateToProps(state) {
    return {
        jobsData: state.curUserJob,
        allJobsData: state.jobs
    };
}
function mapDispatchToProps(dispatch) {
    return {
        postJob: (data) => dispatch(postJob(data)),
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(PostJobPage)



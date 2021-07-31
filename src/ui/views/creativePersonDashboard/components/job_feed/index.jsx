import { Badge, Button, Card, Divider, Empty, Tabs, Modal, Spin } from 'antd'
import { green } from '@ant-design/colors';
import React, { useEffect, useState } from 'react'
import { DislikeOutlined, LikeFilled, LikeOutlined, StarOutlined } from '@ant-design/icons'
import { Col, Container, Row } from 'react-bootstrap'
import { connect } from 'react-redux';
import { applyJob, dislikeJob, getJob, likeJob, rateJob } from '../../../../../redux/actions/job_actions';

const JobFeed = ({jobsData,getJobData,likeJob,dislikeJob,rateJob,applyJob}) => {
    const callback = (key) =>{
        console.log(key);
    }
    const [state,setState] = useState({
        popOverVisible:false,
        apply_modal_visible:false,
        job_to_rate_id:"",
        j0b_to_apply_id:"",
        job_rate:1,
    })
    useEffect(() => {
        getJobData()
  
    }, [getJobData])

    const lightStyle = {
        fontSize : "1.2rem",
    }

    const greenstyle = {
        fontSize : "1.2rem",
        color:'#52c41a'
    }

    const getstyle = (key)=>{
        return state.job_rate >= key ? greenstyle:lightStyle   
    }
    const handleModalCancel = ()=>{
        setState({
            popOverVisible:false
        })
    }
    const handleModalSubmit = ()=>{
        const fd = new FormData()
        fd.append("rate",state.job_rate)

        rateJob(state.job_to_rate_id,fd)

        handleModalCancel()
    }
    const handleApplyModalCancel = ()=>{
        setState({
            ...state,
            apply_modal_visible:false
        })
    }
    const handleApplyModalOk = ()=>{
       applyJob(state.j0b_to_apply_id)
       handleApplyModalCancel()
    }
    const apply_modal = (
        <Modal
        visible = {state.apply_modal_visible}
        onCancel = {handleApplyModalCancel}
        onOk = {handleApplyModalOk}
        title = "Apply for Job"
        >

        By clicking on Okay, it means you have read and accepted conditions of jobs and our terms and conditions

        </Modal>
    )

    const rate_modal = (
        <>
        <Modal visible = {state.popOverVisible} onCancel = {handleModalCancel}  title="Rate Job"
        footer = {[
            <Button onClick = {handleModalCancel}>Cancel</Button>,
            <Button disabled = {jobsData.rateLoading} onClick = {handleModalSubmit}  >Rate</Button>
        ]}
        
        >

        <div className="ml-4">
        <Button className = "ml-2" onClick = {(e)=>{ setState({ ...state,job_rate:1 }) }}  shape = "round" >
                < StarOutlined  style = {getstyle(1)} className = "m-1"/>
        </Button> 
        <Button className = "ml-2" onClick = {(e)=>{ setState({ ...state,job_rate:2  }) }}  shape = "round" >
                < StarOutlined  style = {getstyle(2)} className = "m-1"/>
        </Button> 
        <Button  className = "ml-2" onClick = {(e)=>{ setState({ ...state,job_rate:3  }) }}  shape = "round" >
                < StarOutlined  style = {getstyle(3)} className = "m-1"/>
        </Button> 
        <Button className = "ml-2" onClick = {(e)=>{ setState({ ...state,job_rate:4  }) }}  shape = "round" >
                < StarOutlined  style = {getstyle(4)} className = "m-1"/>
        </Button> 
        <Button className = "ml-2" onClick = {(e)=>{ setState({ ...state,job_rate:5  }) }}  shape = "round" >
                < StarOutlined  style = {getstyle(5)} className = "m-1"/>
        </Button> 
        </div>
        </Modal>

        
        </>
    )
    
    return (
        <div>
            {rate_modal}
            {apply_modal}
            {console.log(jobsData.jobs)}
            <Container>
                <Card className = "mt-5">
                    <Tabs color = {green.primary} defaultActiveKey="1" onChange={callback}> 
                        <Tabs.TabPane  tab = "All Jobs " key = "1" >
                            <Row>
                                {jobsData.jobs.length ===0?
                                <Spin spinning = {jobsData.getLoading} tip = "Fetching job data" >
                                    <Empty/>
                                </Spin>
                            :jobsData.jobs.filter(job=>job.is_active).map(job=>(
                                <>
                                <Col className = "post-clumn pt-4 " sm = "12">
                                    <Row className = "mb-5">
                                        <Col sm = "9">
                                            <h6>{job.title}</h6>
                                        </Col>
                                        <Col sm = "3" className = "ml-auto">
                                        <Badge style={{ backgroundColor: '#52c41a' }}  showZero = {true} className = "mr-2" count = {job.likes}>
                                        <Button disabled = {jobsData.likeLoading}  onClick = {()=>{
                                            likeJob(job.job_id)
                                        }}  shape = "circle"  icon = {!jobsData.likeLoading? <LikeOutlined />: <LikeFilled/> }/>

                                        </Badge>

                                        <Badge showZero =  {true} count = {job.dislikes} > 
                                            <Button disabled = {jobsData.dislikeLoading} onClick = {()=>{
                                            dislikeJob(job.job_id)
                                        }}  shape = "circle" icon = {<DislikeOutlined />}/>
                                        </Badge>

                                        </Col>
                                    </Row>


                                    <Row className = "mb-3">
                                        <Col>
                                        <b>Web developer  - </b>
                                        Expertise
                                        </Col>

                                        <Col>
                                        <b>Skill -  </b>
                                        Django - python
                                        </Col>
                                        
                                    </Row>

                                    <Row className = "mb-5">
                                        <Col xs = "12">
                                        <b>$10  - </b>
                                        Budget
                                        </Col>

                                        <Col xs = "12">
                                        <b>Expert -  </b>
                                        Experience
                                        </Col>
                                        
                                    </Row>

                                    <Row className = "mb-5">
                                        <Col xs = "12">
                                            {job.description}
                                        </Col>
                                    </Row>


                                    <Row className = "mb-5">
                                        <Col xs = "12">
                                        <b>{job.due_date} - </b>
                                        Due date
                                        </Col>

                                        <Col xs = "12">
                                        <b>2020-05-15 </b>
                                        Posted date
                                        </Col>
                                    </Row>
                                    <Row className = "mb-5">

                                        <Col >
                                        posted by -  
                                        <b>Thomas Sarpong</b>
                                        </Col>

                                        <Col >
                                        Rate -   
                                        

                                    
                                        
                                            {console.log(job.rate)}
                                        <Badge showZero = {true} className = "ml-1" count = {job.rate}>
                                        
                                        <Button disabled = {jobsData.rateLoading}  onClick = {(e)=>{ 
                                            setState({ ...state,popOverVisible:true ,job_to_rate_id:job.job_id})
                                            
                                            }}  shape = "round" >
                                                < StarOutlined  style = {{fontSize : "1.2rem"}} className = "m-1"/>
                                        </Button>                                        

                                           
                                        </Badge>
                                        </Col>

                                        <Col>
                                            <Button onClick = {()=>{
                                                setState({
                                                    ...state,
                                                    apply_modal_visible:true,
                                                    j0b_to_apply_id:job.job_id
                                                })
                                            }} shape = "round" style = {{backgroundColor:'#52c41a',color:"#fff"}} >Apply</Button>
                                        </Col>
                                    
                                    </Row>


                                    <Divider/>
                                </Col>


                                </>
                            ))  
                            }
                                
                                
                                
                            </Row>
                        </Tabs.TabPane>
                        <Tabs.TabPane tab = "Best match Jobs Feed" key = "2" >
                           <Empty>Empty jobs</Empty>
                        </Tabs.TabPane>
                    </Tabs>

                </Card>
            </Container>
            
        </div>
    )
}
const mapStateToProps = state=>{
    return {
        jobsData:state.jobs
    }

}

const mapDispatchToProps = dispatch=>{
    return {
        getJobData : ()=>dispatch(getJob()),
        likeJob:(id)=>dispatch(likeJob(id)),
        dislikeJob:(id)=>dispatch(dislikeJob(id)),
        rateJob:(id,data)=>dispatch(rateJob(id,data)),
        applyJob: id=>dispatch(applyJob(id))
    }

}
export default connect(mapStateToProps,mapDispatchToProps)(JobFeed)

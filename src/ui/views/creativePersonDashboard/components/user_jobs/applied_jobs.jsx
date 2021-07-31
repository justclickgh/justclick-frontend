import { DeleteOutlined } from '@ant-design/icons'
import { Card, Divider, Empty, Skeleton, Tag ,Button} from 'antd'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { connect } from 'react-redux'

const AppliedJobsPart = ({jobsData}) => {

    return (
        <div>
            {console.log(jobsData)}
            <Card className = "my-5" title = "Applied Jobs">
                <Skeleton loading = {jobsData.getPendingLoading} >
                   
                <Row>
                {
                        jobsData.pendingJobs.length === 0?
                        <>
                        <Empty>
                            <p>No Pending job</p>
                        </Empty>
                        </>:
                        jobsData.pendingJobs.map(job=>(
                            <Col className = "my-2" xs = "12" sm = "6" md = "6" lg= "4" >
                                <Card title = {job.job.title}>
                                    <p>{job.job.description}</p>
                                    <p>Job Category - {job.job.job_category} </p>
                                    <p>Budget - {`${job.job.budget} GHS `}</p>
                                    <p>  Due date - <b> {job.job.due_date}</b></p>
                                   
                                    <Divider/>
                                    <Tag color = "red" >Not Approved</Tag>
                                    <Tag color = "green" >Payment Complted</Tag>
                                    <Button style ={{border:"none",marginLeft:"1.5em"}} shape = "circle">
                                        <DeleteOutlined style = {{color:"red",fontSize:"1.3rem"}} />
                                    </Button>
                                </Card>
                    
                        </Col>
                        ))
                    }
                    

                    
                </Row>
                </Skeleton>
            </Card>
            
        </div>
    )
}
const mapStateToProps = (state)=>{
    return {
        jobsData:state.currentFreelancerJobStatus
    }
}
export default connect(mapStateToProps) (AppliedJobsPart)
